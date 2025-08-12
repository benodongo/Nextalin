from django.shortcuts import render, redirect
from .models import JobOpening, JobApplication
from django.contrib import messages

def careers(request):
    active_jobs = JobOpening.objects.filter(is_active=True).order_by('-posted_date')
    
    if request.method == 'POST':
        # Handle form submission
        job_title = request.POST.get('job_title')
        try:
            job = JobOpening.objects.get(title=job_title, is_active=True)
        except JobOpening.DoesNotExist:
            messages.error(request, 'Invalid job selection')
            return redirect('careers')
        
        application = JobApplication(
            job=job,
            name=request.POST.get('name'),
            email=request.POST.get('email'),
            phone=request.POST.get('phone'),
            cover_letter=request.POST.get('cover_letter', '')
        )
        
        if 'resume' in request.FILES:
            application.resume = request.FILES['resume']
        
        application.save()
        messages.success(request, 'Your application has been submitted successfully!')
        return redirect('careers')
    
    return render(request, 'careers/careers.html', {'jobs': active_jobs})