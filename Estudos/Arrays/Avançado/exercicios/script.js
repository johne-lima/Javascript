// 1. sort()
// Crie um array com nomes de pessoas misturados em maiúsculas e minúsculas e ordene em ordem alfabética corretamente.
const nomes = ['Ana', 'Mathias', 'felipe', 'joão', 'adriana', 'Beatriz', 'zacarias', 'Gustavo', 'Jonas', 'matheus']
const nomesEmOrdem = nomes.sort((a, b) => a.localeCompare(b))
console.log(nomesEmOrdem)

// Crie um array de objetos representando produtos ({ nome, preco }) e ordene do mais barato para o mais caro.
const produtos = [
    {nome: 'Leite', preco: 8.00},
    {nome: 'Macarrão', preco: 12.00},
    {nome: 'Arroz', preco: 25.00},
    {nome: 'Danone', preco: 3.00},
    {nome: 'Refrigente', preco: 10.00}
]
const produtosEmOrdem = produtos.sort((a, b) => a.preco - b.preco)
console.log(produtosEmOrdem)

// Crie um array de números e ordene em ordem decrescente.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const numerosEmDecrescente = numeros.sort((a, b) => b - a)
console.log(numerosEmDecrescente)

// 2. reverse()
// Crie um array de números de 1 a 10 e inverta a ordem com reverse().
const novosNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const inverterNumeros = novosNumeros.reverse()
console.log(inverterNumeros)

// Crie um array de palavras e use reverse() para inverter a ordem das palavras.
const palavras = ['casa', 'andar', 'nuvem', 'Diamante', 'Olho', 'Barraco']
const inverterPalavras = palavras.reverse()
console.log(inverterPalavras)
console.log(palavras)
// Escreva uma função que recebe uma string e retorna essa string invertida (ex: "casa" → "asac").
function inverter(palavra) {
    return palavra.split('').reverse().join('')

}
console.log(inverter('casa'))
console.log(inverter('caminhão'))