from django.urls import path
from . import views

urlpatterns = [
    # paths for website routes
    path('some_project/', views.some_project, name="some_project"),
    
]   