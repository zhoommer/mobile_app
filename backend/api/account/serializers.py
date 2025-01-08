from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Profile


class RegisterSerializer(serializers.ModelSerializer):
    phone_number = serializers.CharField(source='profile.phone_number', required=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'password', 'phone_number']
        extra_kwargs = {
            'password': { 'write_only': True }
        }

    def create(self, validated_data):
        profile_data = validated_data.pop('profile')
        phone_number = profile_data.pop('phone_number')
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        Profile.objects.create(user=user, phone_number=phone_number)
        return user
