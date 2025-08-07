const drinks = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
]

console.log(drinks)

const upperDrinks = drinks.map((element) => element.toUpperCase())
console.log(upperDrinks)

const likedDrinks = drinks.map((drink) => `I like ${drink}`)

likedDrinks.forEach((sentence) => console.log(sentence))
