from django.urls import path
from . import views

urlpatterns = [
    path("",views.GroupCreate.as_view())
]