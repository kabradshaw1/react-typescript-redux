# Generated by Django 4.1.7 on 2023-06-07 10:46

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('fitness', '0002_demo'),
    ]

    operations = [
        migrations.AddField(
            model_name='demo',
            name='created',
            field=models.DateTimeField(default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]