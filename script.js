const apiLink = "https://dolarapi.com/v1/dolares"
const userForm = document.getElementById("userForm")
const answer = document.getElementById("answer")

let globalData = []
getPrices()

async function getPrices () {
    try {
        raw = await fetch(apiLink)
        data = await raw.json()
        globalData = data
        return generateChart(data)
    } catch (error) {
        console.error(error.message)
    }
}

function generateChart (data) {
    let chart = document.createElement("table")
    data.forEach(element => {
        let row = document.createElement("tr")
        let head = document.createElement("th")
        let buy = document.createElement("td")
        let sell = document.createElement("td")
        head.innerHTML = element.nombre
        buy.innerHTML = element.compra
        sell.innerHTML = element.venta
        row.appendChild(head)
        row.appendChild(buy)
        row.appendChild(sell)
        chart.appendChild(row)
    })
    document.body.appendChild(chart)
}

userForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = document.getElementById("userInput").value
    buyPriceTag = document.getElementById("buy-price")
    sellPriceTag = document.getElementById("sell-price")

    let usd = value / globalData[0].compra;

    buyPriceTag.innerText = `Se pueden comprar ${usd} USD`

    usd = value / globalData[0].venta

    sellPriceTag.innerText = `A ese precio se vendieron ${usd} USD`

    answer.style.display = "block"
})