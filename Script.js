var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";

// Función para escribir números
function Escribir(P_Numero) {
    if (P_Numero === "." && numero.includes(".")) return;  // Evita múltiples puntos
    if (P_Numero === "%" && numero.includes("%")) return;  // Evita múltiples %

    numero += P_Numero;
    numMuestra += P_Numero;
    document.getElementById("num1").value = numMuestra;
}

// Función para sumar
function sumar() {
    if (numero === "") return;  // Evita sumar si no hay número
    numero1 = Number(numero);
    operador = "+";
    numero = "";
    numMuestra += " + ";  // Muestra el operador en pantalla
    document.getElementById("num1").value = numMuestra;
}

// Función para restar
function restar() {
    if (numero === "") return;  // Evita restar si no hay número
    numero1 = Number(numero);
    operador = "-";
    numero = "";
    numMuestra += " - ";  // Muestra el operador en pantalla
    document.getElementById("num1").value = numMuestra;
}

// Función para multiplicar
function multiplicar() {
    if (numero === "") return;  // Evita multiplicar si no hay número
    numero1 = Number(numero);
    operador = "*";
    numero = "";
    numMuestra += " × ";  // Muestra el operador en pantalla
    document.getElementById("num1").value = numMuestra;
}

// Función para dividir
function dividir() {
    if (numero === "") return;  // Evita dividir si no hay número
    numero1 = Number(numero);
    operador = "/";
    numero = "";
    numMuestra += " ÷ ";  // Muestra el operador en pantalla
    document.getElementById("num1").value = numMuestra;
}

// Función para borrar el último número
function borrarNumero() {
    if (numero.length > 0) {
        numero = numero.slice(0, -1);
        numMuestra = numMuestra.slice(0, -1);
    } else {
        numMuestra = numMuestra.slice(0, -3);  // Elimina el operador
    }
    document.getElementById("num1").value = numMuestra || "0";
}

// Función para limpiar pantalla
function clearDisplay() {
    numero = "";
    numMuestra = "";
    numero1 = 0;
    numero2 = 0;
    operador = "";
    document.getElementById("num1").value = "0";
}

// Función para calcular el resultado
function Resultado() {
    if (numero === "") return;  // Evita calcular sin número

    numero2 = Number(numero);

    switch (operador) {
        case "+":
            resultado = numero1 + numero2;
            break;
        case "-":
            resultado = numero1 - numero2;
            break;
        case "*":
            resultado = numero1 * numero2;
            break;
        case "/":
            if (numero2 === 0) {
                resultado = "Error";  // Previene la división por cero
            } else {
                resultado = numero1 / numero2;
            }
            break;
        default:
            return;  // Si no hay operador, no hace nada
    }

    // Si el operador contiene % (porcentaje), se realiza el cálculo del porcentaje
    if (numMuestra.includes("%")) {
        resultado = (numero1 * numero2) / 100;
    }

    // Muestra el resultado en pantalla
    document.getElementById("num1").value = resultado;
    numero = resultado.toString();
    numMuestra = resultado.toString();
    operador = "";  // Resetea el operador
}