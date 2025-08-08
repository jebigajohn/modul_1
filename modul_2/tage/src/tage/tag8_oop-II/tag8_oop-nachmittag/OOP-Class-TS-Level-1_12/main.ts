import IceCreamFlavor from "./classes/IceCreamFlavor"

const Vanilla = new IceCreamFlavor("Vanilla", 1.5, true, "Classic vanilla flavor")
const Chocolate = new IceCreamFlavor("Chocolate", 1.8, true, "Rich and creamy chocolate")
const Pistachio = new IceCreamFlavor("Pistachio", 2.0, false)
const Mango = new IceCreamFlavor("Mango", 1.7, true, "Tropical mango delight")

const flavors: IceCreamFlavor[] = [Vanilla, Chocolate, Pistachio, Mango]

flavors.filter((flavor) => flavor._isPopular).forEach((flavor) => console.log(flavor._name))

flavors.forEach((flavor) => {
  flavor.printInfo()
  console.log("Description length:", flavor.getLengthOfDescription())
  flavor.getTotalPrice(2)
})
