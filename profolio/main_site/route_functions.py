from django.shortcuts import render
from . import app_functions, session_tracking
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse, HttpResponse
import json
from . import views
import time
from ipware import get_client_ip
import sqlite3


db_path = 'db.sqlite3'



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
        
        browser_type = request.META['HTTP_USER_AGENT']
        
        
        session_tracking.visitor_activity(visitor_activity, client_ip, browser_type)
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
        session_tracking.visitor_activity2(visitor_activity, client_ip)
    worked = ''
    return HttpResponse('Received data: {}'.format(worked))
#.############################################################################################





#==============================================================================================
#! Function
#* Function that searches the Projects table for given id
def quickshot_search_query(request):
    post_id = int(request.GET.get('id', ''))
    tableName = 'main_site_projects'
    
    conn = sqlite3.connect(db_path)
    cursor = conn.cursor()

    # Use multiple LIKE conditions for each column
    cursor.execute(f"SELECT * FROM {tableName} WHERE id = ?", (post_id,))

    result = cursor.fetchall()[0]

    conn.commit()
    conn.close()

    print(result)
    
    data = {'data': result}
    
    
    return JsonResponse(data)