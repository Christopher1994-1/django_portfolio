from django.shortcuts import render
from . import app_functions, session_tracking
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse
import json
from ipware import get_client_ip
import time
from .models import Projects


# Create your views here.

#=############################################################################################
# route for the home page
def index(request):

    client_ip, _ = get_client_ip(request)
    browser_type = request.META['HTTP_USER_AGENT']
    
    app_functions.start_session(client_ip, browser_type)
    
    #! year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    

    posts = Projects.objects.all()
    
    context = {"year": year, "posts":posts}
    
    return render(request, 'index.html', context)
#.############################################################################################

















#=############################################################################################
# route for the test page
def tests(request):
    return render(request, 'pages/tests2.html', {})
#.############################################################################################






#=============================================================================================
#* Route for the Privacy Policy page
def privacy_policy(request):

    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    
    return render(request, 'pages/privacy_policy.html', {})
#.############################################################################################






#=============================================================================================
#* Route for the all projects page
def projects(request):

    browser_type = request.META['HTTP_USER_AGENT']
    client_ip, _ = get_client_ip(request)
    
    app_functions.start_session(client_ip, browser_type)
    
    return render(request, 'pages/projects.html', {})
#.############################################################################################


