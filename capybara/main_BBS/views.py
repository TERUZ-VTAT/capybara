from django.shortcuts import render
from . forms import signupForm,loginform
from django.contrib.auth import login,logout
from django.contrib.auth.models import User
from . import models

loginData = models.login.objects.all()

def booksignup_view(request):
    if request.method == "post":

        form = signupForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = signupForm()
    param = {
        "userdata": loginData,
        "form":form
    }
    return render(request,"accounts/loginbook.html" ,param)

def signup_view(request):
    if request.method == "POST":

        form = signupForm(request.POST)
        if form.is_valid():
            signup_post=form.cleaned_data
            signup_post2=models.login(user_name=signup_post["user_name"], mail_adress=signup_post["mail_adress"], password=signup_post["password"], password_re=signup_post["password_re"],)
            signup_post2.save()
    else:
        form = signupForm()
    param = {
        "form": form,
        "userdata": loginData,
    }
    return render(request,"accounts/signup.html" ,param)


def login_view(request):
    if request.method == 'POST':
        form = loginform(request, data=request.POST)

        if form.is_valid():
            user = form.get_user()

            if user:
                login(request, user)

    else:
        form = loginform()

    param = {
        "userdata": loginData,
        'form': form,
    }

    return render(request, 'accounts/login.html', param)

def logout_view(request):
    logout(request)
    return render(request,"accounts/logout.html")

def user_view(request):
    user = request.user

    params = {
        "userdata": loginData,
        'user': user
    }

    return render(request, 'accounts/user.html', params)


def other_view(request):
    users = User.objects.exclude(username=request.user.username)

    params = {
        "userdata": loginData,
        'users': users
    }

    return render(request, 'accounts/other.html', params)
