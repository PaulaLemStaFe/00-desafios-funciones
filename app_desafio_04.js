// DESAFÍO 4:

// 1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = [];


// 2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 
//    'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];


// 3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');


// 4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
function mostrarLenguagesDeProgramacion() {
    let lenguajesContainer = document.getElementById("lenguagesDeProgramacion");
    lenguajesContainer.innerHTML = ""; // Limpiar la lista existente
    // Crear elementos de lista para cada lenguaje de programación
    lenguagesDeProgramacion.forEach(function(lenguaje) {
        let li = document.createElement("li");
        li.textContent = lenguaje;
        lenguajesContainer.appendChild(li);
    });
}
// Llamar a la función para mostrar los lenguajes en la página
mostrarLenguagesDeProgramacion();


// 5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion" en orden inverso.
function mostrarLenguagesDeProgramacionInverso() {
    let lenguajesInversoContainer = document.getElementById("lenguagesDeProgramacionInverso");
    lenguajesInversoContainer.innerHTML = ""; // Limpiar la lista existente
    // Crear elementos de lista para cada lenguaje de programación en orden inverso
    lenguagesDeProgramacion.slice().reverse().forEach(function(lenguaje) {
        let li = document.createElement("li");
        li.textContent = lenguaje;
        lenguajesInversoContainer.appendChild(li);
    });
}
// Llamar a las funciones para mostrar los lenguajes en la página
mostrarLenguagesDeProgramacion();
mostrarLenguagesDeProgramacionInverso();


// 6. Crea una función que calcule el promedio de los elementos en una lista de números.
function calcularPromedio(numeros) {
    if (numeros.length === 0) return 0; // Si la lista está vacía, retorna 0
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma / numeros.length;
}


// 7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
// Crear una lista de números para el ejemplo
let listaDeNumeros = [10, 20, 30, 40, 50];
function mostrarMayorYMenor(numeros) {
    if (numeros.length === 0) {
        document.getElementById("resultadoMayorYMenor").innerText = "La lista está vacía.";
        return;
    }

    let mayor = Math.max(...numeros);
    let menor = Math.min(...numeros);
    
    let resultado = `El número más grande es: ${mayor} <br> El número más pequeño es: ${menor}`;
    document.getElementById("resultadoMayorYMenor").innerHTML = resultado;
    console.log(`El número más grande es: ${mayor}`);
    console.log(`El número más pequeño es: ${menor}`);
}
mostrarMayorYMenor(listaDeNumeros);


// 8. Crea una función que devuelva la suma de todos los elementos en una lista.
// Función para calcular la suma de todos los elementos en una lista
function calcularSuma(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}
function mostrarSumaEnPagina(numeros) {
    let suma = calcularSuma(numeros);
    let resultadoSuma = `La suma de los elementos es: ${suma}`;
    document.getElementById("resultadoSuma").innerHTML = resultadoSuma;

    console.log(`La suma de los elementos es: ${suma}`);
}
mostrarSumaEnPagina(listaDeNumeros);


// 9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, 
//    o -1 si no existe en la lista.
// // Función para encontrar la posición de un elemento en la lista
function encontrarPosicion(lista, elemento) {
    return lista.indexOf(elemento);
}
function mostrarPosicionEnPagina(lista, elemento) {
    let posicion = encontrarPosicion(lista, elemento);
    let resultadoPosicion = (posicion !== -1) 
        ? `La posición del elemento ${elemento} es: ${posicion}` 
        : `El elemento ${elemento} no se encuentra en la lista.`;
        
    document.getElementById("resultadoPosicion").innerHTML = resultadoPosicion;
    console.log(resultadoPosicion);
}
let elementoABuscar = 30;
mostrarPosicionEnPagina(listaDeNumeros, elementoABuscar);


// 10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos
//     uno a uno.
// Crear dos listas de números para el ejemplo
let lista1 = [1, 2, 3, 4, 5];
let lista2 = [6, 7, 8, 9, 10];
// Función para sumar los elementos de dos listas
function sumarListas(lista1, lista2) {
    if (lista1.length !== lista2.length) {
        throw new Error("Las listas deben tener el mismo tamaño.");
    }
    let listaSuma = [];
    for (let i = 0; i < lista1.length; i++) {
        listaSuma.push(lista1[i] + lista2[i]);
    }
    return listaSuma;
}
function mostrarListaSumaEnPagina(lista1, lista2) {
    let listaSuma = sumarListas(lista1, lista2);
    let listaSumaContainer = document.getElementById("resultadoListaSuma");
    listaSumaContainer.innerHTML = ""; // Limpiar la lista existente
    // Crear elementos de lista para cada elemento de listaSuma
    listaSuma.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        listaSumaContainer.appendChild(li);
    });
    console.log(`La lista resultante es: ${listaSuma}`);
}
mostrarListaSumaEnPagina(lista1, lista2);


// 11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
// Función para calcular el cuadrado de cada número en una lista
function calcularCuadrados(numeros) {
    let listaCuadrados = numeros.map(function(numero) {
        return numero * numero;
    });
    return listaCuadrados;
}
function mostrarCuadradosEnPagina(numeros) {
    let listaCuadrados = calcularCuadrados(numeros);
    let cuadradosContainer = document.getElementById("resultadoCuadrados");
    cuadradosContainer.innerHTML = ""; // Limpiar la lista existente
    // Crear elementos de lista para cada cuadrado en listaCuadrados
    listaCuadrados.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = item;
        cuadradosContainer.appendChild(li);
    });
    console.log(`La lista de cuadrados es: ${listaCuadrados}`);
}
mostrarCuadradosEnPagina(listaDeNumeros);
