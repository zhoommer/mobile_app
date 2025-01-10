from django.db import models
from django.contrib.auth.models import User

# Create your models here.


CATEGORY_CHOICES = [
    ("FAB", "Food and Beverages"),
    ("TRA", "Transportation"),
    ("RAU", "Rent and Utilities"),
    ("EAD", "Education and Development"),
    ("HAC", "Health and Care"),
    ("EAH", "Entertainment and Hobbies"),
    ("CAA", "Clothing and Accessories"),
    ("HAF", "Home and Furniture"),
    ("TAV", "Travel and Vacation"),
    ("DAC", "Donations and Charity"),
    ("DIS", "Digital Subscriptions"),
    ("CPE", "Child and Pet Expenses"),
    ("OTH", "Other"),
]



class Category(models.Model):
    name = models.CharField(max_length=3, choices=CATEGORY_CHOICES, unique=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'


class UserCategory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    total_limit = models.DecimalField(max_digits=10, decimal_places=2, blank=True, null=True)

    class Meta:
        verbose_name= 'UserCategory'
        verbose_name_plural = 'UserCategories'


class Expense(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Expense'
        verbose_name_plural = 'Expenses'
