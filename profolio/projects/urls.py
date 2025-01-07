from django.urls import path
from . import views




urlpatterns = [
    # paths for website routes
    path('stripe_payment/', views.stripe_payment, name="stripe_payment"),
    
]   