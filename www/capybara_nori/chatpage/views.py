from django.shortcuts import render
from .models import Chat # Chat DB をインストール
from django.contrib.auth.decorators import login_required

@login_required
def lobby(request,room_id):
    if request.POST:
        message = request.POST["message"] # lobby.htmlに書いてあるformタグの中にあるmessageを変数messageに格納する
        sent_room_id = request.POST["sent_room_id"]
        chat_obj = Chat(message=message, sent_room_id=sent_room_id)
        chat_obj.save()

    all_messages = Chat.objects.all().filter(sent_room_id__exact=room_id)

    return render(request, 'chat/lobby.html', {'all_messages': all_messages,"room_id": room_id}) #chat/lobby.htmlのパスが追加されている