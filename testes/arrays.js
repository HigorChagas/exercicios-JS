var frutas = [
    'banana',
    'maçã',
    'pêra',
    'mamão',
    'abacaxi',
    'limão'
]

//Copiando arrays com o operador de propagação
var frutas2 = [...frutas]
for(let i = 0;i < frutas2.length;i++) {
    console.log(frutas2[i])
}

//FORMA ERRADA DE CRIAR ARRAYS
var numeros = new Array(40, 12)
console.log(numeros.length)

//Adicionar elementos no Array
frutas.push('manga', 'caqui', 'jaca')
frutas[frutas.length] = 'tomate'

//Remove o último elemento de um Array
frutas.pop()

//length retorna o comprimento de um array
console.log(frutas.length)

//Verifica o tipo de operador
console.log(typeof(frutas))

//Looping para percorrer o Array
for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i])
}

console.log(frutas.slice(0, 3))