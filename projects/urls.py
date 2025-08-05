from django.urls import path
from . import views

urlpatterns = [
    path('', views.projects, name='projects'),
    path('project_detail/<int:pk>/', views.project_detail, name='project_detail'),
]