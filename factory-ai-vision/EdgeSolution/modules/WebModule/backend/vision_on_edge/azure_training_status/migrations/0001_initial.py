# Generated by Django 3.0.7 on 2020-07-29 06:34

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('azure_training', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='TrainingStatus',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('status', models.CharField(max_length=200)),
                ('log', models.CharField(max_length=1000)),
                ('performance', models.CharField(default='{}', max_length=2000)),
                ('need_to_send_notification', models.BooleanField(default=False)),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='azure_training.Project')),
            ],
        ),
    ]
