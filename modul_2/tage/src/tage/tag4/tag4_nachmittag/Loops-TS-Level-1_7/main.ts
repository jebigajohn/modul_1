let index: number = 1
const textDiv = document.querySelector<HTMLDivElement>("#text")

do {
  textDiv!.innerHTML += `The number is ${index}<br>`
  index++
} while (index <= 5)
