from django.contrib.auth.forms import UserCreationForm,AuthenticationForm
from django.contrib.auth.models import User

class signupForm(UserCreationForm):
    class meta:
        model = User
        fields=["username","email","password1","password2"]

class loginform(AuthenticationForm):
    pass