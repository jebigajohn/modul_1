function doHomeWork(studentName: string, timeInMilliSeconds: number): Promise<string> {
  return new Promise((resolve, reject) => {
    if (timeInMilliSeconds === 0) {
      reject("Homework duration must be greater than 0")
    }
    setTimeout(() => {
      resolve(`${studentName} has finished homework`)
    }, timeInMilliSeconds)
  })
}
const aliceHomeWork = doHomeWork("Alice", 1000)
const JoeHomeWork = doHomeWork("Joe", 2000)

console.log(aliceHomeWork)
console.log(JoeHomeWork)

// aliceHomeWork
//   .then((lastMsg: string) => {
//     console.log(lastMsg)
//   })
//   .catch((err: string) => {
//     console.error(err)
//   })

Promise.all([aliceHomeWork, JoeHomeWork])
  .then((results: string[]) => {
    // hier landen wir, wenn alle Promises mit resovled wiedergegeben werden
    // in result stehen die zwei Ergebnisse der Promises genau in der Reihenfolge, das was wir in Promise.all reingeschrieben haben
    results.forEach((result: string) => {
      console.log(result)
    })
  })
  .catch((err) => console.error(err))

type IceCream = {
  id: number
  name: string
  details?: string
  price: number
}

const localIceCreams: IceCream[] = [
  { id: 1, name: "Vanilla", price: 2.0 },
  { id: 2, name: "Chocolate", price: 2.5 },
]

const onlineIceCreams: IceCream[] = [
  { id: 3, name: "Strawberry", price: 3.0 },
  { id: 4, name: "Mango", price: 2.5 },
]

const getLocalIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(localIceCreams)
    }, 2000)
  })
}

const getOnlineIceCream = (): Promise<IceCream[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(onlineIceCreams)
    }, 2000)
  })
}

Promise.all([getLocalIceCream(), getOnlineIceCream()])
  .then((resp: IceCream[][]) => {
    console.log(resp)
    const [local, online] = resp
    console.log("Local IceCream", local)
    console.log("Online IceCream", online)

    const allIceCreams: IceCream[] = [...local, ...online]
    console.log(allIceCreams)
    allIceCreams.forEach((iceCream: IceCream) => console.log(iceCream.price))
  })
  .catch((err) => {
    console.error(err)
  })
