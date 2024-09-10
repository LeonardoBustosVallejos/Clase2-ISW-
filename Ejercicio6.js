const palabra = "Perry el Ornitorrinco";
const numero1 = 10;
const numero2 = 5;
//1. Crea una función que reciba un string y retorne el string en mayúsculas.
function toMayus(palabra){
    return palabra.toUpperCase();
}
console.log(`A mayusculas: ${toMayus(palabra)}`);
//2. Crea una función que reciba un string y retorne el string en minúsculas.
function toMinus(palabra){
    return palabra.toLowerCase();
}
console.log(`A minusculas: ${toMinus(palabra)}`);
//3. Crear una función que reciba como parámetro 2 números y los reste.
function resta(a, b){
    return a - b;
}
console.log(`Resta: ${resta(numero1, numero2)}`);
//4. Crear una función que reciba como parámetro 2 números y los divida.
function division(a, b){
    return a / b;
}
console.log(`Division: ${division(numero1, numero2)}`);
//5. Crear una función que reciba como parámetro 2 números y los multiplique.
function multiplicacion(a, b){
    return a * b;
}
console.log(`Multiplicacion: ${multiplicacion(numero1, numero2)}`);
//6. Crear una función que reciba un string y devuelva la longitud del string.
function longitud(palabra){
    return palabra.length;
}
console.log(`Longitud: ${longitud(palabra)}`);