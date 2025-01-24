from django.shortcuts import render, redirect
from . import models
from django.http import JsonResponse
import sqlite3
import traceback



DB_LOCTATION: str = r"C:\Users\yklac\Desktop\projects\portfolio\profolio\db.sqlite3"




#. ROUTE FOR PAGE TO ACTUALLY ADD NEW PROJECTS
def new_project(request):
    context = {}
    return render(request, "pages/new_project.html", context)


[
    'ChatGPT Replica', 
    'short d', 
    'python;api;ai;typescript;css;javascript;flask;django', 
    'https://main553.b-cdn.net/portfolio/chatgpt/chatgpt_re_main.webp;https://main553.b-cdn.net/portfolio/chatgpt/chatgpt_re_main2.webp', 
    'chatgpt_project', 
    'git_hub_url', 
    'long d', 
    '1', 
    '', 
    'site url', 
    'Backend App ', 
    'use cases', 
    'large_image', 
    'small_image'
]


def print_each(data):
    for i in data:
        print(i)
        print()



#. FUNCTION TO MAKE SQL QUERY TO ADD NEW PROJECT
def adding_new_project_SQL(data: list) -> None:
    title_ = str(data[0])    
    shortD = str(data[1])
    techUsed_ = str(data[2]).split(';')
    techUsed = ", ".join(techUsed_)
    images_ = str(data[3])
    demoURL = str(data[4])
    githubURL = str(data[5])
    longD = str(data[6])
    hasVideo_ = str(data[7])
    videoURL = str(data[8])
    siteURL = str(data[9])
    projectType_ = str(data[10])
    useCases_ = str(data[11])
    largeImage = str(data[12])
    smallImage = str(data[13])
    
    print_each(data)
    
        
    
    try:
        # Connect to a SQLite database (use ':memory:' for an in-memory DB)
        db = sqlite3.connect(DB_LOCTATION)  
        
        with db:  # Context manager handles commits and rollbacks
            cursor = db.cursor()
            
            query = f"""
                INSERT INTO main_site_projects (
                    title, short_description, technologies_used, images, demo_url, gitHub, long_description, 
                    has_video, video_url, site_url, project_type, use_cases, imageCover_large, imageCover_small
                ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            """
            
            values = (
                title_, shortD, techUsed, images_, demoURL, githubURL, longD, 
                hasVideo_, videoURL, siteURL, projectType_, useCases_, largeImage, smallImage
            )
            
            # Example: Create a table
            cursor.execute(query, values)
            
    except sqlite3.Error as e:
        print(f"SQLite error: {e}")
        traceback.print_exc()
    finally:
        if db:
            db.close()




#. ROUTE FUNCTION FOR ADDING NEW PROJECT TO DB
def add_new_project(request) -> JsonResponse:
    
    data: list[str, int] = str(request.POST.get('data')).split('&&')
    
    adding_new_project_SQL(data)
    
    response_data = {'status': 'success', 'values': ''} 
    return JsonResponse(response_data)





#. ROUTE FUNCTION FOR DELETEING PROJECT
def delete_projectIO(request) -> JsonResponse:
    
    data: int = int(request.POST.get('data'))
    
    # Retrieve the object to delete
    obj = models.Projects.objects.get(id=data)

    # Delete the object
    obj.delete()
    
    response_data = {'status': 'success', 'values': ''} 
    return JsonResponse(response_data)
    



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
