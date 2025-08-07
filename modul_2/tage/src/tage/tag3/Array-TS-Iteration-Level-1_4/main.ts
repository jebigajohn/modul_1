const fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120]

// Umrechnung: (Fahrenheit - 32) / 1.8
const celsius = fahrenheit.map((f) => Math.round((f - 32) / 1.8))

console.log("Celsius:", celsius)
