// concat() – junta dois arrays

const array1 = [1, 2, 3, 4, 5]
const array2 = [ 6, 7, 8, 9, 10]

const resultado = array1.concat('olá', array2, [11, 12, 13], {nome: 'Jota'})
console.log(resultado)

const text1 = 'Olá '
const text2 ='Mundo'
const resultadoTextos = text1.concat(text2).concat("...")
console.log(resultadoTextos)

const obj = [
    {nome: 'João', idade: 25, id: 1},
    {nome: 'Pedro', idade: 35, id: 2},
    {nome: 'Mathias', idade: 25, id: 3},
    {nome: 'Lucas', idade: 25, id: 4},
    {nome: 'Felipe', idade: 25, id: 5},
]

const novosObj = [
    {
        nome: 'Alicia', idade: 23, id: 6
    },
    {nome: 'Fernanda', idade: 55, id: 7}
]

console.log(obj.concat(novosObj).concat({nome: 'Teste', idade: 2, id: 6}))