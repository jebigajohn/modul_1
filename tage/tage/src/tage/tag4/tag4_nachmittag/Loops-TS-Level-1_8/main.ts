let index: number = 1
const textDiv = document.querySelector<HTMLDivElement>("#text")

do {
  if (index % 2 === 0) {
    textDiv!.innerHTML += ` ${index}<br>`
  }
  index++
} while (index <= 20)
