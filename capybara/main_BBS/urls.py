from django.urls import path
from . import views

app_name = "main_BBS"

urlpatterns = [
    path("signup/",views.signup_view,name = "signup"),
    path("login/",views.login_view,name = "login"),
    path("logout/",views.logout_view,name = "logout"),
    path("user_view/",views.user_view,name = "user"),
    path("other_view/",views.other_view,name = "other"),
]













