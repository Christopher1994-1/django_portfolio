from django.shortcuts import render

# Create your views here.







def starbucks_remake(request):
    return render(request, "starbucks/index.html", {})








def washington_project(request):
    return render(request, "washington/index.html", {})



def washington_project_about(request):
    return render(request, "washington/pages/about.html", {})




def aero_demo(request):
    return render(request, "aero/index.html", {})