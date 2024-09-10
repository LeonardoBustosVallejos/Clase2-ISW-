const numeros = [1, 2, 3, 4, 5];
const letras = ["a", "b", "c", "d", "e"];

//1. Crea una función que reciba como parámetro un array de números y retorne la suma de todos los números del array.
function sumaArray(numeros){
    let suma = 0;
    for (i = 0; i < numeros.length; i++){
        suma = suma + numeros[i];
    }
    return suma;
}
console.log(sumaArray(numeros));
//2. Crea una función ( o varias) que reciba como parámetro un array de números y retorne el promedio de todos los números del array.
function promedioArray(numeros){
    return sumaArray(numeros) / numeros.length;
}
console.log(promedioArray(numeros));
//3. Crea una función que tome un arreglo de strings como parámetro y devuelva un nuevo arreglo que contenga los mismos strings pero con todas las letras en mayúsculas.
function toMayusArray(letras){
    let letrasMayus = [];
    for (i = 0; i < letras.length; i++){
        letrasMayus.push(letras[i].toUpperCase());
    }
    return letrasMayus;
}
console.log(toMayusArray(letras));
//4. Crea una función que tome un arreglo de números como parámetro y devuelva un nuevo arreglo que contenga solo los números pares.
function paresArray(numeros){
    let pares = [];
    for (i = 0; i < numeros.length; i++){
        if (numeros[i] % 2 == 0){
            pares.push(numeros[i]);
        }
    }
    return pares;
}
console.log(paresArray(numeros));