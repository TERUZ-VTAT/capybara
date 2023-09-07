from django.db import models

# Create your models here.
class groupselectmodel(models.Model):
    GroupName = models.CharField(max_length=30,error_messages={"required": "test"},blank=False)
    Owner = models.CharField(max_length=100000)
    Description = models.TextField(blank=True)
    MemberCount = models.IntegerField(default=1)