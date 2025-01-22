// DESAFÍO 1:

// 1. Descarga otro proyecto haciendo clic en este enlace (https://github.com/alura-es-cursos/js-curso-2/tree/main)
//    y ábrelo en Visual Studio Code.

// 2. Cambia el contenido de la etiqueta h1 con document.querySelector y asigna el siguiente texto: "Hora del Desafío".
let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora Del Desafío";

// 3. Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".
function clickUsuario() {
    alert("El botón fue clicado");
}

// 4. Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil.
//    Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".
function promptCiudad() {
    var ciudad = prompt("Por favor, ingrese el nombre de una ciudad de Brasil: ");
    if (ciudad) {
        alert(`Estuve en ${ciudad} y me acordé de ti`);
    }
}

// 5. Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".
function mostrarAlerta() {
    alert("Yo amo JS");
}

// 6. Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.
function sumarNumeros() {
    var numero1 = parseFloat(prompt("Por favor, ingrese el primer número: "));
    var numero2 = parseFloat(prompt("Por favor, ingrese el segundo número: "));
    if (!isNaN(numero1) && !isNaN(numero2)) {
        var suma = numero1 + numero2;
        alert(`El resultado de la suma es: ${suma}`);
    } else {
        alert("Por favor, ingrese números válidos.");
    }
}

