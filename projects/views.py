from django.shortcuts import render,redirect, get_object_or_404

from projects.models import Project


def projects(request):
    portfolio_items = Project.objects.all().order_by('id')
    projects = Project.objects.all().order_by('-id')[:2]
    return render(request, 'projects/projects.html', {'portfolio_items': portfolio_items,  'projects': projects})



def project_detail(request,pk):
    # Fetch the team member by primary key (pk)
    portfolio_item = get_object_or_404(Project, pk=pk)
    projects = Project.objects.all().order_by('-id')[:2]
    context = {
        'portfolio_item': portfolio_item,
        'projects': projects
    }
    return render(request, 'project_details.html',context)