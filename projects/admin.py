from django.contrib import admin
from .models import Project,ProjectImage



class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 1  # Number of empty forms to display

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    inlines = [ProjectImageInline]
    list_display = ('title', 'service_type', 'date_completed', 'client')
    search_fields = ('title', 'description', 'client')
    list_filter = ('service_type', 'date_completed')

@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ('project', 'caption', 'order')
    list_filter = ('project',)
    search_fields = ('project__title', 'caption')