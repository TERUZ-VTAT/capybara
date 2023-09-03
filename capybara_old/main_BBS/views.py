from django.shortcuts import render
from django.views.generic import ListView,TemplateView,DetailView
from . import models
# Create your views here.
class mainBBSview(DetailView):
    model=models.profile
    template_name="profile.html"