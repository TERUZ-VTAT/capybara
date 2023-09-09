from django.shortcuts import render
from django.views.generic import ListView,TemplateView,DetailView
from . import models
# Create your views here.
class profileview(DetailView):
    model=models.profile
    template_name="profile.html"