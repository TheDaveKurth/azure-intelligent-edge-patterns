# Generated by Django 3.0.4 on 2020-05-06 14:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cameras', '0009_auto_20200429_1905'),
    ]

    operations = [
        migrations.AddField(
            model_name='image',
            name='confidence',
            field=models.FloatField(default=0.0),
        ),
        migrations.AddField(
            model_name='image',
            name='is_relabel',
            field=models.BooleanField(default=False),
        ),
    ]