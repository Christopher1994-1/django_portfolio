from django.urls import path
from . import views, route_functions
from django.contrib.sitemaps.views import sitemap


urlpatterns = [
    
    
    #= Paths for website routes
    path('', views.index, name="index"),
    path('tests/', views.tests, name='tests'),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),
    
    
    
    
    
    
    #! view functions
    path('user_left_site/', route_functions.user_left_site, name="user_left_site")
]   