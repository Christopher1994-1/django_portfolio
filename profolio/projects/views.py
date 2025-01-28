from django.shortcuts import render
import json
from .stripe_payment import products, dd, subtotal
from django.http import JsonResponse

# Create your views here.







def starbucks_remake(request):
    return render(request, "starbucks/index.html", {})








def washington_project(request):
    return render(request, "washington/index.html", {})



def washington_project_about(request):
    return render(request, "washington/pages/about.html", {})