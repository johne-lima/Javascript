// flat() – achata arrays aninhados.
const usuariosRespostas = [
    {nome: 'Ayrton',
        respostas: [
            {questao_id: '001', acertou: false},
            {questao_id: '002', acertou: true},
            {questao_id: '003', acertou: false},
            {questao_id: '004', acertou: true},
            {questao_id: '005', acertou: true},
        ]
    },
    {nome: 'Joaquim',
        respostas: [
            {questao_id: '001', acertou: true},
            {questao_id: '002', acertou: true},
            {questao_id: '003', acertou: false},
            {questao_id: '004', acertou: true},
            {questao_id: '005', acertou: true},
        ]
    },
    {nome: 'Maria',
        respostas: [
            {questao_id: '001', acertou: true},
            {questao_id: '002', acertou: true},
            {questao_id: '003', acertou: true},
            {questao_id: '004', acertou: true},
            {questao_id: '005', acertou: true},
        ]
    },
    {nome: 'Antonia',
        respostas: [
            {questao_id: '001', acertou: false},
            {questao_id: '002', acertou: false},
            {questao_id: '003', acertou: false},
            {questao_id: '004', acertou: false},
            {questao_id: '005', acertou: true},
        ]
    }
]

// Testando em map()
let arrayRespostas = usuariosRespostas.map((element) => {return element.respostas})
console.log(arrayRespostas)
console.table(arrayRespostas.flat())

const novoArray = [
    [
        [20, 30],
        [22, 12],
        [23, 14],
    ],
    [                                     
        12, 99,
        [
            10, 25,
            [10, 22],
        ],
        [99, 1000],
    ]
]
console.log(novoArray.flat(Infinity))

const arrayRespostasComFlatMap = arrayRespostas.flatMap(element => {return element.respostas})
console.log(arrayRespostasComFlatMap)