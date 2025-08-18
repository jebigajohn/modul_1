import "./style.css"

const shoePromise: Promise<string[]> = new Promise((resolve, reject) => {
  let ourShoeServer: boolean = false
  const shoes: string[] = ["Black High Heels", "Adidas Samba", "Green Crocs", "Nike Air Max", "Red Converse"]

  setTimeout(() => {
    if (ourShoeServer) {
      resolve(shoes)
    } else {
      reject("Sorry no shoes available")
    }
  }, 3000)
})

// ? Elemente aus HTML abholen

const orderBtn = document.getElementById("order-button") as HTMLButtonElement
const shoeOutPutElement = document.getElementById("shoe-output") as HTMLDivElement
const loaderIndicator = document.getElementById("loading") as HTMLDivElement

if (orderBtn && shoeOutPutElement && loaderIndicator) {
  orderBtn.addEventListener("click", () => {
    loaderIndicator.style.display = "block"
    shoePromise
      .then((shoes: string[]) => {
        // Schuhe anzeigen lassen
        shoes.forEach((shoe: string) => {
          const shoeElement = document.createElement("p") as HTMLParagraphElement
          shoeElement.innerText = shoe
          shoeOutPutElement.appendChild(shoeElement)
        })
      })
      .catch((err: string) => {
        const errorParagraph = document.createElement("p") as HTMLParagraphElement
        // const msg: string = err.message
        // errorParagraph.innerText = msg
        errorParagraph.innerText = err
        shoeOutPutElement.appendChild(errorParagraph)
      })
      .finally(() => {
        loaderIndicator.style.display = "none"
      })
  })
}
