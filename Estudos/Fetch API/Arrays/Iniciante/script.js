const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

// Push -> Adiciona um ou mais elementos ao final de um array
numeros.push(6, 7, 8);
console.log(numeros);
// Output: [1, 2, 3, 4, 5, 6, 7, 8]

// Pop -> Remove o último elemento do array
numeros.pop()
console.log(numeros);
// Output: [1, 2, 3, 4, 5, 6, 7]

// shift -> Remove o primeiro elemento do array
numeros.shift()
console.log(numeros)

// unshift -> Adiciona elementos no ínicio do array
numeros.unshift(-2, -1, 0)
console.log(numeros)

// indexOf -> Retorna o índice de um elemento (Forma antiga)
const index = numeros.indexOf(4)
console.log("O número 4 está no index: " + index)

// includes -> Verifica se um elemento existe (Forma nova)
const inclui = numeros.includes(3)
console.log("Verificando se inclui o número 3: " + inclui) // Retorna False ou True

// join -> Transforma array em string
const emString = numeros.join(' ') // Usei um espaço para ela se espaçar entre cada array
console.log("O array está em string: " + emString)

// slice -> cria cópia de parte do array
let novosNumeros = numeros.slice(2, 7)
console.log(novosNumeros)

// splice -> Remove, adiciona ou substitui elementos

numeros.splice(4, 3, "Casapião")
console.log(numeros)

//  ---------------------------------------

console.log("Abaixo uma lista de exercicios sobre esses métodos.")

// 1 - push
// Crie um array com o nome de 3 frutas e adicione mais 2 frutas no final usando push().
let frutas = ["Uva", "Banana", "Maçã"]
frutas.push("Morango", "Abacaxi")
console.log(frutas)

// Crie um array com números de 1 a 5 e adicione os números 6 e 7.
let numbers = [1, 2, 3, 4, 5]
numbers.push(6, 7)
console.log(numbers)

// 2 - pop
// Crie um array com 5 cores e remova a última cor usando pop().
let cores = ["Verde", "Amarelo", "Vermelho", "Azul", "Cinza"]
cores.pop()
console.log(cores)

// Crie um array com nomes de cidades e remova 2 elementos do final (um por vez com pop()).
let cidades = ["São Paulo", "Rio de Janeiro", "Madri"]
cidades.pop()
cidades.pop()
console.log(cidades)

// 3 - unshift
// Crie um array com 3 carros e adicione um carro no início usando unshift().
let carros = ["Mustang", "Ferrari", "Lamborghini"]
carros.unshift("Uno")
console.log(carros)

// Crie um array com números pares e adicione o número 0 no início.
let pares = [2, 4, 6, 8, 10, 12, 14 ,16]
pares.unshift(0)
console.log(pares)

// 4 - shift
// Crie um array com 5 marcas de roupas e remova a primeira usando shift().
let marcasDeRoupa = ["lacoste", "puma", "oakley", "nike", "adidas"]
marcasDeRoupa.shift()
console.log(marcasDeRoupa)

// Crie um array com nomes de animais e remova 2 elementos do início (um por vez com shift()).
let animais = ["Gato", "Cachorro", "Macaco", "Leão", "Tigre"]
animais.shift()
animais.shift()
console.log(animais)

// 5 - indexOf
// Crie um array com 5 nomes e descubra a posição de um nome específico usando indexOf().
let nomes = ["João", "Felipe", "Matheus", "Lucas", "Fernando"]
console.log(nomes.indexOf("Lucas"))

// Crie um array com números aleatórios e verifique o índice de um número que não existe.
let numerosAleatoris = [4, 6, 7, 9, 2, 4, 5, 100]
console.log(numerosAleatoris.indexOf(12))

// 6 - includes 
// Crie um array com 5 filmes e verifique se um filme específico está na lista.
let filmes = ["Filme1", "Filme2", "Filme3", "Filme4", "Filme5"]
console.log(filmes.includes("Filme6"))

// Crie um array com nomes de jogos e veja se o jogo "Minecraft" está presente.
let jogos = ["Cod", "Valorant", "Warzone", "Minecraft", "LOL"]
console.log(jogos.includes("Minecraft"))

// 7 - join 
// Crie um array com nomes de países e junte todos eles em uma string separada por vírgulas.
let paises = ["Brasil", "Espanha", "Italia", "EUA", "Mexico", "Portugal"]
console.log(paises.join(', '))

// Crie um array com palavras e use join() para formar uma frase.
let frase = ["Olá", "como", "você", "está?"]
console.log(frase.join(' '))

// 8 - slice
// Crie um array com 10 números e use slice() para pegar apenas do 3º ao 6º número.]
let novoNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(novoNumeros.slice(2,6))

// Crie um array com nomes de alunos e copie apenas os 3 primeiros nomes para um novo array.
let alunos = ["João", "Felipe", "Matheus", "Lucas", "Fernando", "Josias", "Antonio"]
let alunosSelecionados = alunos.slice(0,3)
console.log(alunosSelecionados)

// 9 - splice
// Crie um array com 6 frutas e remova 2 frutas do meio usando splice().
frutas.splice(2, 2)
console.log(frutas)

// Crie um array com 5 cores e troque a cor do índice 2 por outra usando splice().
cores.splice(2, 1, "Laranja")
console.log(cores)