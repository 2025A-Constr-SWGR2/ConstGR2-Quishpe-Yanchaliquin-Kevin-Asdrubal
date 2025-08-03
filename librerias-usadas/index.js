const { multiplicar } = require('2025a_swgr2_kaqy_multiplicacion');
const { sumar } = require('2025a_swgr2_kaqy_suma');
const {dividir} = require('2025a_swgr2_kaqy_division');
const {restar} = require('2025a_swgr2_kaqy_resta');

// Ejemplo de uso de las funciones de la librería
const respuestaMultiplicacion = multiplicar(2, 5);
const respuestaSuma = sumar(2, 1);
const respuestaDivision = dividir(9, 3);  
const respuestaResta = restar(3, 2);


console.log('La respuesta de la multiplicación es: ', respuestaMultiplicacion);
console.log('La respuesta de la suma es: ', respuestaSuma);
console.log('La respuesta de la división es: ', respuestaDivision);
console.log('La respuesta de la resta es: ', respuestaResta);