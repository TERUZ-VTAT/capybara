from django.shortcuts import render
from . forms import signupForm,loginform
from django.contrib.auth import login,logout
from django.contrib.auth.models import User

def booksignup_view(request):
    if request.method == "post":

        form = signupForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = signupForm()
    param = {
        "form":form
    }
    return render(request,"accounts/loginbook.html" ,param)

def signup_view(request):
    if request.method == "post":

        form = signupForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = signupForm()
    param = {
        "form":form
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
        'form': form,
    }

    return render(request, 'accounts/login.html', param)

def logout_view(request):
    logout(request)
    return render(request,"accounts/logout.html")

def user_view(request):
    user = request.user

    params = {
        'user': user
    }

    return render(request, 'accounts/user.html', params)


def other_view(request):
    users = User.objects.exclude(username=request.user.username)

    params = {
        'users': users
    }

    return render(request, 'accounts/other.html', params)
