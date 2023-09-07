from django.shortcuts import render
from django.views.generic import FormView
from . import forms,models
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy,include

# Create your views here.
class GroupCreate(LoginRequiredMixin,FormView):
    template_name = "groupcreate.html"
    login_url = "/login"
    form_class = forms.groupcreateform

    def post(self, request, *args, **kwargs):
        global FORM_VALUES
        if 'sendbutton' in request.POST:
            self.success_url = "http://"+request.get_host()+"/groupselect"
            FORM_VALUES = {}

        return super().post(request, args, kwargs)

    def form_valid(self, form):
        # 送信ボタンが押されたとき
        if 'sendbutton' in self.request.POST:
            # バリデーション済みのデータを取得
            formdata = form.cleaned_data

            # フォームが複数あるので、一つずつループする
            for roomparameter in formdata:
                # フォームがからの可能性があるので、空ではないデータ飲み登録
                if roomparameter:
                    # フォームのデータでMemberモデルのオブジェクトを作成
                    room = models.groupselectmodel(*roomparameter)
                    # データを登録
                    room.save()
        return super().form_valid(form)