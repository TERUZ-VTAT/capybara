# Generated by Django 4.2.3 on 2023-08-28 03:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_BBS', '0005_rooms_roomname_instant'),
    ]

    operations = [
        migrations.AddField(
            model_name='rooms',
            name='roomID_Instant',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
