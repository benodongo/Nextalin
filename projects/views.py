from django.shortcuts import render,redirect, get_object_or_404

from projects.models import Project


def projects(request):
    portfolio_items = Project.objects.all().order_by('id')
    projects = Project.objects.all().order_by('-id')
    return render(request, 'projects/projects.html', {'portfolio_items': portfolio_items,  'projects': projects})



def project_detail(request, pk):
    project = get_object_or_404(Project, pk=pk)
    related_projects = Project.objects.exclude(pk=pk).filter(service_type=project.service_type)[:3]
    
    # Get all images for this project, ordered by the 'order' field
    project_images = project.images.all()
    
    context = {
        'project': project,
        'related_projects': related_projects,
        'project_images': project_images,
    }
    
    return render(request, 'projects/project_detail.html', context)