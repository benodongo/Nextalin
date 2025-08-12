from django.db import models
from django.urls import reverse

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')  # Main image
    service_type = models.CharField(max_length=100)
    date_completed = models.DateField()
    client = models.CharField(max_length=100, blank=True)
    architects = models.CharField(max_length=100, blank=True)
    project_type = models.CharField(max_length=100, blank=True)
    detail_description = models.TextField(blank=True)
    best_idea_title = models.CharField(max_length=200, blank=True)
    best_idea_description = models.TextField(blank=True)
    

    def get_absolute_url(self):
        return reverse('project_detail', kwargs={'pk': self.pk})
    
    def __str__(self):
        return self.title

class ProjectImage(models.Model):
    project = models.ForeignKey(Project, related_name='images', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='project_images/')
    caption = models.CharField(max_length=200, blank=True)
    order = models.PositiveIntegerField(default=0)  # For ordering images
    
    class Meta:
        ordering = ['order']  # Order by the 'order' field
    
    def __str__(self):
        return f"Image for {self.project.title}"