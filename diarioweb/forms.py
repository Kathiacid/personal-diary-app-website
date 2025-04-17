from django.contrib.auth.forms import UserCreationForm
from .models import Usuario

class UsuarioCreacionForm(UserCreationForm):
    class Meta:
        model = Usuario
        fields = ('nombre','apellido','correo','password1','password2')