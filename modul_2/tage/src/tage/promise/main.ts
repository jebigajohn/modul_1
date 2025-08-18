// ! Promise

// ? Promise ist wie ein Versprechen, und hat entweder gute Nachrichten oder schlechte Nachrichten
// ? was ist überhaupt Promise => Sie ist im grunde genommen eine Klasse bzw eine Art von OBJ
// ? um mit Promise arbeiten zu können braucht man eine neue Instanz
// ? die Instanzen können sowohl als variabel, als auch als Function deklariert werden
// ? die Promise Function haben zwei Hauptstände =>
// ? fullfilled => (erfüllt) Der Promise wurde erfolgreich erfüllt
// ? rejected => (abgelehnt) Der Promise wurde nicht erfolgreich erfüllt
// ? pending => (ausstehend) Der Promise braucht noch Zeit zum erfüllen

// ? wo wird promise genutzt => Laden von Daten

// # V1. Variable
// new Promise braucht eine Callback function, die Callback Funktion erwartet immer zwei Argumente
let myPromise = new Promise((resolve, reject) => {
  let server: boolean = false
  if (server) {
    resolve("Die Operation war erfolgreich!")
  } else {
    reject("Es gab ein Problem!")
  }
})

// console.log(myPromise)

// ! resolve => then
// ! reject => catch

// myPromise
//   .then((resp) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => {
//     console.error(err)
//   })
//   .finally(() => console.log("Alles gut"))

// # V2 Function

// function loadData(): Promise<string> {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let server: boolean = false
//       if (server) {
//         resolve("Daten erfolgreich geladen!")
//       } else {
//         reject("Fehler beim laden der Daten!")
//       }
//     }, 3000)
//   })
// }

// console.log(loadData())

// loadData()
//   .then((resp: string) => {
//     console.log(resp)
//   })
//   .catch((err: Error) => console.error(err))

// # V3. Function

function firstStep(): Promise<void> {
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      const success: boolean = true
      if (success) {
        console.log("Erster Schritt abgeschlossen")
        resolve()
      }
    }, 1000)
  })
}

function secondStep(): Promise<void | string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true

      if (success) {
        console.log("Zweiter Schritt abgeschlossen")
        resolve()
      } else {
        reject("Fehler im zweiten Schritt")
      }
    }, 1200)
  })
}

function thirdStep(): Promise<void> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })
}

firstStep()
  .then(() => secondStep())
  .then(() => thirdStep)
  .then(() => {
    console.log("Alle Schritte sind erfolgreich abgeschlossen")
  })
  .catch((err: Error) => console.error(err))

// # V4

const dogAgePromise: Promise<number> = new Promise((resolve, reject) => {
  const randomAge: number = Math.floor(Math.random() * 30)
  if (randomAge <= 20) {
    resolve(randomAge)
  } else {
    reject("No dog age available")
  }
})

dogAgePromise
  .then((resp: number) => {
    console.log(resp)
    const myRespToString = resp.toString()
    return myRespToString
  })
  .then((newVariable: string) => {
    console.log(newVariable)
  })
  .catch((err: Error) => console.error(err))
