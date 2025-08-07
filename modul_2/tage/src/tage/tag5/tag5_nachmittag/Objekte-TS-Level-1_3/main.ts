type Apple = {
  color: string
  size: string
  isSweet: boolean
}

const redApple: Apple = { color: "red", size: "big", isSweet: false }
const greenApple: Apple = { color: "green", size: "small", isSweet: false }
const yellowApple: Apple = { color: "yellow", size: "big", isSweet: true }
const apples: Apple[] = [redApple, greenApple, yellowApple]

apples.forEach((apples: Apple) => {
  console.log(apples.size)
})
apples.forEach((apples: Apple) => {
  console.log(apples.color)
})

console.log(apples.length)

const pinkApple: Apple = { color: "pink", size: "small", isSweet: true }

apples.push(pinkApple)

console.log(apples)
