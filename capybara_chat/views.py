from django.shortcuts import render


def lobby(request):
    return render(request, 'chat/lobby.html') #chat/lobby.htmlのパスが追加されている