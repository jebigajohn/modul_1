import Employee from "./classes/Employee"
import Order from "./classes/Order"
import Person from "./classes/Person"
import Pizza from "./classes/Pizza"
import OrderStatus from "./enums/OrderStatus"
import IPizza from "./interfaces/IPizza"

const user1 = new Person("Andre", "Schmidt", "19584912489")

const employee_andre = new Employee("Andre", "Schmidt", "19584912489")

employee_andre.email = "andre@gmail.de"

console.log(employee_andre.getFullName())

employee_andre._isMarried = true

employee_andre.checkingFly()

const order1 = new Order(1, "Joe Doe", OrderStatus.Created)

console.log(order1)

const pizzaFunghi = new Pizza("Pizza Funghi", 1)
const pizzaTuna = new Pizza("Pizza Tuna", 2)

const pizzeriaArray = [pizzaFunghi, pizzaTuna]

order1.updateStatus()

if (order1._status === OrderStatus.Ready) {
  order1._pizzen.forEach((pizza: IPizza) => {
    order1._pizzen.push(pizza)
  })
}
