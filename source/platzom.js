export default function platzom(str) {
	let translation = str

	const reverse = (str) => str.split('').reverse().join('')
	
	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true

		for (var i = 0; i < length; i++) {
			const char = str.charAt(i)
			translation += capitalize == true ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize;
		}
		return translation
	}

	//Si la palabra termina en ar, se le quitan esos dos
	//caracteres
	if (str.toLowerCase().endsWith('ar')){
		translation = str.slice(0,-2)
	}

	//Si la palabra inicia con Z, se le añade "pe" al final
	if (str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}
	//Si la palabra traducida tiene 10 o más letras
	//se debe partir a la mitad y unir con un guión en medio
	if (translation.length >= 10){
		const firstHalf = translation.slice(0,Math.round(translation.length/2)),
			secondHalf = translation.slice(Math.round(translation.length/2))
			translation = `${firstHalf}-${secondHalf}`
	}
	//Si la palabra original es un palíndromo,
	//ninguna regla anterior cuenta y se devuelve
	//la misma palabra intercalando mayúsculas y minúsculas
	if (str == reverse(str)){
		return minMay(str)
	}
	return translation
}