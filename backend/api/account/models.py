from django.db import models
from django.contrib.auth.models import User

# Create your models here.


CURRENCY_CHOICES = [
    ('USD', 'United States Dollar'),
    ('EUR', 'Euro'),
    ('JPY', 'Japanese Yen'),
    ('GBP', 'British Pound Sterling'),
    ('AUD', 'Australian Dollar'),
    ('CAD', 'Canadian Dollar'),
    ('CHF', 'Swiss Franc'),
    ('CNY', 'Chinese Yuan'),
    ('INR', 'Indian Rupee'),
    ('RUB', 'Russian Ruble'),
    ('KRW', 'South Korean Won'),
    ('TRY', 'Turkish Lira'),
    ('MXN', 'Mexican Peso'),
    ('BRL', 'Brazilian Real'),
    ('ZAR', 'South African Rand'),
]



class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    preferred_currency = models.CharField(max_length=3, choices=CURRENCY_CHOICES, default="TRY")
    photo = models.ImageField(upload_to='profile_photos/', blank=True, null=True)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

