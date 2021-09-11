const somar = (numero_1, numero_2) => numero_1 + numero_2;

const subtrair = function(numero_1, numero_2) { 
    return numero_1 - numero_2
}

const multiplicar = (numero_1, numero_2) => numero_1 * numero_2

function dividir(numero_1, numero_2) {
    return numero_1 / numero_2;
}

// module.exports.somar = somar
// module.exports.subtrair = subtrair
// module.exports.multiplicar = multiplicar
// module.exports.dividir = dividir

module.exports = { somar,subtrair, multiplicar, dividir }