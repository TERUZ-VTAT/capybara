from django.shortcuts import render
from django.views.generic import ListView
from . import models
# Create your views here.
class mainBBSview(ListView):
    template_name=""
    model = models.modelclassname