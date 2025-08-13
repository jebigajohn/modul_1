import "./style.css"

const zeitElement = document.querySelector(".zeit") as HTMLDivElement
const btn = document.getElementById("btn") as HTMLButtonElement

let prozent = 100
let timerId: number | null = null

zeitElement.textContent = `${prozent}%`

btn.addEventListener("click", () => {
  if (timerId !== null) return

  if (prozent <= 0) {
    prozent = 100
    zeitElement.textContent = `${prozent}%`
  }

  timerId = window.setInterval(() => {
    prozent--
    zeitElement.textContent = `${prozent}%`

    if (prozent <= 0) {
      clearInterval(timerId!)
      timerId = null
    }
  }, 100)
})
