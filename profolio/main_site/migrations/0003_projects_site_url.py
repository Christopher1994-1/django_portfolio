# Generated by Django 4.0.5 on 2024-01-12 22:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_site', '0002_alter_projects_long_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='projects',
            name='site_url',
            field=models.TextField(default='none'),
        ),
    ]
