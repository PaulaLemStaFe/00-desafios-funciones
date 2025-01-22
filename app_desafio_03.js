// DESAFÍO 3:

// 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros
//    y peso en kilogramos, que se recibirán como parámetros.
function calcularIMC() {
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);
    let imc = peso / (altura * altura);
    document.getElementById("resultadoIMC").innerText = `IMC: ${imc.toFixed(2)}`;
    console.log(`IMC: ${imc.toFixed(2)}`);
}

// 2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
function calcularFactorial() {
    let numero = parseInt(document.getElementById("numeroFactorial").value);
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    document.getElementById("resultadoFactorial").innerText = `Factorial: ${factorial}`;
    console.log(`Factorial: ${factorial}`);
}

// 3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales
//    (moneda brasileña, si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotizaciòn del dólar
//    igual a R$4,80.
function convertirReales() {
    let dolares = parseFloat(document.getElementById("dolares").value);
    let reales = dolares * 4.80;
    document.getElementById("resultadoReales").innerText = `R$: ${reales.toFixed(2)}`;
    console.log(`R$: ${reales.toFixed(2)}`);
}

// 4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura
//    que se proporcionarán como parámetros.
function areaPerimetroRectangular() {
    let ancho = parseFloat(document.getElementById("ancho").value);
    let alto = parseFloat(document.getElementById("alto").value);
    let area = ancho * alto;
    let perimetro = 2 * (ancho + alto);
    document.getElementById("resultadoRectangular").innerText = `Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`;
    console.log(`Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`);
}

// 5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará
//    como parámetro. Considera Pi = 3,14.
function areaPerimetroCircular() {
    let radio = parseFloat(document.getElementById("radio").value);
    let area = 3.14 * radio * radio;
    let perimetro = 2 * 3.14 * radio;
    document.getElementById("resultadoCircular").innerText = `Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`;
    console.log(`Área: ${area.toFixed(2)} m², Perímetro: ${perimetro.toFixed(2)} m`);
}

// 6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
function tablaMultiplicar() {
    let numero = parseInt(document.getElementById("numeroTabla").value);
    let resultado = document.getElementById("resultadoTabla");
    resultado.innerHTML = ""; // Limpiar contenido anterior
    let lista = document.createElement("ul"); // Crea una lista desordenada
    for (let i = 1; i <= 10; i++) {
        let item = document.createElement("li"); // Crea un ítem de lista
        item.textContent = `${numero} x ${i} = ${numero * i}`;
        lista.appendChild(item); // Agrega el ítem a la lista
    }
    resultado.appendChild(lista); // Agrega la lista al contenedor
    console.log(resultado);
}
