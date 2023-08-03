from django.shortcuts import render
from django.http import HttpResponse
# #from django.views.generic import ListView
from . forms import signupForm,loginform
from django.contrib.auth import login,logout
from django.contrib.auth.models import User
# from django.contrib.auth.mixins import LoginRequiredMixin
# from django.contrib.auth.views import LoginView,LogoutView



# def signup_form(request):
#     pass
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









# Create your views here.
#class mainBBSview(ListView):
    # template_name=""
    # model = models.modelclassname

# class login_BBS():
#     template_name = "login.html" 
#     model = models.login
    # def login_html(request):
    #     return render(request,"login.html")

# class login(LoginView):
#     form_class = loginform
#     template_name = "accounts/login.html"





# class logout(LoginRequiredMixin,LogoutView):
#     template_name = "accounts/login.html"

