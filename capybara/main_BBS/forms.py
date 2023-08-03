#from django.contrib.auth.forms import AuthenticationForm 
from django import forms
from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth.models import User


# class loginform(AuthenticationForm):
#         def __init__(self, *args, **kwargs):
#             super().__init__(*args, **kwargs)
#             for field in self.fields.values():
#                 field.widget.attrs['class'] = 'form-control'     #　※１
#                 field.widget.attrs['placeholder'] = field.label  #  ※
class signupForm(UserCreationForm):
    class meta:
        model = User
        fields=["username","email","password1","password2"]

class loginform(AuthenticationForm):
    pass















