from django.urls import path 
from . import  views

urlpatterns = [
    path('registro/',views.Registro, name='registro'),
    path('login/',views.LoginView.as_view(), name='login'),
    path('logout/',views.LogoutView.as_view(), name='logout')
]