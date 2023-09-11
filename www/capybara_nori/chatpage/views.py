from django.shortcuts import render
from .models import Chat # Chat DB をインストール


def lobby(request):
    if request.POST:
        message = request.POST["message"] # lobby.htmlに書いてあるformタグの中にあるmessageを変数messageに格納する
        chat_obj = Chat(message=message)
        chat_obj.save()

    all_messages = Chat.objects.all()

    return render(request, 'chat/lobby.html', {'all_messages': all_messages}) #chat/lobby.htmlのパスが追加されている