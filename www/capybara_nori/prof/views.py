from django.shortcuts import render
from django.views.generic import ListView,TemplateView,DetailView
from . import models
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.
class profileview(LoginRequiredMixin,TemplateView):
    template_name="profile.html"
    login_url = "/login"