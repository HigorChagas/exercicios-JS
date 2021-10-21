var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function buscarNumerosPares(value) {
    if(value % 2 == 0)
    return value
}

var numerosPares = numeros.filter(buscarNumerosPares)
console.log(numerosPares)

var estados = [
    'São Paulo',
    'Minas Gerais',
    'Rio de Janeiro',
    'Rio Grande do Norte',
    'Santa Catarina',
    'Acre'
]

function retornaEstado (value) {
    if (value.charAt(0) == 'S')
    return value
}

var resultado = estados.filter(retornaEstado)
console.log(resultado)

