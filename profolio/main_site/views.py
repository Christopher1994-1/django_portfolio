from django.shortcuts import render
from . import app_functions
import datetime 

# Create your views here.


#############################################################################################
# route for the home page
def index(request):
    ip_address = request.META['REMOTE_ADDR'] # change to get IP in pythonanywhere
    app_functions.lol2(ip_address)
    
    # year for the footer
    year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    
    return render(request, 'index.html', {"year": year,})
#############################################################################################



#############################################################################################
# route for the test page
def tests(request):
    return render(request, 'pages/tests2.html', {})
#############################################################################################
