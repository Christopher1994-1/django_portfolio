from django.shortcuts import render
from . import app_functions
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse, HttpResponse
import json
from . import views
import time
from ipware import get_client_ip




#=============================================================================================
#! FUNCTION
#* function that gets the boolean value if user has left site
def update_visitor_activity(request):
    if request.method == "POST":
        # Assuming views is an object with an 'on_page' attribute
        page = {"page": str(views.on_page)}
        return JsonResponse(page)
#.############################################################################################


#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,



#=============================================================================================
#! FUNCTION
#* function that gets the boolean value if user has left site
def userArrival(request):
    timestamp = str(time.time()).split('.')[0]
    if request.method == "POST":
        client_ip, _ = get_client_ip(request)
        activity = request.POST.get('popup_username') 
        visitor_activity = f"{activity} - {timestamp}"
        app_functions.visitor_activity(visitor_activity, client_ip)
    worked = ''
    return HttpResponse('Received data: {}'.format(worked))
#.############################################################################################

#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,
#,



#=============================================================================================
#! FUNCTION
#* function that gets the boolean value if user has left site
def userleft(request):
    timestamp = str(time.time()).split('.')[0]
    if request.method == "POST":
        client_ip, _ = get_client_ip(request)
        activity = request.POST.get('popup_username') 
        visitor_activity = f"{activity} - {timestamp}"
        app_functions.visitor_activity2(visitor_activity, client_ip)
    worked = ''
    return HttpResponse('Received data: {}'.format(worked))
#.############################################################################################