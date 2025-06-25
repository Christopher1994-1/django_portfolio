from django.contrib.sitemaps import Sitemap
from .models import Projects  # replace with your actual model
from django.urls import reverse



class ProjectSitemap(Sitemap):
    def items(self):
        return Projects.objects.order_by('id')

    def location(self, item):
        return reverse('projects_showcase', kwargs={'project': item.title})