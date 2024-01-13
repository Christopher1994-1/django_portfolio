# Generated by Django 4.0.5 on 2024-01-12 17:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Projects',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('short_description', models.TextField()),
                ('technologies_used', models.TextField()),
                ('imageCover', models.TextField(default='none')),
                ('images', models.TextField(default='none')),
                ('demo_url', models.TextField(default='none')),
                ('gitHub', models.TextField(default='none')),
                ('long_description', models.TextField()),
                ('has_video', models.BooleanField()),
                ('video_url', models.TextField(default='none')),
            ],
        ),
    ]
