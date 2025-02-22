from django.db import models

# Create your models here.

#! add a use cases like tags,

class Projects(models.Model):
    title = models.CharField(max_length=255)
    short_description = models.TextField()
    technologies_used = models.TextField()
    imageCover_large = models.TextField(default='none')
    imageCover_small = models.TextField(default='none')
    images = models.TextField(default='none')
    demo_url = models.TextField(default='none')
    gitHub = models.TextField(default='none')
    long_description = models.TextField(default='none')
    has_video = models.TextField(default="none")
    video_url = models.TextField(default='none')
    site_url = models.TextField(default='none')
    project_type = models.TextField(default='none')
    use_cases = models.TextField(default='none')
    
    
    def __str__(self):
        return self.title
    
    #. ENSURE THAT THE SHORT DESCRIPTION RETURNS ONLY 20 WORDS
    def short_d_short(self):
        split_words: list[str] = self.short_description.split(' ')
        return ' '.join(split_words[:10])