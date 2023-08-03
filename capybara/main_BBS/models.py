from django.db import models

class login(models.Model):
    user_name = models.CharField(max_length=25)
    mail_adress = models.EmailField()
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.user_name
    




    
    
    
    
    





