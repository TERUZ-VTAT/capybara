from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from . import models
from django.forms import ModelForm,TextInput

class signupForm(ModelForm):
    class Meta:
        model = models.login
        fields=["user_name","mail_adress","password","password_re"]
        widgets = {
            'mail_adress': TextInput(attrs={'type': 'email'}),
            'password' : TextInput(attrs={'type': 'password'}),
            'password_re' : TextInput(attrs={'type': 'password'}),
        }

class loginform(AuthenticationForm):
    pass