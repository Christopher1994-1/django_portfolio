from django.shortcuts import render
from . import app_functions, session_tracking
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse
import json
from ipware import get_client_ip
import time
from .models import Projects
from projects import stripe_payment
import stripe
import os




#. SERVER LIVE / OFF
SERVER_STATUS:str = "false"



#= stripe api keys
STRIPE_SECRET_KEY = os.getenv('stripe_secret_key')
STRIPE_PUBLISH_KEY = os.getenv('stripe_publish_key')





#. ROUTE FOR THE HOME PAGE
def index(request):

    client_ip, _ = get_client_ip(request)
    browser_type = request.META['HTTP_USER_AGENT']
    
    app_functions.start_session(client_ip, browser_type)
    
    #! year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    

    posts = Projects.objects.all()
    
    
    context = {
        "year": year, 
        "posts":posts
    }
    
    return render(request, 'index.html', context)






def update_card(request):
    if request.method == 'POST':
        # Assuming the data is sent as JSON in the request body
        data = json.loads(request.body)
        cart_item_count = data.get('cartItemCount')
        data191 = stripe_payment.products(cart_item_count)[0]
        total = stripe_payment.products(cart_item_count)[1]
        
        for i in data191:
            stripe_payment.dd.append(i)
        stripe_payment.subtotal.append(total)
        return JsonResponse({'status': 'success', 'message': 'Cart updated successfully'})





stripe.api_key = STRIPE_SECRET_KEY
#. ROUTE FUNCTION FOR THE STRIPE PAYMENT INTENT (STRIPE_PAYMENT PROJECT)
def stripeIntentView(request):
    intent = stripe.PaymentIntent.create(
        amount=100,
        currency='usd',
        # In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        automatic_payment_methods={
            'enabled': True,
        },
        metadata={
            'tax_calculation': ''
        },
        )
    return JsonResponse({
            'clientSecret': intent['client_secret']
        })











#. ROUTE FOR THE TEST PAGE
def tests(request):
    return render(request, 'pages/tests2.html', {})







#=============================================================================================
#* Route for the Privacy Policy page
def privacy_policy(request):

    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    
    return render(request, 'pages/privacy_policy.html', {})
#.############################################################################################










#=============================================================================================
#* Function to filter out projects based on lists

def filter_projects(stringgg):
    queryset1 = ''
    if stringgg:
        #! maybe do manuel sql commands to search for the ones that contain data and then get those IDs and do a filter search with that to 
        #! return query object
        queryset1 = Projects.objects.filter(id__in=stringgg)
        print(stringgg)
        print(queryset1)
        return queryset1
    
#.############################################################################################







#=============================================================================================
#* Route for the all projects page
def search_projects(request, filters):
    context = {}

    
    if filters == 'all':
        projects_ = Projects.objects.all()
        title = 'See all Projects'
        secondTitle = 'Frontend - Backend'
        context = {'project':projects_, 'pageTitle': title, 'secondTitle': secondTitle}
        
    else:
        stringg = str(filters)
        print(stringg)
        projects_selection = app_functions.filter_algo(stringg)
        print(projects_selection)
        
        projects1 = filter_projects(projects_selection)
        title = 'Filtered Projects'
        secondTitle2 = app_functions.handle_jumbo_wording(filters)
        
        context = {'project':projects1, 'pageTitle': title, 'secondTitle': secondTitle2}
        
    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    
    return render(request, 'pages/projects.html', context)
#.############################################################################################








#. ROUTE FOR THE CONTACT PAGE
def contact_page(request):
    context = {}
    return render(request, 'pages/contact.html', context)



#. ROUTE FUNCTION FOR HANDLING TYPESCRIPT MESSAGE
def contact_info(request):
    name: str = request.POST.get('name')
    email: str = request.POST.get('email')
    message: str = request.POST.get('message')
    
    
    msg2Send: str = f"\nName: {name}\nEmail: {email}\n\nMessage:\n{message}"
    
    app_functions.send_email(msg2Send, "New Portfolio Email!!")
    
    response_data = {'status': 'success', 'values': ''}   
    return JsonResponse(response_data)
    