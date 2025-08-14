let resultado = document.querySelector("span")
let texto = document.querySelector("#texto")

texto.addEventListener("keyup", () => {
    resultado.textContent = `Valor do input: ${texto.value}`
})