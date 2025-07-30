// Primitive Types in der Programmierersprache

let firstName: string = "Joe"
let age: number = 22
let isOnline: boolean = true

function sayHello(name: string): string {
  return "Hello" + name
}

console.log(sayHello("andre"))
console.log(sayHello("Joe"))

function logMessage(message: string): void {
  console.log("Log", message)
}

logMessage("Heute ist ein schöner Tag")

function calcArea(widht: number, height: number): number {
  return widht * height
}

console.log(calcArea(100, 20))
