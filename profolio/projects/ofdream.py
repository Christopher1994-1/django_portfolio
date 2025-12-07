from django.shortcuts import render
import datetime



def ofdream_project(request):
    current_year = str(datetime.datetime.now()).split(' ')[0].split('-')[0]
    # ['2025-12-07 03:45:51.427681']
    
    return render(request, 'ofdream/index.html', {
        "current_year": current_year
    })