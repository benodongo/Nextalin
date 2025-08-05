from django.db import models

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='projects/')
    service_type = models.CharField(max_length=100)
    date_completed = models.DateField()
    client = models.CharField(max_length=100, blank=True)
    
    def __str__(self):
        return self.title