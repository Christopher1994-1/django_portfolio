from django.shortcuts import render

# Create your views here.



def stripe_payment(request):
    
    return render(request, 'stripe_payment/stripe_payment.html', {})
