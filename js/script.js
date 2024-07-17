let keyElem = document.querySelector("#key")

let locationElem = document.querySelector("#location")

let whichElem = document.querySelector("#which")

let codeElem = document.querySelector("#code")

let keyCodeElem = document.querySelector("#keyCode")

document.body.addEventListener('keydown', function (event) {
    if (event.code === "F12" || event.code === "CapsLock") {
        event.preventDefault()
        keyElem.innerHTML =  event.code
        locationElem.innerHTML =  event.code
        whichElem.innerHTML =  event.code
        codeElem.innerHTML =  event.code
        keyCodeElem.innerHTML =  event.code
        starter.style.display = 'none'
        heading.style.display = 'flex'
        ascii.style.display = 'flex'
        infos.style.display = 'flex'
    } else {
        keyCodeElem.innerHTML = event.which
        keyElem.innerHTML = event.key
        locationElem.innerHTML = event.location
        whichElem.innerHTML = event.which
        codeElem.innerHTML = event.code
        starter.style.display = 'none'
        heading.style.display = 'flex'
        ascii.style.display = 'flex'
        infos.style.display = 'flex'
    }
})