from django.shortcuts import render, redirect
from . import models
from django.contrib import messages






#. ROUTE FOR ADDING NEW PROJECTS IN
def adding_new_projects(request):
    projects = models.Projects.objects.filter()
    
    context = {
        "projects": projects
    }
    return render(request, 'pages/add_new.html', context)




#. ROUTE FOR EDITING THE PROJECT
def update_project_are(request, project_id):
    project_2_edit = models.Projects.objects.filter(id=project_id).first()

    project_title: str = project_2_edit.title
    project_short_d: str = project_2_edit.short_description
    technologies_used: str = project_2_edit.technologies_used
    images: str = project_2_edit.images
    demo_url: str = project_2_edit.demo_url
    gitHub: str = project_2_edit.gitHub
    long_description: str = project_2_edit.long_description
    project_type: str = project_2_edit.project_type
    use_cases: str = project_2_edit.use_cases
    imageCover_large: str = project_2_edit.imageCover_large
    imageCover_small: str = project_2_edit.imageCover_small
    
    
    
    context = {
        "title": project_title,
        "short_d": project_short_d,
        "technologies_used": technologies_used,
        "images": images,
        "long_d": long_description,
        "small_image_url": imageCover_small,
        "big_image_url": imageCover_large,
        "use_cases": use_cases,
        "github_url": gitHub,
        "demo_url": demo_url,
        "project_type": project_type,
        "project_id": project_2_edit.pk
        
    }
    
    return render(request, "pages/update_project.html", context)







#. ROUTE FOR SUCCESS UPDATE
def update_success(request):
    return render(request, 'pages/updated_success.html', {})

#. ROUTE FOR FAILURE UPDATE
def update_fail(request):
    return render(request, 'pages/updated_fail.html', {})





#. ROUTE FOR FINALLY UPDATING THE PROJECT
def update_project_finished(request):
    if request.method == "POST":  # Check if the request is POST
        project_id: str = request.POST.get('hiddenID')
        title: str = request.POST.get('title')
        short_d: str = request.POST.get('short_d')
        tech_used: str = request.POST.get('tech_used')
        images: str = request.POST.get('images')
        long_d: str = request.POST.get('long_d')
        small_image_url: str = request.POST.get('small_image_url')
        big_image_url: str = request.POST.get('big_image_url')
        use_cases: str = request.POST.get('use_cases')
        github_url: str = request.POST.get('github_url')
        demo_url: str = request.POST.get('demo_url')
        project_type: str = request.POST.get('project_type')


        projects = models.Projects.objects.filter(id=project_id).first()
        
        projects.title = title
        projects.short_description = short_d
        projects.technologies_used = tech_used
        projects.images = images
        projects.long_description = long_d
        projects.imageCover_small = small_image_url
        projects.imageCover_large = big_image_url
        projects.use_cases = use_cases
        projects.gitHub = github_url
        projects.demo_url = demo_url
        projects.project_type = project_type
        
        projects.save()
        

        return redirect('update_success')  # Redirect to another view
    else:

        return render(request, 'update_fail')
