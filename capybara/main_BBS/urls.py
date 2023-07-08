from django.urls import path
from . import views

urlpatterns = [
    path("",views.mainBBSview.as_view())
]