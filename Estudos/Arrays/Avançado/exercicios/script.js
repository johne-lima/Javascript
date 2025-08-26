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

// Crie um array com subarrays de 2 níveis de profundidade e use flat() para transformar em um único array.
const comSubArrays = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10]
]
console.log(comSubArrays.flat(2))

// Crie um array com profundidade 3 e use flat(Infinity) para deixar tudo em um único array.
const comSubProfundidade3 = [
    [1, 2, 3, 4, 5], 
    [6, 7, 8, [9, 10]]
]
console.log(comSubProfundidade3.flat(Infinity))

// Explique a diferença entre flat(1) e flat(Infinity) usando exemplos.

// A diferença deles está no nível da profundidade, 1 sendo a profundidade padrão
// Exemplo: 
const padrao = [1, 2, 3, 4]
console.log(padrao.flat(1))

// E infinity é quando você não quer escolher até quanto ela vai estar no mesmo nível e quer colocar todas subarrays no nível principal
// Exemplo: 
const muitasSubArrays = [1, 2, 3, 
    [4, 5, 6,
        ['Ana', 'João', 'Marcelo',
            [
                {nome: 'Pedro', idade: 25},
                {nome: 'Matheus', idade: 42}
            ]
        ]
    ]
]
console.log(muitasSubArrays.flat(Infinity))

// 4. flatMap()
// Crie um array de frases e use flatMap() para gerar um array de todas as palavras dessas frases.
const frases = ["O rato roeu a roupa do rei de roma", "Hojé é terça", "Bom dia para todos"]
const frasesEmUmArray = frases.flatMap(element => {return element})
console.log(frasesEmUmArray)

// Crie um array de números e use flatMap() para retornar um novo array com cada número e seu dobro.
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobroDosNumeros = arrayDeNumeros.flatMap(element => {return element*2})
console.log(dobroDosNumeros)

// Crie um array de objetos [{nome: "João", notas: [7,8,9]}, ...] e use flatMap() para obter todas as notas em um único array.
const notas = [
    {nome:"João", 
        nota: [6, 8, 5]},
    {nome:"Matheus", 
        nota: [8, 2, 4]},
    {nome:"Melissa", 
        nota: [7, 5, 10]},
    {nome:"Paola", 
        nota: [3, 9, 7]},
]
const apenasNotas = notas.flatMap(element => {return element.nota})
console.log(apenasNotas)

// 5. reduce()
// Crie um array de números e use reduce() para calcular a soma de todos eles.
// estarei reutilizando o array "numeros"
const calcularNumeros = numeros.reduce((acc, curr) => acc + curr)
console.log(calcularNumeros)

// Crie um array de palavras e use reduce() para concatenar tudo em uma única string.
const novasPalavras = ["Ovo", "tomada", "Avião", "dinamite", "domingo", "Palmeiras"]
const calcularPalavras = novasPalavras.reduce((acc, curr) => acc + curr)
console.log(calcularPalavras)

// Crie um array de objetos [{produto: "A", preco: 10}, {produto: "B", preco: 20}] e use reduce() para calcular o valor total da compra.
const compras = [
    {produto: "A", preco: 10},
    {produto: "B", preco: 30},
    {produto: "C", preco: 40},
    {produto: "D", preco: 20},
    {produto: "E", preco: 100}
]
const calcularCompras = compras.reduce((acc, curr) => acc + curr.preco, 0)
console.log(calcularCompras)

// Crie um array de números e use reduce() para encontrar o maior valor.
const maiorNumero = [20, 10, 99, 3, 14, 45, 12, 0, 101, 23, 5, 6]
const encontrarMaior = maiorNumero.reduce((acc, curr) => {
    if(acc > curr) {return acc}
    else{ return curr}
})
console.log(encontrarMaior)

// 6. reduceRight()
// Crie um array de strings e use reduceRight() para concatenar as palavras ao contrário.
const arrayDeStrings = ['o', 'rato', 'roeu', 'a', 'roupa', 'do', 'rei', 'de', 'roma']
const  inverterArray = arrayDeStrings.reduceRight((acc, curr) => acc + curr)
console.log(inverterArray)

// Crie um array de números e use reduceRight() para subtrair todos os elementos da direita para a esquerda.
// estarie reutilizando o array numero
const subtrairArray = numeros.reduceRight((acc, curr) => acc - curr)
console.log(subtrairArray)

// Explique a diferença entre reduce() e reduceRight() usando exemplos.
// O reduce trabalha da esquerda para a direita e o reduceRight da direita para esquerda

// Exemplo
// No reduce ela vai somar todos os valores da esquerda para a direito
const trabalhandoComReduce = [1, 2, 3, 4, 5, 6]
console.log(trabalhandoComReduce.reduce((acc, curr) => acc + curr))

// neste exemplo de reduceRight ele vai subtrair todos os valores começando da direita para a esquerda
console.log(trabalhandoComReduce.reduceRight((acc, curr) => acc - curr))

