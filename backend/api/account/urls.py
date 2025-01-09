from django.urls import path
from .views import RegisterView, LoginView, LogoutView, UserProfileView, ForgotPasswordView, ResetPasswordView, ChangePasswordView


urlpatterns = [
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', LoginView.as_view(), name='login'),
    path('auth/logout/', LogoutView.as_view(), name='logout'),

    path('profile/', UserProfileView.as_view(), name='user-profile'),

    path('forgot_password/', ForgotPasswordView.as_view(), name='forgot-password'),
    path('reset_password/<str:token>/', ResetPasswordView.as_view(), name='reset-password'),
    path('change_password/', ChangePasswordView.as_view(), name='change-password'),
]
