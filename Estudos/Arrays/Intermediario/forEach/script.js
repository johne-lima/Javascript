// forEach -> percorre cada elemento, mas não retorna nada.
let numeros = [2, 4, 6, 8, 10]
numeros.forEach((valor) => {
    console.log(valor)
})

// 1 parametro = mostra o valor de cada array;
// 2 parametro = a posição de cada valor dentro do array
// 3 parametro = mostra a array completa

// Testando com o índice(posição dentro do array):


numeros.forEach((valor, indice) => {
    console.log(`O valor é: ${valor} e está no índice: ${indice}`)
})

numeros.forEach((valor) => {
    valor *= 3
    console.log(valor)
})

const users = [
    {name: 'Rodolfo', age: 33, contact: '(19) 9999-9999'},
    {name: 'Paulo', age: 21, contact: '(18) 8888-8888'},
    {name: 'Aline', age: 40, contact: '(17) 7777-7777'},
    {name: 'Maria', age: 12, contact: '(16) 6666-6666'}
]
console.log(users[0])

users.forEach((item, index) => {
    if (item.age < 18) {
        console.log(`O cliente ${item.name} da posição ${index}, é menor de idade`)
    } else {
        console.log(`O cliente ${item.name} da posição ${index}, é maior de idade`)
    }

    if(item.name === 'Rodolfo') {
        item.contact = '(00) 0000-0000'
        item.age = '25'
        console.log(users[0])
    }
})