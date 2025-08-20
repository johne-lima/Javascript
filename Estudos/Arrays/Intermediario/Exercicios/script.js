// 1. forEach()
// Crie um array com nomes de alunos e use forEach() para exibir cada nome no console.
const nomeAlunos = ['João', 'Felipe', 'Matheus,', 'José', 'Adriano']
nomeAlunos.forEach(nome => console.log(nome))

// Crie um array com números e use forEach() para imprimir o dobro de cada número.
let numeros = [1, 2, 3, 4, 5, 6, 7]
numeros.forEach(numero => console.log(numero * 2))

// 2. map()
// Crie um array com idades e use map() para criar um novo array com as idades em meses (idade × 12).
const idades = [12, 15, 17, 19, 25, 32, 66, 78, 96]
let idadeEmMeses = idades.map(element => {
    return element * 12
})
console.log(idadeEmMeses)

// Crie um array com preços e use map() para aplicar um desconto de 10% em todos os itens.
const precos = [12.00, 25.00, 13.97, 18.00]
const desconto = precos.map(element => {
    return (element * 0.10).toFixed(2)
})
console.log(desconto)

// 3. filter()
// Crie um array com números de 1 a 20 e use filter() para criar um novo array apenas com os números pares.
const numerosAte20 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

let pares = numerosAte20.filter(value => {if(value % 2 === 0) {return value}})
console.log(pares)

// Crie um array com palavras e filtre apenas as que tiverem mais de 5 letras.
const palavras = ['Hoje', 'Tem', 'Gol', 'do', 'Ribamar', 'Automatico', 'Nuvem', 'Frango', 'Zero']
let maisDe5 = palavras.filter(value => {if(value.length >= 5) {return value}})
console.log(maisDe5)

// 4. find()
// Crie um array com números e encontre o primeiro número maior que 10 usando find()
const numerosMaiorQue10 = [8, 25, 13, 10, 12, 0]
let maiorQue10 = numerosMaiorQue10.find(value => value > 10)
console.log(maiorQue10)

// Crie um array com nomes e encontre o primeiro nome que comece com a letra "M".
const nomes = ['José', 'Adriano', "Thiago", "Marcelo", "Antonelo", "Felipo"]
let nomeComM = nomes.find(value => value.startsWith('M'))
console.log(nomeComM)

// 5. findIndex()
// Crie um array com números e encontre o índice do primeiro número ímpar.
let primeiroImpar = numerosMaiorQue10.findIndex(value => {
    return value % 2 === 1
})
console.log(primeiroImpar)

// Crie um array com nomes de cidades e encontre o índice da cidade "São Paulo".
const cidades = ['Pernambuco', 'Alagoas', 'Rio de Janeiro', 'São Paulo']
let acharCidade = cidades.findIndex(value => value === 'São Paulo')
console.log(acharCidade)

// 6. every()
// Crie um array com idades e verifique se todas as idades são maiores ou iguais a 18.
let idadesMaiorQue18 = idades.every(value => value > 18)
console.log(idadesMaiorQue18)

// Crie um array com números e verifique se todos são positivos.
let positivos = numeros.every(value => value > 0)
console.log(positivos)

// 7. some()
// Crie um array com números e verifique se existe algum número negativo.
const numeroComNegativo = [7, 9, 13, 12, -2]
let negativo = numeroComNegativo.some(value => value < 0)
console.log(negativo)

// Crie um array com nomes de usuários e verifique se existe algum nome igual a "Admin".
const usuarios = ['user', 'admin']
const localizar = usuarios.some(value => value === 'admin')
console.log(localizar)