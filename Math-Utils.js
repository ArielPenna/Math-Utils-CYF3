//Funcion suma
function suma(a, b) {
	console.log(a + b)
	return a + b
}

// suma(12, 22)

//Funcion es Mayor
function esMayor(a, b) {
	if (a > b) {
		console.log(a + ' es mayor que ' + b)
	} else {
		console.log(b + ' es mayor que ' + a)
	}
}

esMayor(44, 22)

//Funcion esMenor
function esMenor(a, b) {
	if (a < b) {
		console.log(a + ' es menor que ' + b)
	} else {
		console.log(b + ' es menor que ' + a)
	}
}

esMenor(33, 45)


console.log("Cintya");
console.log("Lishi");
console.log("maca")
console.log("Caro");
console.log("Holiwis equipo azul");
console.log("esto se ve entrete y prometedor! Vamos!");

//Función raíz cuadrada:
const raizCuadrada = (n) => {
	return Math.sqrt(n);
}

const resultado = raizCuadrada(25);
console.log(resultado);