/* Exercício 1 – Faça um programa que capture o evento de um input na sua tela e mostre 
automaticamente a tabuada desse número abaixo. */


let result = document.querySelector("#resultado")
let tabuada

 function resultado() {
    let numero = document.querySelector("#numero").value
    result.innerHTML = ""
    for(i = 1; i <= 10; i++) {
        tabuada = i * numero
        result.innerHTML += `<p> ${i} x ${numero} = ${tabuada}</p>` 
    }
}