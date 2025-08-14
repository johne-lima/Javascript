let div = document.querySelector("div")
div.style.border = "1px solid black"
div.style.margin = "10px"
div.style.padding = "10px"

function botao() {
    div.style.display = "visible"

    if(div.style.visibility === "visible") {
        div.style.visibility = "hidden"
    } else {
        div.style.visibility = "visible"
    }
}