from django.urls import path
from . import views, stripe_payment, chatgpt, growth




urlpatterns = [
    # paths for website routes
    path('stripe_payment/', stripe_payment.stripe_payment, name="stripe_payment"),
    path('cart/', stripe_payment.cart, name="cart"),
    path('process_payment', stripe_payment.process_payment, name='process_payment'),
    path('successful_pay', stripe_payment.successful_pay, name="successful_pay"),
    
    
    #. chatgpt
    path("chatgpt_replica", chatgpt.chatgpt_replica, name="chatgpt_replica"),
    
    
    #. starbucks
    path("starbucks_remake/", views.starbucks_remake, name="starbucks_remake"),
    
    #. growth
    path("growth_project/", growth.growth_project, name="growth_project")
    
] 