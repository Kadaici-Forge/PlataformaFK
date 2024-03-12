// Guillermo/script.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;
        
        // Validar los nuevos usuarios
        if ((usernameInput === '361' && passwordInput === 'Vale121508') ||
            (usernameInput === '912' && passwordInput === 'roxibel25') ||
            (usernameInput === '115' && passwordInput === '115') ||
            (usernameInput === '351' && passwordInput === '351') ||
            (usernameInput === '114' && passwordInput === '114')) {
            // Obtener el nombre de usuario
            let nombreUsuario;
            switch (usernameInput) {
                case '361':
                    nombreUsuario = 'Kadaici';
                    break;
                case '912':
                    nombreUsuario = 'Darianny';
                    break;
                case '115':
                    nombreUsuario = 'Mariangel';
                    break;
                case '114':
                    nombreUsuario = 'Andrés';
                    break;
                case '351':
                    nombreUsuario = 'Juan Sebastian';
                    break;
                default:
                    nombreUsuario = 'Usuario';
            }
            // Saludar al usuario y redirigir al menú principal
            const confirmation = confirm('¡Bienvenido, ' + nombreUsuario + '! Te estamos redirigiendo al Menu K.F. Por favor tener en cuenta que hay una probabilidad de 79% de funcionamiento... debido a que no podemos estar pendientes de si el colegio llega a bloquear acceso a ella o seguridad en la vulnerabilidad... favor estar atento a alguna novedad en el grupo WhatsApp. ¡Gracias!');
            if (confirmation) {
                window.location.href = '../MenuKF/index.html'; // Ruta correcta al menú principal (index.html)
            }
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
});