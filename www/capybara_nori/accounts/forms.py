from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

from .models import User
from django import forms


class SignUpForm(UserCreationForm):
    class Meta:
        model = User
        fields = (
            "account_id",
            "email",
            "first_name",
            #"last_name",
            #"birth_date",
        )
        widgets = {
            "account_id" : forms.TextInput(attrs={'placeholder':'ユーザーIDを入力してください'}),
            "email": forms.TextInput(attrs={'placeholder': 'メールアドレスを入力してください'}),
            "first_name": forms.TextInput(attrs={'placeholder': 'ユーザー名を入力してください'}),
            "password1": forms.TextInput(attrs={'placeholder': 'パスワードを入力してください'}),
        }


class LoginForm(AuthenticationForm):
    class Meta:
        model = User