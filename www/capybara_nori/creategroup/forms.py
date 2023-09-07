from django import forms
from . import models

class groupcreateform(forms.ModelForm):
    def __init__(self, *args ,**kwargs):
        super().__init__(*args, **kwargs)
        self.fields["Owner"].widget.attrs["readonly"] = "readonly"

    class Meta:
        model = models.groupselectmodel
        fields = ("GroupName","Description","Owner")