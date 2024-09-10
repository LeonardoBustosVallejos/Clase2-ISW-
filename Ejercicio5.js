numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//1. Imprimir en consola los números del 1 al 10.
for (let i = 0; i < numeros.length; i++) {
    console.log(`Del 1 al 10: ${numeros[i]}`);
}
//2. Imprimir en consola los números del 10 al 1.
for (let i = numeros.length - 1; i >= 0; i--) {
    console.log(`Del 10 al 1: ${numeros[i]}`);
}
//3. Imprimir en consola los números del 1 al 10 pero solo los pares.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log(`Pares: ${numeros[i]}`);
    }
}
//4. Imprimir en consola los números del 1 al 10 pero solo los impares.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 != 0) {
        console.log(`Impares: ${numeros[i]}`);
    }
}
//5. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 == 0) {
        console.log(`Multiplos de 3: ${numeros[i]}`);
    }
}
//6. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 5.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 5 == 0) {
        console.log(`Multiplos de 5: ${numeros[i]}`);
    }
}
//7. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 y 5.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 == 0 && numeros[i] % 5 == 0) {
        console.log(`Multiplos de 3 y 5: ${numeros[i]}`);
    }
}
//8. Imprimir en consola los números del 1 al 10 pero solo los múltiplos de 3 o 5.
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 3 == 0 || numeros[i] % 5 == 0) {
        console.log(`Multiplos de 3 o 5: ${numeros[i]}`);
    }
}