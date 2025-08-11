import Customer from "./classes/Customer"

const customer = new Customer()

customer.name = "Max Mustermann"
customer.email = "max@example.com"
customer.address = "Musterstraße 1"
customer.postalCode = "12345"
customer.city = "Musterstadt"

console.log(customer)

customer.name = "x".repeat(61)
customer.email = "maxexample.com"
customer.postalCode = "1245424"
