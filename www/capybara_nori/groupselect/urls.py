from django.urls import path
from . import views

urlpatterns = [
    path("",views.GroupSelect.as_view(),name="groupselect")
]

app_name = 'groupselect'