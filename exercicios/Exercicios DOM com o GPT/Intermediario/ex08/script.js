let enviar = document.querySelector("#enviar")

enviar.addEventListener("click", e => {
    e.preventDefault()

    let inputElement = document.querySelector("input")
    input = inputElement.value

    inputElement.value = ''

    if (input === '') return

    // adicionar li
    let lista = document.querySelector("#lista")
    
    let li = document.createElement("li")
    li.id = "estilizacao"
    li.textContent = input
    lista.appendChild(li)

    // remover elemento
    let remover = document.createElement("button")
    remover.textContent = "Remover"
    li.appendChild(remover)

    remover.id = "botaoRemover"

    remover.addEventListener("click", () => {
        li.remove()
    })

})

