# Generated by Django 4.0.5 on 2024-01-12 19:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_site', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='projects',
            name='long_description',
            field=models.TextField(default='none'),
        ),
    ]
