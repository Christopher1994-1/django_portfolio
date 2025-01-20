from django.urls import path
from . import views, route_functions, project_showcase_routes, updating_projects
from django.contrib.sitemaps.views import sitemap


urlpatterns = [
    
    #= Paths for website routes
    path('', views.index, name="index"),
    path('tests/', views.tests, name='tests'),
    path('privacy-policy/', views.privacy_policy, name="privacy_policy"),
    path('search_projects/<str:filters>/', views.search_projects, name="search_projects"),
    path('contact_page/', views.contact_page, name="contact_page"),
    
    #. ROUTE FUNCTIONS
    path('contact_info/', views.contact_info, name="contact_info"),
    
    
    #! view functions
    path('update_visitor_activity/', route_functions.update_visitor_activity, name='update_visitor_activity'),
    path('userArrival/', route_functions.userArrival, name='userArrival'),
    path('userleft/', route_functions.userleft, name='userleft'),
    path('quickshot_search_query/', route_functions.quickshot_search_query, name='quickshot_search_query'),
    
    
    #. PROJECT SHOWCASE ROUTES
    path('projects_showcase/<str:project>/', project_showcase_routes.projects_showcase, name="projects_showcase"),
    
    
    #. ROUTE FOR ADDING NEW PROJECTS
    path('adding_new_projects/', updating_projects.adding_new_projects, name="adding_new_projects"),
    path('update_project/<str:project_id>/', updating_projects.update_project_are, name="update_project_are"),
    path('update_project_finished/', updating_projects.update_project_finished, name="update_project_finished"),
    path('update_success/', updating_projects.update_success, name="update_success"),
    path('update_fail/', updating_projects.update_fail, name="update_fail"),
    
    
    
    
    #. STRIPE PAYMENT PROJECT
    path('update_cart', views.update_card, name='update_cart'),
    path('stripeIntentView', views.stripeIntentView, name='stripeIntentView'),
    # path('successful_pay', views.successful_pay, name="successful_pay"),
    
    
]   