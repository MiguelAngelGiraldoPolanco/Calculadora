// Cuando se carga la ventana del navegador, se ejecuta esta función
window.onload = function() {
    // Variables para almacenar los valores de la operación
    var resultado = '';
    var Num1 = '';
    var Num2 = '';
    var operador = '';

    // Función que abre una ventana emergente indicando el operador seleccionado
    function ventana(e) {
        let ventana = window.open('', '_blank', "width=200,height=100,top=50,left=50");
        ventana.document.write("<p>has elegido " + e + "</p>");
        setTimeout(function() {
            ventana.close();
        }, 1000);  // Cierra la ventana después de 1 segundo
    }

    // Configuración de eventos para cada botón numérico y función de la calculadora
    document.getElementById('cero').addEventListener('click', pulsadoCero);
    function pulsadoCero() {
        resultado = resultado.toString() + '0';
        document.getElementById('resultado').textContent = resultado;
    }

    document.getElementById('uno').addEventListener('click', pulsadoUno);
    function pulsadoUno() {
        resultado = resultado.toString() + '1';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('dos').addEventListener('click', pulsadoDos);
    function pulsadoDos() {
        resultado = resultado.toString() + '2';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('tres').addEventListener('click', pulsadoTres);
    function pulsadoTres() {
        resultado = resultado.toString() + '3';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('cuatro').addEventListener('click', pulsadoCuatro);
    function pulsadoCuatro() {
        resultado = resultado.toString() + '4';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('cinco').addEventListener('click', pulsadoCinco);
    function pulsadoCinco() {
        resultado = resultado.toString() + '5';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('seis').addEventListener('click', pulsadoSeis);
    function pulsadoSeis() {
        resultado = resultado.toString() + '6';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('siete').addEventListener('click', pulsadoSiete);
    function pulsadoSiete() {
        resultado = resultado.toString() + '7';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('ocho').addEventListener('click', pulsadoOcho);
    function pulsadoOcho() {
        resultado = resultado.toString() + '8';
        document.getElementById('resultado').textContent = resultado;
    }
    document.getElementById('nueve').addEventListener('click', pulsadoNueve);
    function pulsadoNueve() {
        resultado = resultado.toString() + '9';
        document.getElementById('resultado').textContent = resultado;
    }

    // Funciones para cada operador aritmético (+, -, *, /)
    document.getElementById('suma').addEventListener('click', pulsadoSuma);
    function pulsadoSuma() {
        Num1 = resultado;
        operador = '+';
        ventana(operador);
        resultado = '';
        document.getElementById('resultado').textContent = '';
    }

    document.getElementById('resta').addEventListener('click', pulsadoResta);
    function pulsadoResta() {
        Num1 = resultado;
        operador = '-';
        ventana(operador);
        resultado = '';
        document.getElementById('resultado').textContent = '';
    }

    document.getElementById('multiplicacion').addEventListener('click', pulsadoMultiplicacion);
    function pulsadoMultiplicacion() {
        Num1 = resultado;
        operador = '*';
        ventana(operador);
        resultado = '';
        document.getElementById('resultado').textContent = '';
    }

    document.getElementById('division').addEventListener('click', pulsadoDivision);
    function pulsadoDivision() {
        Num1 = resultado;
        operador = '/';
        ventana(operador);
        resultado = '';
        document.getElementById('resultado').textContent = '';
    }

    // Función para el botón "=" que realiza el cálculo
    document.getElementById('igual').addEventListener('click', pulsadoIgual);
    function pulsadoIgual() {
        Num2 = resultado;
        // Realiza la operación en función del operador seleccionado
        if (operador === '+') {
            resultado = parseInt(Num1) + parseInt(Num2);
        } else if (operador === '-') {
            resultado = parseInt(Num1) - parseInt(Num2);
        } else if (operador === '*') {
            resultado = parseInt(Num1) * parseInt(Num2);
        } else if (operador === '/') {
            resultado = parseInt(Num1) / parseInt(Num2);
        }
        document.getElementById('resultado').textContent = resultado;
    }

    // Función para el botón de "resetear" que borra el contenido
    document.getElementById('reset').addEventListener('click', pulsadoReset);
    function pulsadoReset() {
        Num1 = '';
        Num2 = '';
        resultado = '';
        document.getElementById('resultado').textContent = resultado;
    }

    // Evento que permite usar el teclado para ingresar números y operadores
    document.addEventListener('keydown', function(event) {
        if (event.key === '0') { pulsadoCero(); }
        if (event.key === '1') { pulsadoUno(); }
        if (event.key === '2') { pulsadoDos(); }
        if (event.key === '3') { pulsadoTres(); }
        if (event.key === '4') { pulsadoCuatro(); }
        if (event.key === '5') { pulsadoCinco(); }
        if (event.key === '6') { pulsadoSeis(); }
        if (event.key === '7') { pulsadoSiete(); }
        if (event.key === '8') { pulsadoOcho(); }
        if (event.key === '9') { pulsadoNueve(); }
        if (event.key === '+') { pulsadoSuma(); }
        if (event.key === '-') { pulsadoResta(); }
        if (event.key === '*') { pulsadoMultiplicacion(); }
        if (event.key === '/') { pulsadoDivision(); }
        if (event.key === 'Enter') { pulsadoIgual(); }
        if (event.key === 'Delete') { pulsadoReset(); }
    });
}
