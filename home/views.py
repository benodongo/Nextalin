from django.shortcuts import render
from projects.models import Project
from services.models import Service

def home(request):
    featured_projects = Project.objects.all()[:3]
    services = Service.objects.all()
    return render(request, 'home/index.html', {
        'featured_projects': featured_projects,
        'services': services
    })