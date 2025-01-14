from django.urls import path
from . import views, stripe_payment




urlpatterns = [
    # paths for website routes
    path('stripe_payment/', stripe_payment.stripe_payment, name="stripe_payment"),
    path('cart/', stripe_payment.cart, name="cart"),
    
] 