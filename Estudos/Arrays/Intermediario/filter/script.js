// filter -> retorna um novo array com elementos filtrados.

const numeros = [10, 25, 32, 45, 99, 12, 13, 80, 7, 18, 23, 8]

const maior = numeros.filter((valor) => {
    if (valor > 18) return valor
})

console.log(maior)

const indiceMaior = numeros.filter((valor, indice) => {
    if (indice > 5) return indice
})

console.log(indiceMaior)

const newArray = numeros.filter((valor, indice, array) => {
    if(array.length > 8) {
        numeros.pop()
        return array
    }
})

console.log(newArray)