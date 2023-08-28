from django.db import models
# from django.contrib.auth.models import AbstractUser

class login(models.Model):
    user_name = models.CharField(max_length=25)
    mail_adress = models.EmailField('メールアドレス', unique=True, max_length=100)
    password = models.CharField(max_length=100)
    password_re = models.CharField(max_length=100)

    def __str__(self):
        return self.user_name