from django import forms
from . import models

class groupcreateform(forms.ModelForm):
    class Meta:
        model = models.groupselectmodel
        fields = ("GroupName","Description","Owner")