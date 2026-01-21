// Hecho por: Jonathan Caixba
// Ordenado por: Mayor a menor y menor a mayor

// 1. Solicitar 3 números al usuario y convertirlos a tipo Number
let num1 = Number(prompt("Ingresa el primer número:"));
let num2 = Number(prompt("Ingresa el segundo número:"));
let num3 = Number(prompt("Ingresa el tercer número:"));

// Validar si los tres números son iguales
if (num1 === num2 && num2 === num3) {
    console.log("Los números son iguales: " + num1 + ", " + num2 + ", " + num3);
} else {
    // 2. Guardar los números en un arreglo para manipularlos fácilmente
    let numeros = [num1, num2, num3];

    // 3. Identificar mayor, centro y menor usando lógica de ordenamiento
    // Ordenamos de mayor a menor
    let mayorAMenor = [...numeros].sort((a, b) => b - a);
    
    // Ordenamos de menor a mayor
    let menorAMayor = [...numeros].sort((a, b) => a - b);

    // 4. Mostrar resultados solicitados
    console.log("Ordenados de mayor a menor: " + mayorAMenor.join(", "));
    console.log("Ordenados de menor a mayor: " + menorAMayor.join(", "));

    let mayor = mayorAMenor[0];
    let centro = mayorAMenor[1];
    let menor = mayorAMenor[2];

    console.log("Análisis individual:");
    console.log("Mayor: " + mayor);
    console.log("Centro: " + centro);
    console.log("Menor: " + menor);
}