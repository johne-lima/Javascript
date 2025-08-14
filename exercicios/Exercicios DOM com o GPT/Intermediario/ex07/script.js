let numero = 0
let mais = document.querySelector("#mais")
let menos = document.querySelector("#menos")
let resultado = document.querySelector("#resultado")

mais.addEventListener("click", () => {
    numero++
    resultado.textContent = numero
})

menos.addEventListener("click", () => {
    numero--
    resultado.textContent = numero
})