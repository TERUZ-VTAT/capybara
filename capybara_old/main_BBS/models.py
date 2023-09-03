from django.db import models

# Create your models here.
class Rooms(models.Model):
    roomName_Instant = models.CharField(max_length=30)
    roomHost_Instant = models.CharField(max_length=50)
    roomMember_Instant = models.IntegerField()
    older_message = models.TextField()
    roomID_Instant = models.CharField(max_length=30)

    def __str__(self):
        return f"Roomname:{self.roomHost_Instant}/Member:{self.roomMember_Instant}/older message:{self.older_message}"