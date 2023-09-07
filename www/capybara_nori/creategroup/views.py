from django.shortcuts import render
from django.views.generic import FormView
from . import forms,models
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy,include

# Create your views here.
class GroupCreate(LoginRequiredMixin,FormView):
    template_name = "groupcreate.html"
    login_url = "/login"
    form_class = forms.groupcreateform
    success_url = reverse_lazy("groupselect")

    def form_valid(self, form):
        data = form.cleaned_data
        obj = models.groupselectmodel(**data)
        obj.save()

        return super().form_valid(form)