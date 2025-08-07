import Car from "./classes/Car"
import Driver from "./classes/Driver"

const car1 = new Car("BMW", 2018, 50)
const car2 = new Car("Tesla", 2022, 0)
const car3 = new Car("Volkswagen", 2015, 30)

const driver1 = new Driver("Anna", "Schmidt", 29, car1)
const driver2 = new Driver("Ben", "Müller", 35, car2)
const driver3 = new Driver("Clara", "Fischer", 41, car3)

console.log(driver1)
console.log(driver2)
console.log(driver3)

console.log(`${driver1._firstName} fährt einen ${driver1._car._brand}`)
console.log(`${driver2._firstName} fährt einen ${driver2._car._brand}`)
