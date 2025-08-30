// Exercícios com Rest

// Soma infinita
// Crie uma função somar(...numeros) que receba qualquer quantidade de números e retorne a soma deles.
function somar(...numeros) {
    return numeros.reduce((acc, next) => acc + next)
}
const numerosParaSomar = [10, 20, 30, 40]
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9,10))
console.log(somar(...numerosParaSomar))

// Filtrar argumentos
// Crie uma função filtrarStrings(...args) que receba vários valores e retorne apenas os que são string.
function filtrarStrings(...args) {
    return args.filter(element => typeof element === 'string')
}
console.log(filtrarStrings('Brasil', 'redemoinho', 10, true))
console.log(filtrarStrings('tomada', '10', 'olho', 3, false, 'diamante'))

/*Desestruturação
Use rest para extrair os dois primeiros elementos de um array de números e guardar o restante em outra variável.
Exemplo: [1, 2, 3, 4, 5] → primeiro = 1, segundo = 2, resto = [3,4,5]. */
const arrNumeros = [1, 2, 3, 4, 5]
const [primeiro, segundo, ...resto] = arrNumeros
console.log(primeiro, segundo, resto)

/*Parâmetros fixos e variáveis
Crie uma função boasVindas(mensagem, ...nomes) que receba uma mensagem e qualquer quantidade de nomes, exibindo:
"Olá, Ana!", "Olá, João!", etc.*/
function boasVindas(mensagem, ...nomes) {
    return nomes.map(element => mensagem + element + '!')
}
console.log(boasVindas('Olá ', 'Felipe', 'Leticia', 'Deodoro'))

// Exercícios com Spread
// Maior número
// Dado o array [15, 3, 27, 8], use spread para encontrar o maior número com Math.max().
let arr = [15, 3, 27, 8]
console.log(Math.max(...arr))

// Concatenar arrays
// Crie dois arrays de frutas e use spread para uni-los em um único array.
const frutas1 = ['mamão', 'maçã', 'morango', 'melancia']
const frutas2 = ['amora', 'banana', 'jaca', 'kiwi', 'laranja']
const juntarFrutas = [...frutas1, ...frutas2]
console.log(juntarFrutas)

// Copiar objeto
// Crie um objeto carro com algumas propriedades. Use spread para criar uma cópia dele e adicionar a propriedade ano: 2025.
const carro = {nome: 'hb20',
    modelo: 'hatch',
    marca: 'hyundai',
    capacidade: 5
}
const adicionarAno = {...carro, ano: 2025}
console.log(adicionarAno)

// Atualizar array sem alterar original
// Dado const numeros = [1, 2, 3], use spread para criar um novo array com os mesmos elementos + o número 4 no final.
const numeros = [1, 2, 3]
const novoArray = [...numeros, 4]
console.log(novoArray)

// Exercícios mistos (Rest + Spread)
// Função dinâmica de multiplicação
// Crie uma função multiplicar(fator, ...numeros) que use rest para pegar os números e retorne um novo array multiplicando cada número pelo fator.
// (Dica: use map() junto com spread).
function multiplicar(fator, ...numeros) {
    return numeros.map(element => fator * element)
}
console.log(multiplicar(2, 2, 3, 4, 5))

// Clonando e modificando
// Dado um objeto usuario = {nome: "Maria", idade: 20}
const usuario = {nome: 'Maria', idade: 20}
console.log(usuario)
// Use spread para criar um novo objeto alterando apenas a idade para 25.
const alterarIdade = {...usuario, idade: 25}
// Depois crie uma função mostrarDados(...dados) que receba os valores do objeto e mostre no console.
function mostrarDados(...dados) {
    return dados
}
console.log(mostrarDados(alterarIdade))