// script.js

document.addEventListener('DOMContentLoaded', function() {
    const selectColegio = document.getElementById('colegio');
    const crackLoginBtn = document.getElementById('crack-login');
    
    crackLoginBtn.addEventListener('click', function() {
        const selectedColegio = selectColegio.value;
        switch (selectedColegio) {
            case 'guillermo':
                window.location.href = './Guillermo/index.html';
                break;
            case 'colombianitos':
                window.location.href = './Colombianitos/index.html';
                break;
            case 'moderna':
                window.location.href = './Moderna/index.html';
                break;
            case 'inmaculada':
                window.location.href = './Inmaculada/index.html';
                break;
            default:
                alert('Por favor, selecciona un colegio.');
        }
    });
});

