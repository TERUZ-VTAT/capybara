from django.urls import path
from . import views

urlpatterns = [
    path('', views.lobby, name='lobby') # viewsファイルで追加したlobbyのパスをurlの後ろに何もなかったらlobby.htmlを返す
]