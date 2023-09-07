import sys
sys.path.append('../')
from django.shortcuts import render
from django.views.generic import ListView
from creategroup import models
# Create your views here.
class GroupSelect(ListView):
    template_name="groupselect.html"
    model = models.groupselectmodel