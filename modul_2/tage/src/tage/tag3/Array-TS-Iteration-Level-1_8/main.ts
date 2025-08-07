const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function printEvenNumbers(arr: number[]): number[] {
  return arr.filter(function (num) {
    return num % 2 === 0
  })
}

function printOddNumbers(arr: number[]): number[] {
  return arr.filter(function (num) {
    return num % 2 !== 0
  })
}

const evenNumbers = printEvenNumbers(zahlen)
const oddNumbers = printOddNumbers(zahlen)

console.log("Even numbers:", evenNumbers)
console.log("Odd numbers:", oddNumbers)

//! Lösung mit Arrow Functions
// const printEvenNumbers = (arr: number[]): number[] => arr.filter(num => num % 2 === 0)
// const printOddNumbers = (arr: number[]): number[] => arr.filter(num => num % 2 !== 0)

// const evenNumbers = printEvenNumbers(zahlen)
// const oddNumbers = printOddNumbers(zahlen)

// console.log("Even numbers:", evenNumbers)
// console.log("Odd numbers:", oddNumbers)
