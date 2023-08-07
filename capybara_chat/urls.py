from django.urls import path,re_path
from . import views

urlpatterns = [
    path('', views.lobby, name='lobby') # viewsファイルで追加したlobbyのパスをurlの後ろに何もなかったらlobby.htmlを返す
]
# websocket_urlpatterns = [
#     re_path(r'ws/socket-server/', consumers.ChatConsumer.as_asgi())
# ]