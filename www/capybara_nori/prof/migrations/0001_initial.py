# Generated by Django 4.2.4 on 2023-09-03 09:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_icon_s', models.CharField(max_length=100)),
                ('user_name_s', models.CharField(max_length=100)),
                ('user_id_s', models.CharField(max_length=100)),
                ('user_description_s', models.TextField(max_length=300)),
                ('user_password_s', models.CharField(max_length=100)),
                ('user_birth_s', models.CharField(max_length=100)),
            ],
        ),
    ]
