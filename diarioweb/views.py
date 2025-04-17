from django.shortcuts import render,redirect
from django.contrib.auth.views import LoginView, LogoutView
from .forms import UsuarioCreacionForm

# Create your views here.

def Registro(request):
    if request.method == 'POST':
        form = UsuarioCreacionForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
        else:
            form = UsuarioCreacionForm()
        return render(request,'registro.html', {'form':form})
    
class LoginView(LoginView):
    template_name = 'login.html'

class LogoutView(LogoutView):
    template_name = 'logout.html'
