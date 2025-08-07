function getHighestNumber(numbers: number[]): number {
  let max = numbers[0] // Startwert: erstes Element im Array

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i] // Neuer Höchstwert gefunden
    }
  }

  return max
}

console.log(getHighestNumber([5, 12, 7, 3, 25, 9])) // → 25
console.log(getHighestNumber([100, 88, 91, 77, 99])) // → 100
console.log(getHighestNumber([-5, -12, -3, -99, -1])) // → -1
