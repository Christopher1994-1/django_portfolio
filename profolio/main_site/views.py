from django.shortcuts import render
from . import app_functions
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse
import json
from ipware import get_client_ip
import time


# Create your views here.

#=############################################################################################
# route for the home page
def index(request):
    #. getting last page
    last_page = request.META.get("HTTP_REFERER")
    current_page = 'index'
    #. time when starts
    starttime = time.time()
    #. getting IP
    client_ip, _ = get_client_ip(request)
    browser_type = request.META['HTTP_USER_AGENT']

    
    #= making app function call to handle all above info
    app_functions.start_session(client_ip, starttime, current_page, last_page, browser_type)
    
    
    #! year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    return render(request, 'index.html', {"year": year,})
#.############################################################################################

















#=############################################################################################
# route for the test page
def tests(request):
    return render(request, 'pages/tests2.html', {})
#.############################################################################################






#=============================================================================================
#* Route for the Privacy Policy page
def privacy_policy(request):
    last_page = request.META.get("HTTP_REFERER")
    browser_type = request.META['HTTP_USER_AGENT']
    current_page = "privacyPolicy"
    starttime = time.time()
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, starttime, current_page, last_page, browser_type)
    
    return render(request, 'pages/privacy_policy.html', {})
#.############################################################################################


