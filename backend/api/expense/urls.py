from django.urls import path
from .views import CategoryList, UserCategoryListCreateView, ListCreateExpenseView, RetriveUpdateDestroyExpenseView, OverLimitExpensesView


urlpatterns = [
    path('categories/', CategoryList.as_view(), name='categories'),
    path('category/', UserCategoryListCreateView.as_view(), name='category-list-create'),
    path('', ListCreateExpenseView.as_view(), name='expense-list-create'),
    path('<int:pk>/', RetriveUpdateDestroyExpenseView.as_view(), name='expense-detail'),
    path('over-limit-expenses/', OverLimitExpensesView.as_view(), name='over-limit-expenses'),
]
