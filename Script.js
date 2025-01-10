var numero = "";
var numMuestra = "";
var numero1 = 0;
var numero2 = 0;
var resultado = 0;
var operador = "";
var historial = []; // Almacena el historial de operaciones

// Función para escribir números
function Escribir(P_Numero) {
    // Evita que el primer carácter sea un operador
    if (["+", "-", "*", "/"].includes(P_Numero) && numMuestra === "") return;

    // Permite agregar solo un punto decimal
    if (P_Numero === "." && numero.includes(".")) return;

    numero += P_Numero;
    numMuestra += P_Numero;
    document.getElementById("num1").value = numMuestra;
}

// Función para sumar
function sumar() {
    validarYPrepararOperacion("+");
}

// Función para restar
function restar() {
    validarYPrepararOperacion("-");
}

// Función para multiplicar
function multiplicar() {
    validarYPrepararOperacion("*");
}

// Función para dividir
function dividir() {
    validarYPrepararOperacion("/");
}

// Valida y prepara la operación
function validarYPrepararOperacion(op) {
    // Evita agregar múltiples operadores consecutivos
    if (numMuestra.slice(-1) === " " || numMuestra === "") return;

    // Si hay un número previo, procede con la operación
    prepararOperacion(op);
}

// Prepara la operación
function prepararOperacion(op) {
    if (numero === "" && resultado !== 0) {
        operador = op;
        numMuestra += ` ${op} `;
        document.getElementById("num1").value = numMuestra;
        return;
    }
    if (numero === "") return; // Evita operar si no hay número

    if (resultado === 0) {
        numero1 = Number(numero);
        resultado = numero1;
    } else {
        calcularParcial();
    }

    operador = op;
    numero = "";
    numMuestra += ` ${op} `;
    document.getElementById("num1").value = numMuestra;
}

// Función para borrar el último número u operador
function borrarNumero() {
    if (numero.length > 0) {
        numero = numero.slice(0, -1);
        numMuestra = numMuestra.slice(0, -1);
    } else if (numMuestra.length > 0) {
        numMuestra = numMuestra.trimEnd();
        if (["+", "-", "*", "/"].includes(numMuestra.slice(-1))) {
            numMuestra = numMuestra.slice(0, -2);
            operador = "";
        }
    }
    document.getElementById("num1").value = numMuestra || "0";
}

// Función para limpiar pantalla
function clearDisplay() {
    numero = "";
    numMuestra = "";
    numero1 = 0;
    numero2 = 0;
    resultado = 0;
    operador = "";
    historial = [];
    document.getElementById("num1").value = "0";
}

// Función para calcular el resultado
function Resultado() {
    if (numero === "" && operador === "") return; // Evita calcular sin datos

    numero2 = Number(numero);
    calcularParcial();

    // Muestra el resultado en pantalla
    document.getElementById("num1").value = resultado;
    historial.push(numMuestra + " = " + resultado); // Guarda en el historial
    numero = resultado.toString();
    numMuestra = resultado.toString();
    operador = "";
}

// Realiza el cálculo parcial
function calcularParcial() {
    switch (operador) {
        case "+":
            resultado += Number(numero);
            break;
        case "-":
            resultado -= Number(numero);
            break;
        case "*":
            resultado *= Number(numero);
            break;
        case "/":
            if (numero === "0") {
                resultado = "Error"; // Previene la división por cero
            } else {
                resultado /= Number(numero);
            }
            break;
    }
}

// Función para mostrar la última operación
function mostrarOperacionAnterior() {
    if (historial.length > 0) {
        const ultimaOperacion = historial[historial.length - 1]; // Obtiene la última operación
        document.getElementById("num1").value = ultimaOperacion;
    } else {
        document.getElementById("num1").value = "Sin historial";
    }
}