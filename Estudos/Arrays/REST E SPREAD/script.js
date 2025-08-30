// REST
// O rest é usado para agrupar o restante dos elementos em um único array ou objeto. Geralmente aparece em parâmetros de função ou desestruturação.
function somar(a, b, ...outrosNumeros) {
    console.log(a) //1
    console.log(b) //2
    console.log(outrosNumeros) //3, 4, 5, 6, 7, 8
}
somar(1, 2, 3, 4, 5, 6, 7, 8)

const numeros = [1, 2, 3, 4, 5]
const [primeiro, segundo, ...outrosNumeros] = numeros
console.log(primeiro) // 1
console.log(segundo) // 2
console.log(outrosNumeros) // 3, 4, 5

// SPREAD
// O spread é usado para espalhar os elementos de um array ou objeto em outro lugar. Ele é muito útil para copiar arrays ou objetos ou passar argumentos para funções.
const nNumeros = [1, 2, 3]
const novosNumeros = [0, ...nNumeros, 4]
console.log(novosNumeros) //0, 1, 2, 3, 4
// 
const pessoa = {nome: 'João', idade: 25}
const novaPessoa = { ...pessoa, cidade: 'São Paulo'}
console.log(novaPessoa) // nome: 'João', idade: 25, cidade: 'São Paulo'
// 
function somarValores(a, b, c) {
    return  a + b + c
}
const nnNumeros = [10, 20, 30]
console.log(somarValores(...nnNumeros)) //60
// 
function juntarNome(nome1, nome2, nome3) {
    return `${nome1}, ${nome2} e ${nome3}`
}
const nomes = ['André', 'João', 'Felipe']
console.log(juntarNome(...nomes))

// DADOS
const valores1 = [4, 1, 2, 3, 4, 5]
const valores2 = [8, 7, 9, 12]

const clientes = {
    nome: 'Johne Lima',
    cpf: '000.000.000-29',
    nascimento: '14/07/2003',
    telefone: '11970798502',
    endereço: {
        rua: 'Minha Rua',
        cidade: 'São Paulo',
        estado: 'SP',
        pais: 'Brasil',
    },
}

// PEGAR O NOME DO CLIENTE MAS NÃO DESCARTAR O RESTO
const {nome, ...rest} = clientes
console.log('nome: ', nome)
console.log('resto: ', rest)

// FUNÇÃO QUE SOMA N VALORES
function somarNumeros(...valores) {
    return valores.reduce((acc, next) => acc + next);
}
console.log(somarNumeros(10, 20, 30, 40)) // 100

// CONCATENAR ARRAYS
const arr = [...valores1, ...valores2]
console.log(arr)

// ADICIONAR ELEMENTO NO ÍNICIO E FIM DO ARRAY
const arr2 = [1, ...valores1]
console.log(arr2)

// FUNÇÃO QUE RECEBE UM ARRAY DE VALORES, MULTIPLICANDO O PRIMEIRO POR TODOS OS OUTROS
function multiplicarPrimeiro([primeiro, ...resto]) {
    return resto.map(v => v * primeiro)
}
console.log(multiplicarPrimeiro(valores1))

// ADICIONA NOVO ATRIBUTO NO OBJETO CLIENTE: updateAt
const cli = {...clientes, updateAt: new Date()}
console.log(cli)

// ALTERA O TELEFONE DO CLIENTE PARA: '111111111111'
const cli2 = {...clientes, telefone: '111111111111'}
console.log(cli2)