from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, IsAuthenticated, AllowAny

from .models import Category, UserCategory, Expense
from .serializers import CategorySerializer, UserCategorySerializer, ExpenseSerializer, OverLimitCategorySerializer

from django.db.models import Sum, F, ExpressionWrapper, DecimalField


# Create your views here.


class CategoryList(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer




class UserCategoryListCreateView(generics.ListCreateAPIView):
    serializer_class = UserCategorySerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return UserCategory.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        return serializer.save(user=self.request.user)


    


class ListCreateExpenseView(generics.ListCreateAPIView):
    serializer_class = ExpenseSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        return Expense.objects.filter(user=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class OverLimitExpensesView(generics.ListAPIView):
    permission_classes = [IsAuthenticated]

    def list(self, request, *args, **kwargs):
        user = self.request.user

        # Calculate total expenses per category for the user, including quantity
        categories = UserCategory.objects.all()
        over_limit_expenses = []

        for category in categories:
            total_expense = Expense.objects.filter(user=user, category=category).aggregate(
                total=Sum(ExpressionWrapper(F('quantity') * F('price'), output_field=DecimalField()))
            )['total'] or 0

            if category.total_limit and total_expense > category.total_limit:
                over_limit_expenses.append({
                    'category_name': category.name,
                    'total_expense': total_expense,
                    'total_limit': category.total_limit
                })

        serializer = OverLimitCategorySerializer(over_limit_expenses, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
