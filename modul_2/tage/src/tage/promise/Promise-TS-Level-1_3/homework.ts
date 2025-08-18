let firstPromise: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 1 done.")
  }, 20000)
})
let secondPromise: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 2 done.")
  }, 30000)
})
let thirdPromise: Promise<string> = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("Exercise 3 done.")
  }, 40000)
})

const paragraph = document.querySelector("p") as HTMLParagraphElement

firstPromise.then((result) => {
  paragraph.innerText += "\n" + result
})
secondPromise.then((result) => {
  paragraph.innerText += "\n" + result
})
thirdPromise.then((result) => {
  paragraph.innerText += "\n" + result
})

// __________Promise-TS-Level-1_4___________

Promise.all([firstPromise, secondPromise, thirdPromise])
  .then((resp: string[]) => {
    console.log(resp)
    paragraph.innerText += "\n" + resp.join("\n")
    paragraph.innerText += "\nHomework done"
  })
  .catch((err) => {
    console.error("Fehler:", err)
  })
