let resultado = document.querySelector(".resultado")
let img = document.createElement("img")

function trocarImagem() {
    const numero = Math.floor(Math.random() * 5) + 1;

    switch (numero) {
        case 1:
            img.src = "img/img1.jpg"
            resultado.appendChild(img)
            break

        case 2:
            img.src = "img/img2.jpg"
            resultado.appendChild(img)
            break

        case 3:
            img.src = "img/img3.jpg"
            resultado.appendChild(img)
            break

        case 4:
            img.src = "img/img4.jpg"
            resultado.appendChild(img)
            break

        case 5:
            img.src = "img/img5.jpg"
            resultado.appendChild(img)
            break
    }
}