// Guillermo/script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        
        if (usernameInput === '361' && passwordInput === 'Vale121508') {
            // Saludar al usuario y redirigir al menú principal
            const confirmation = confirm('¡Bienvenido. Kadaici! Te estamos redirigiendo al Menu K.F,Por favor tener en cuenta que hay una probabilidad de 79% de funcionamiento... debido que no podemos estar pendientes de si el colegio llega a bloquear acceso a ella o seguridad en la vulnerabilidad...favor está a alguna novedad en el grupo WhatsApp... Gracias');
            if (confirmation) {
                window.location.href = '../MenuKF/index.html'; // Ruta correcta al menú principal (index.html)
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});