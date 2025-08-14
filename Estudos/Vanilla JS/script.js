const inputElement = document.querySelector("input")
const buttonElement = document.querySelector("form button")
const ulElement = document.querySelector("ul")

buttonElement.onclick = ev => {
    ev.preventDefault()

    const value = inputElement.value.trim()

    if (!value) return

    const btnElement = document.createElement("button")
    btnElement.innerHTML = "Remover"
    btnElement.onclick = () => {
        liElement.remove()
    }

    const liElement = document.createElement("li")
    liElement.innerHTML = `<span>${inputElement.value}</span>`

    ulElement.appendChild(liElement)
    liElement.appendChild(btnElement)

    inputElement.value = ""
}