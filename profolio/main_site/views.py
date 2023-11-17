from django.shortcuts import render
from . import app_functions

# Create your views here.



def index(request):
    ip_address = request.META['REMOTE_ADDR'] # change to get IP in pythonanywhere
    app_functions.lol2(ip_address)
    return render(request, 'index.html', {})



def tests(request):
    return render(request, 'pages/tests2.html', {})


