from django.urls import path
from . import views

urlpatterns = [
    path('', views.services, name='services'),
    path('service_detail/<int:pk>/', views.service_detail, name='service_detail'),
]