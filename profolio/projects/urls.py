from django.urls import path
from . import views, stripe_payment




urlpatterns = [
    # paths for website routes
    path('stripe_payment/', stripe_payment.stripe_payment, name="stripe_payment"),
    path('cart/', stripe_payment.cart, name="cart"),
    path('process_payment', stripe_payment.process_payment, name='process_payment'),
    path('successful_pay', stripe_payment.successful_pay, name="successful_pay"),
    
] 