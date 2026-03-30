const times = 5

const buttonManual = document.getElementById("generate")
const buttonAutomatic = document.getElementById("generate-automatic")
const container = document.getElementById("container")

let list = []

buttonManual.addEventListener("click", () => {
    if (list.length > 4) {
    } else {
        list.push(generateNumber())

        let randomNumberElement = document.createElement("p")

        randomNumberElement.innerText = list[list.length-1]
        container.appendChild(randomNumberElement)

        if (list.length > 4) {
            buttonManual.remove();
        }
    }
})

buttonAutomatic.addEventListener("click", () => {
    
})

// array must be an array
function populateArray(array) {
    array.push(generateNumber())
    return array
}

function generateNumber() {
    let randomNumber = Math.random(0, 100) * 10
    if (Math.random(0,1) * 100 > 50) {
        randomNumber = randomNumber * -1
    }
    return randomNumber
}

// array must be the numbers array
// tag must be the HTML container to render the array
function showNumbers(array, container) {
    let randomNumberElement = document.createElement("p")
    randomNumberElement.innerText = list[list.length-1]
    container.appendChild(randomNumberElement)
}

// async function generating and showing random numbers between a fixed delay set by the user

    // delay
    /// create button to accelerate the process
    /// create pause button
    /// destroy buttons because the delay is over
    // create random number
    // show random number
    // add number to the numbers array
    // start count for showing the number