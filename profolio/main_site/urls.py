from django.urls import path
from . import views, route_functions
from django.contrib.sitemaps.views import sitemap


urlpatterns = [
    
    
    #= Paths for website routes
    path('', views.index, name="index"),
    path('tests/', views.tests, name='tests'),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),
    path('projects/', views.projects, name="projects"),
    
    
    
    
    
    
    
    #! view functions
    path('update_visitor_activity/', route_functions.update_visitor_activity, name='update_visitor_activity'),
    path('userArrival/', route_functions.userArrival, name='userArrival'),
    path('userleft/', route_functions.userleft, name='userleft'),
]   