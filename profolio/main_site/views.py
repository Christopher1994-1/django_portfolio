from django.shortcuts import render
from . import app_functions, session_tracking
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse
import json
from ipware import get_client_ip
import time
from .models import Projects



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



