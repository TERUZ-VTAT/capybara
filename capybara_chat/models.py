from django.db import models

# Create your models here.
class Chat(models.Model):
    message = models.TextField(max_length=300)
    created_at = models.DateTimeField(auto_now=True)
    # group = models.TextField(max_length=100)
    # author = models.ManyToManyField(userのDB名)