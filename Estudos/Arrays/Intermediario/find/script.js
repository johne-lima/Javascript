// find -> retorna o primeiro elemento que atender à condição.
const pizzas = [
    'calabrasa',
    'mussarela',
    'margarita',
    'frango c/ catupiry'
]

const procurarPizzaComM = pizzas.find(pizza => pizza.startsWith('m'))
const procurarPizzaComF = pizzas.find(pizza => pizza.startsWith('f'))

console.log(procurarPizzaComM)
console.log(procurarPizzaComF)

const frutas = [
    {name: 'amora', quantity: 3},
    {name: 'jaca', quantity: 8},
    {name: 'cereja', quantity: 4}
]

const procurarFruta = frutas.find(fruta => fruta.name.startsWith('c')) 
// ou const procurarFruta = frutas.find(fruta => fruta.name === 'cereja)

console.log(procurarFruta)

const procurarQuantidade = frutas.find(quantidade => {
    return quantidade.quantity > 5 //retornar
})

console.log(procurarQuantidade)