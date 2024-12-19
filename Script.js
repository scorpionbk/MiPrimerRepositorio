var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";
function sumar() {
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    Escribir('+');
}
function restar() {
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    Escribir('-');  
}
function multiplicar() {
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    Escribir('*');
}
function dividir() {
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    Escribir('/'); 
}
function Escribir(P_Numero) {
    if (P_Numero == "+") {

    } else {
        numero = numero + P_Numero;
    }

    numMuestra = numMuestra + P_Numero;
    num1.value = numMuestra;
}
function Resultado() {
    numero2 = Number(numero);
    if (operador == "+") {
        resultado = numero1 + numero2;
        num1.value = resultado;
    }
    if (operador == "-") {
        resultado = numero1 - numero2;
        num1.value = resultado;
    }
    if (operador == "*") {
        resultado = numero1 * numero2;
        num1.value = resultado;
    }
    if (operador == "/") {
        resultado = numero1 / numero2;
        num1.value = resultado;
    }
}
