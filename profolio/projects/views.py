from django.shortcuts import render

# Create your views here.



def some_project(request):
    ip_address = request.META['REMOTE_ADDR'] # change to get IP in pythonanywhere
    return render(request, 'some_project.html', {})
