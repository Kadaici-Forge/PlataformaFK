// script.js

function injectTextAnimation(animationText) {
    const terminal = document.getElementById('terminal-content');
    const p = document.createElement('p');
    p.textContent = animationText;
    terminal.appendChild(p);
    // Scroll hasta el final del terminal para mostrar el último mensaje
    terminal.scrollTop = terminal.scrollHeight;
}

// Función para limpiar el terminal
function clearTerminal() {
    const terminal = document.getElementById('terminal-content');
    terminal.innerHTML = '';
}

// Definir funciones de animación para cada switch
const switchAnimations = {
    'no-ban-switch': {
        start: '🔍 Iniciando secuencia de hackeo para No Ban...',
        progress: ['🔓 Buscando acceso...', '📂 Compilando datos...', '🛡 Burlando seguridad...'],
        success: '✅ Acceso autorizado para No Ban. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    },
    'puesto-opportunity-switch': {
        start: '🔍 Iniciando secuencia de hackeo para Puesto Opportunity...',
        progress: ['🔓 Analizando oportunidades...', '📂 Manipulando datos...', '🛡 Creando acceso...'],
        success: '✅ Acceso autorizado para Puesto Opportunity. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    },
    'impulso-puntaje-switch': {
        start: '🔍 Iniciando secuencia de hackeo para Impulso Puntaje...',
        progress: ['🔢 Calculando puntajes...', '📊 Modificando registros...', '🚧 Superando barreras...'],
        success: '✅ Acceso autorizado para Impulso Puntaje. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    },
    'probabilidad-pasar-switch': {
        start: '🔍 Iniciando secuencia de hackeo para Probabilidad Pasar 70%...',
        progress: ['🔮 Generando probabilidades...', '🧮 Modificando algoritmos...', '🔥 Desafiando el destino...'],
        success: '✅ Acceso autorizado para Probabilidad Pasar 70%. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    },
    'black-list-switch': {
        start: '🔍 Iniciando secuencia de hackeo para Black List...',
        progress: ['🕵️‍♂️ Explorando listas negras...', '⛔️ Anulando restricciones...', '🚧 Rompiendo barreras...'],
        success: '✅ Acceso autorizado para Black List. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    },
    'pass-final-switch': {
        start: '🔍 Iniciando secuencia de hackeo para Pass Final-Fin Año...',
        progress: ['🔐 Manipulando registros...', '🔑 Creando acceso final...', '🔦 Evadiendo detección...'],
        success: '✅ Acceso autorizado para Pass Final-Fin Año. ¡Hackeo exitoso!',
        close: '🚪 Cerrando conexión. ¡Hasta luego!'
    }
};

document.querySelectorAll('.switch-container input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const switchId = this.id;
        const animationData = switchAnimations[switchId];

        if (this.checked && animationData) {
            // Limpiar el terminal antes de mostrar las nuevas animaciones
            clearTerminal();
            // Animación de inicio
            injectTextAnimation(animationData.start);
            // Animación de hackeo continua
            animationData.progress.forEach((progressText, index) => {
                setTimeout(() => {
                    injectTextAnimation(progressText);
                    if (index === animationData.progress.length - 1) {
                        // Si es el último mensaje de progreso, mostrar el mensaje de éxito
                        setTimeout(() => {
                            injectTextAnimation(animationData.success);
                            setTimeout(() => {
                                injectTextAnimation(animationData.close);
                            }, 2000); // Mostrar mensaje de cierre después de 2 segundos
                        }, 2000); // Mostrar mensaje de éxito después de 2 segundos
                    }
                }, (index + 1) * 2000); // Mostrar cada progreso después de 2 segundos
            });
        } else {
            // Limpiar el terminal cuando se desactiva el switch
            clearTerminal();
        }
    });
});

document.getElementById('materia-pulso').addEventListener('change', function() {
    const materiaSeleccionada = this.value;
    const animationText = `🔍 Iniciando secuencia de hackeo para la materia: ${materiaSeleccionada}...`;
    injectTextAnimation(animationText);
    // Animación de hackeo continua
    setTimeout(() => {
        injectTextAnimation('🔓 Hackeo en progreso...');
        setTimeout(() => {
            injectTextAnimation('✅ Acceso autorizado. ¡Hackeo exitoso!');
            setTimeout(() => {
                injectTextAnimation('🚪 Cerrando conexión. ¡Hasta luego!');
            }, 2000); // Mostrar mensaje de cierre después de 2 segundos
        }, 2000); // Mostrar mensaje de éxito después de 2 segundos
    }, 3000); // Mostrar "Hackeo en progreso" después de 2 segundos
});