from django.urls import path
from . import views

urlpatterns = [
    path("",views.profileview.as_view(),name='index')
]

app_name = 'prof'