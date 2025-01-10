from rest_framework import serializers
from .models import Category, UserCategory, Expense


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['id', 'name']

class UserCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = UserCategory
        fields = ['id', 'user', 'category', 'total_limit']


class ExpenseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expense
        fields = ['id', 'user', 'name', 'category', 'quantity', 'price', 'created_at', 'updated_at']
        read_only_fields = ['user']

class OverLimitCategorySerializer(serializers.Serializer):
    category_name = serializers.CharField()
    total_expense = serializers.DecimalField(max_digits=10, decimal_places=2)
    total_limit = serializers.DecimalField(max_digits=10, decimal_places=2)
