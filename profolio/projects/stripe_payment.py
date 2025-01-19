from django.shortcuts import render
import os
from main_site import views




#. STRIPE API KEYS
STRIPE_SECRET_KEY = os.getenv('stripe_secret_key')
STRIPE_PUBLISH_KEY = os.getenv('stripe_publish_key')



dd = []

print(dd)


subtotal = []

#. STRIPE PAYMENT ROUTE
def stripe_payment(request):
    dd.clear()
    subtotal.clear()
    return render(request, 'stripe_payment/index.html', {})




#. CART ROUTE
def cart(request):
    if dd:
        return render(request, 'stripe_payment/pages/cart.html', {'data':dd, 'total':subtotal[0], "empty":"n"})
    else:
        return render(request, 'stripe_payment/pages/cart.html', {"empty":'empty'})
    
    
    

is_prod = False


def products(data):
    
    if is_prod == False:
        products = {
            "1": ['Product 1', 19.99, r"https://main553.b-cdn.net/portfolio/stripe%20backend%20payment/product1.png", 0],
            "2": ["Product 2", 9.99, r"https://main553.b-cdn.net/portfolio/stripe%20backend%20payment/product2.png", 0],
            "3": ["Product 3", 59.99, r"https://main553.b-cdn.net/portfolio/stripe%20backend%20payment/product3.png", 0],
            "4": ["Product 4", 39.99, 'images/product4.png', 0],
            "5": ["Product 5", 79.99, 'images/product5.png', 0],
            "6": ["Product 6", 199.99, 'images/product6.png', 0], 
            }
    else:
        products = {}
        
    split_data = str(data).split(':')
    result = []
    total = []
    
    
    for i in split_data:
        e = products[i]
        t = products[i][1]
        result.append(e)
        total.append(t)
        
    strTotal = sum(total)
    indexValue = str(strTotal).index('.')
    
    if indexValue == 2:
        total2 = str(strTotal)[:5]
    else:
        total2 = str(strTotal)[:6]
    
    return result, total2    

    


#. PROCESSING THE PAYMENT
def process_payment(request):
    # = Your processing logic for checkout

    # Assuming you have a user_token that you want to set as a cookie
    user_token = "abc123"

    context = {
        "data": dd,
        "total": subtotal,
        "serverStatus": views.SERVER_STATUS
    }

    # Create a response object
    response = render(request, 'stripe_payment/pages/process_checkout.html', context)

    # Set a cookie named 'user_token' with SameSite=None and Secure (for HTTPS)
    response.set_cookie('user_token', user_token, samesite='None', secure=True)

    return response





#. ROUTE FOR SUCCESSFUL PAYMENT
def successful_pay(request):
    return render(request, "stripe_payment/pages/successful_pay.html", {})