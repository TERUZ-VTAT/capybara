from django.db import models

# Create your models here.
class profile(models.Model):
    user_icon_s=models.CharField(max_length=100)
    user_name_s=models.CharField(max_length=100)
    user_id_s=models.CharField(max_length=100)
    user_description_s=models.TextField(max_length=300)
    user_password_s=models.CharField(max_length=100)
    user_birth_s=models.CharField(max_length=100)