function enviar() {
    let form = document.querySelector("form")
    let nome = document.querySelector("#nome").value
    let idade = document.querySelector("#idade").value

    if(nome === '' || idade === '') {
        alert("Campos em branco, preencha todos.");
    } else {
        alert("tudo certo.")
        location.reload()
    }

}