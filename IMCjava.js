// Inicio del bloque de código JavaScript
function calcularIMC() {
    // 1. OBTENER LOS VALORES
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    
    // 2. VALIDAR LOS DATOS
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, introduce un peso y altura válidos.';
        return; // Detiene la función si los datos son incorrectos
    }

    // 3. CALCULAR EL IMC
    const imc = peso / (altura * altura);

    // 4. DETERMINAR LA CATEGORÍA Y MOSTRAR EL RESULTADO
    const resultadoElemento = document.getElementById('resultado');
    let categoria = ''; // Variable para almacenar la clasificación

    // Se evalúa el valor del IMC para clasificarlo
    if (imc < 18.5) {
        categoria = 'Bajo peso';
        resultadoElemento.style.color = '#3498db'; // Color azul para bajo peso
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal (Saludable)';
        resultadoElemento.style.color = '#2ecc71'; // Color verde para peso normal
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
        resultadoElemento.style.color = '#f1c40f'; // Color amarillo para sobrepeso
    } else {
        categoria = 'Obesidad';
        resultadoElemento.style.color = '#e74c3c'; // Color rojo para obesidad
    }

    // Se muestra el resultado completo en el párrafo 'resultado'
    resultadoElemento.innerText = `Tu IMC es: ${imc.toFixed(2)}\nClasificación: ${categoria}`;
}
// Fin del bloque de código JavaScript