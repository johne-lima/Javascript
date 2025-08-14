let botao = document.querySelector("#botao")

botao.addEventListener("click", () => {
    let lista = document.querySelector("#lista")
    let input = document.querySelector("input").value

    let li = document.createElement("li")
    li.textContent = input
    lista.appendChild(li)

    // remover li
    let remove = document.createElement("button")
    remove.textContent = "REMOVER"
    li.appendChild(remove)

    remove.addEventListener("click", () => {
        li.remove()
    })
})

