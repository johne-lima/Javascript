let botao = document.querySelector("button")

botao.addEventListener("click", () => {
    let resp = confirm("Tem certeza?")

    if(resp == true) {
        alert("Confirmado.")
    } else {
        alert("Recusado.")
    }
})