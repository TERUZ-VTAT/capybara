from django.shortcuts import render
from django.views.generic import ListView
from . import models
# Create your views here.
class GroupSelect(ListView):
    template_name="groupselect.html"
    model = models.Rooms