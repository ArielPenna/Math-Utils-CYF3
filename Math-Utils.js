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

//Funcion es Menor
const esMenor=(a,b)=>{
	(a<b)
		? console.log(`${a} es menor a ${b}`)
		: console.log(`${b} es menor a ${a}`)
}


const perimetroGonzaloMardones = (ancho,largo)=> ancho*largo

//esMayor(44, 22)
//esMenor(3,6)
perimetroGonzaloMardones(20,20)