//  Faça um programa que “pegue” uma lista <ol> no HTML e coloque negrito dinâmicamente 
// a partir de um nome digitado no seu input. 

let filter = document.querySelector("#filter")

let lists = document.querySelectorAll(".list li")

filter.addEventListener("input", filterList)

function filterList() {
    if (filter.value != '') {
        for(let list of lists) {
            let p = list.querySelector("p")
            p = p.textContent.toLowerCase()
            let filterText = filter.value.toLowerCase()

            if (!p.includes(filterText)) {
                list.style = "none"
            } else {
                list.style.fontWeight = "bold"
            }
        }
    }
    else {
        for (let list of lists) {
            list.style = "none"
        }
    }
}