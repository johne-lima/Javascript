// reduce() – transforma o array em um único valor (somar, contar, agrupar, etc.).

const rockets = [
    {country: 'Russia', launches: 25},
    {country: 'Japão', launches: 32},
    {country: 'EUA', launches: 44},
    {country: 'China', launches: 7},
    {country: 'India', launches: 1},
]

let lancamentos = rockets.reduce((prev, curr) => prev + curr.launches)
console.log(lancamentos)