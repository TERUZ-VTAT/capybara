from django.shortcuts import render
from django.views.generic import ListView,TemplateView,DetailView
from django.urls import reverse_lazy
from . import models
from django.contrib.auth.mixins import LoginRequiredMixin
# Create your views here.

class profileview(LoginRequiredMixin, DetailView):
    model=models.profile
    login_url="/"
    template_name="profile.html"
