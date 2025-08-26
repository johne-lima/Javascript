// sort() – ordena os elementos (alfabético, numérico, etc.).
let numeros = [1, 2, 10, 15, 30, 4]
console.log(numeros.sort())

console.log(numeros.sort((a, b) => a - b)) // Em ordem crescente
console.log(numeros.sort((a, b) => b - a)) // Em ordem decrescente

// exemplo ordenando por idade

let pessoas = [
    {nome: 'João', idade: 25},
    {nome: 'Felipe', idade: 30},
    {nome: 'Pedro', idade: 18}
]

console.log(pessoas.sort((a, b) => a.idade - b.idade))

// Ordenar string ignorando maiusculas/minusculas
let nomes = ['Adriano', 'matheus', 'ana', 'Felipe', 'felicia', 'Zeca']
console.log(nomes.sort((a, b) => a.localeCompare(b)))

// agora em ordem decrescente
console.log(nomes.sort((a, b) => b.localeCompare(a)))

// reverse() – inverte a ordem do array.

// flat() – achata arrays aninhados.

// flatMap() – combina map() e flat().

// concat() – junta dois arrays.