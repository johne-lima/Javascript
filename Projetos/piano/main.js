// get all keys
const keys = document.querySelectorAll(".key")

// play notes
function playNote(e) {

    let audioKeyCode = getKeyCode(e)
    
    // typed or pressed key
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"`)

    // if key exists
    const cantFoundAnyKey = !key
    if (cantFoundAnyKey) {
        return
    }
    addPlayingClass(key)
    playAudio(audioKeyCode)
}

function addPlayingClass(key) {
    key.classList.add('playing')
}

function getKeyCode(e) {
    // key code
    let keyCode

    const isKeyboard = e.type === "keydown"
    if (isKeyboard) {
        keyCode = e.keyCode
    } else {
        keyCode = e.target.dataset.key
    }

    return keyCode
}

function playAudio(audioKeyCode) {
    // play audio
    const audio = document.querySelector(`audio[data-key="${audioKeyCode}"]`)
    audio.currentTime = 0
    audio.play()
}

function removePlayingClass(e) {
    e.target.classList.remove("playing")
}

// click with mouse
keys.forEach((key) => {
    key.addEventListener("click", playNote)
    key.addEventListener("transitionend", removePlayingClass)
})

// keyboard type
window.addEventListener("keydown", playNote)