const characterId = document.getElementById("characterId")
const enviar = document.getElementById("enviar")
const content = document.getElementById("content")
const img = document.getElementById("img")

const fetchApi = (value) => {
    const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        return data})
    return result
}

enviar.addEventListener('click', async (e) => {
    e.preventDefault()
    const result = await fetchApi(characterId.value)
    content.textContent = `${JSON.stringify(result, undefined, 2)}`
    img.src = `${result.image}`
})