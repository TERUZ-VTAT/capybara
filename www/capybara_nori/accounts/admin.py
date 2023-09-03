from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import Group

from .models import User

admin.site.register(User)  # Userモデルを登録
admin.site.unregister(Group)  # Groupモデルは不要のため非表示にします

# Register your models here.
