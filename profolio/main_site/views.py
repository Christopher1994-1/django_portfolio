from django.shortcuts import render
from . import app_functions
import datetime 
from django.http import JsonResponse
import json
from ipware import get_client_ip
from .models import Projects
from projects import stripe_payment, chatgpt
import random
import stripe
import os
from django.views.decorators.cache import cache_page
from . import random_stuff




#. SERVER LIVE / OFF
SERVER_STATUS:str = "false"

#. NAME
NAME: str = "Christian"



basic_context = {
    "footer_para": random_stuff.ABOUT_ME,
    "about_me": random_stuff.ABOUT_ME,
    "about_me2": random_stuff.ABOUT_ME2,
    "lastName": random_stuff.LAST_NAME,
    'mainName': NAME
}



#. STRIPE API KEYS
STRIPE_SECRET_KEY = os.getenv('stripe_secret_key')
STRIPE_PUBLISH_KEY = os.getenv('stripe_publish_key')




#. ROUTE FOR THE HOME PAGE
def index(request):

    client_ip, _ = get_client_ip(request)
    browser_type = request.META['HTTP_USER_AGENT']
    
    app_functions.start_session(client_ip, browser_type)
    
    #! year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    

    # Get all posts from the database
    posts = list(Projects.objects.all())

    # Select 6 random posts
    posts_randomize = random.sample(posts, 6)
    
    
    # if request.method == "POST":
    #     form = ContactForm(request.POST)
    #     if form.is_valid():
    #         # Process the form (e.g., send an email)
    #         return render(request, "success.html", {"message": "Form submitted successfully!"})
    # else:
    #     form = ContactForm()
    
    
    context = {
        "year": year, 
        "posts":posts_randomize,
    }
    context.update(basic_context)
    
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
@cache_page(60 * 15)
def privacy_policy(request):

    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    #! year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    context = {
        "year": year, 
    }
    context.update(basic_context)
    
    return render(request, 'pages/privacy_policy.html', context)
#.############################################################################################










#=============================================================================================
#* Function to filter out projects based on lists

def filter_projects(stringgg):
    queryset1 = ''
    if stringgg:
        #! maybe do manuel sql commands to search for the ones that contain data and then get those IDs and do a filter search with that to 
        #! return query object
        queryset1 = Projects.objects.filter(id__in=stringgg)
        return queryset1
    
#.############################################################################################







#=============================================================================================
#* Route for the all projects page
@cache_page(60 * 15)
def search_projects(request, filters):
    context = {}

    
    if filters == 'all':
        projects_ = Projects.objects.all()
        title = 'See all Projects'
        secondTitle = 'Frontend - Backend'
        context = {'project':projects_, 'pageTitle': title, 'secondTitle': secondTitle}
        context.update(basic_context)
        
    else:
        stringg = str(filters)
        projects_selection = app_functions.filter_algo(stringg)
        
        projects1 = filter_projects(projects_selection)
        title = 'Filtered Projects'
        secondTitle2 = app_functions.handle_jumbo_wording(filters)
        
        context = {'project':projects1, 'pageTitle': title, 'secondTitle': secondTitle2}
        context.update(basic_context)
        
    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    
    return render(request, 'pages/projects.html', context)
#.############################################################################################








#. ROUTE FOR THE CONTACT PAGE
@cache_page(60 * 15)
def contact_page(request):
    return render(request, 'pages/contact.html', {})



#. ROUTE FUNCTION FOR HANDLING TYPESCRIPT MESSAGE
def contact_info(request):
    name: str = request.POST.get('name')
    email: str = request.POST.get('email')
    message: str = request.POST.get('message')
    
    
    msg2Send: str = f"\nName: {name}\nEmail: {email}\n\nMessage:\n{message}"
    
    app_functions.send_email(msg2Send, "New Portfolio Email!!")
    
    response_data = {'status': 'success', 'values': ''}   
    return JsonResponse(response_data)
    







#. CHATGPT BACKEND ENDPOINT
def my_backend_function(request) -> JsonResponse:
    if request.method == 'POST':
        try:
            input_text = request.POST.get('text')
            
            api = chatgpt.main_api_call(input_text)  # Replace with your API call logic
            
            return JsonResponse({'result': api})

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
    
    
    
    
    


#..............................................
#. TEST FOR VIDEO

def test_video(request):
    return render(request, 'test_video.html', {})