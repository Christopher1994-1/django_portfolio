from django.db import models

# Create your models here.

class Projects(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField()
    technologies_used = models.TextField()
    imageCover = models.TextField(default='none')
    images = models.TextField(default='none')
    demo_url = models.TextField(default='none')
    gitHub = models.TextField(default='none')
    long_description = models.TextField(default='none')
    has_video = models.BooleanField()
    video_url = models.TextField(default='none')
    site_url = models.TextField(default='none')
    
    def __str__(self):
        return self.title