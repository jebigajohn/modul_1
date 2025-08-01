const input = document.querySelector<HTMLInputElement>("#input-o-count")!
const button = document.querySelector<HTMLButtonElement>("#generate-btn")!
const output = document.querySelector<HTMLParagraphElement>("#output")!

button.addEventListener("click", () => {
  const count = Number(input.value)
  let oString = ""

  for (let i = 0; i < count; i++) {
    oString += "o"
  }

  output.textContent = `L${oString}p`
})
