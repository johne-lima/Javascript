// map -> percorre e retorna um novo array transformado.
const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(numeros)

var dobro = numeros.map(dobro)

function dobro(element, index, arr) { //funciona igual o forEach
    return element * 2
}

var pares = numeros.map(par)

function par(element){
    if(element % 2 === 0) return element // os que não são pares está retornando undefined
}

console.log(dobro)
console.log(pares)

const users = [
    {id: 1, name: 'João'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Felipe'}
]

let nomes = users.map(element => {
    return element.name
})

console.log(nomes)



// filter -> retorna um novo array com elementos filtrados.

// find -> retorna o primeiro elemento que atender à condição.

// findIndex -> retorna o índice do primeiro elemento que atender à condição.

// every -> verifica se todos os elementos atendem à condição.

// some -> verifica se algum elemento atende à condição.