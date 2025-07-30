const cityList = ["London", "Paris", "New York"]

console.log(cityList)

cityList.push("Shanghai")

console.log(cityList)
cityList.push("Istanbul")

console.log(cityList)
cityList.push("Moskau", "Münster")

console.log(cityList)

let lastValue: string | undefined = cityList.pop()

console.log(lastValue)

console.log(cityList)
