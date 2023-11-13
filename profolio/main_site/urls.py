from django.urls import path
from . import views
from django.contrib.sitemaps.views import sitemap


urlpatterns = [
    # paths for website routes
    path('', views.index, name="index"),
    path('tests/', views.tests, name='tests'),
    
]   