from django.shortcuts import render
from .models import Chat # Chat DB をインストール


def lobby(request):
    # all_messages = Chat.objects.all()
    return render(request, 'chat/lobby.html') #chat/lobby.htmlのパスが追加されている