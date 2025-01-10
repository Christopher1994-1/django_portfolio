from . import models
from django.shortcuts import render




#. ROUTE FOR SHOWCASING MORE INFO FOR THE STARBUCKS PROJECT
def projects_showcase(request, project):
    
    #. FILTERING FOR MODELS
    main_project = models.Projects.objects.filter(title=project).first()
    
    title: str = main_project.title
    short_description: str = main_project.short_description
    project_type: str = main_project.project_type
    demo_url: str = main_project.demo_url
    gitHub_url: str = main_project.gitHub
    long_description: str = main_project.long_description
    has_video = main_project.has_video
    project_type: str = main_project.project_type
    technologies_used: str = main_project.technologies_used
    imageCover_large: str = main_project.imageCover_large
    images: str = main_project.images
    use_cases: str = main_project.use_cases
    imageCover_small: str = main_project.imageCover_small
    
    #! add in the other images to make gallery
    
    images_list: list = [z for z in images.split(';')]
    
    
    technologies_used_list: list = [
    i.upper().strip() if i.strip().lower() == "html" else i.title().strip()
    for i in technologies_used.split(',')
    ]
    
    
    use_cases_list: list = [f for f in use_cases.split(',')]

    
    context = {
        "projectID": project,
        "project": main_project,
        "title": title,
        "technologies_used": technologies_used_list,
        "short_description": short_description,
        "long_description": long_description,
        "demo_url": demo_url,
        "project_type": project_type,
        "imageCover": imageCover_large,
        "imageCover2": imageCover_small,
        "images": images_list,
        "gitHub_url": gitHub_url,
        "use_cases": use_cases_list
    }
    
    
    return render(request, "pages/projects_showcase.html", context)