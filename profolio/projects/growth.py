from django.shortcuts import render








def growth_project(request):
    return render(request, "growth/index.html", {})