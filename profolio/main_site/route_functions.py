from django.shortcuts import render
from . import app_functions
import datetime 
from django.template import *
from django.http import HttpRequest, JsonResponse
import json









#=============================================================================================
#! FUNCTION
#* function that gets the boolean value if user has left site
def user_left_site(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        # app_functions.lol(data)
        # Do something with the received data
        response_data = {'message': 'Data received successfully'}
        return JsonResponse(response_data)
    else:
        return JsonResponse({'message': 'Invalid request method'})
#.############################################################################################