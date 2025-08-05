from django.shortcuts import render , get_object_or_404
from .models import Service

def services(request):
    services = Service.objects.all()
    return render(request, 'services/services.html', {'services': services})

def service_detail(request,pk):

    portfolio_item = get_object_or_404(Service, pk=pk)
    projects = Service.objects.all().order_by('-id')[:2]
    context = {
        'portfolio_item': portfolio_item,
        'projects': projects
    }
    return render(request, 'service_details.html',context)