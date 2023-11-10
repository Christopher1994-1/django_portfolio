from django.urls import path, include



urlpatterns = [
    path('', include('main_site.urls')),
    path('projects/', include('projects.urls')),
]
