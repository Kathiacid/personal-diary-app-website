// Get the modal
var modal = document.getElementById('modalSignup');

// Get the button that opens the modal
var btn = document.getElementById('openModal');

// Get the <span> element that closes the modal
var span = document.getElementById('closeModal');

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//------------------------------contraseña--------------------------------//
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('clave');
    const eyeIcon = document.getElementById('eyeIcon');
    
    // Si la contraseña está oculta, mostrarla
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = './img/gatoa.png'; // Cambiar a icono de ojo cerrado
    } else {
        passwordField.type = 'password';
        eyeIcon.src = './img/gatoc.png'; // Cambiar a icono de ojo abierto
    }
});