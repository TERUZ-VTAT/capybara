from django.db import models

# Create your models here.
class UserAccount(models.Model):
    username = models.CharField(max_length=25)
    password = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.username}"