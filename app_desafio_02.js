// DESAFÍO 2:

// 1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function mostrarMensaje() {
    console.log("¡Hola, mundo!");
}
mostrarMensaje();

// 2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, {nombre}!" en la consola.
function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
}
// Nueva función para tomar valor desde input y mostrar resultado
function saludarUsuario() {
    let nombre = document.getElementById("nombre").value;
    saludar(nombre);
    document.getElementById("resultadoSaludar").innerText = "¡Hola, " + nombre + "!";
}

// 3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
function duplicarNumero(numero) {
    return numero * 2;
}
// Nueva función para tomar valor desde input y mostrar resultado
function duplicar() {
    let numero = parseFloat(document.getElementById("numero").value);
    let resultado = duplicarNumero(numero);
    console.log(`El número recibido es ${numero} y su duplicado es ${resultado}`);
    document.getElementById("resultadoDuplicar").innerText = `Duplicado: ${resultado}`;
}

// 4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function calcularPromedio(num1, num2, num3) {
    return (num1 + num2 + num3) / 3;
}
// Nueva función para tomar valores desde inputs y mostrar resultado
function promedio() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);
    let resultado = calcularPromedio(num1, num2, num3);
    console.log(`El promedio entre los tres números es ${resultado}`);
    document.getElementById("resultadoPromedio").innerText = `Promedio: ${resultado}`;
}

// 5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
function mayorDeDosNumeros(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// Nueva función para tomar valores desde inputs y mostrar resultado
function mayor() {
    let numA = parseFloat(document.getElementById("numA").value);
    let numB = parseFloat(document.getElementById("numB").value);
    let resultado = mayorDeDosNumeros(numA, numB);
    console.log(`El mayor entre los dos números es: ${resultado}`);
    document.getElementById("resultadoMayor").innerText = `Mayor: ${resultado}`;
}

// 6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function cuadradoNumero(numero) {
    return numero * numero;
}
// Nueva función para tomar valor desde input y mostrar resultado
function cuadrado() {
    let numero = parseFloat(document.getElementById("numCuadrado").value);
    let resultado = cuadradoNumero(numero);
    console.log(`El resultado de multiplicar el número por sí mismo es: ${resultado}`);
    document.getElementById("resultadoCuadrado").innerText = `Cuadrado: ${resultado}`;
}
