from django.urls import path, include
from django.contrib import admin



urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('main_site.urls')),
    path('projects/', include('projects.urls')),
]
