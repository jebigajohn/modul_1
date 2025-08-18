import { WeatherType } from "./weather-type"

let myPromise: Promise<WeatherType> = new Promise<WeatherType>((resolve, reject) => {
  const randomNumber: number = Math.floor(Math.random() * 10)
  if (randomNumber <= 6) {
    resolve(randomNumber as WeatherType)
  } else {
    reject(new Error("Weather forecast could not be determined"))
  }
})

myPromise
  .then((resp: WeatherType) => {
    console.log("Wettervorhersage:", WeatherType[resp], resp)
  })
  .catch((err: Error) => {
    console.error("Error:", err)
  })

const paragraph = document.querySelector("p") as HTMLParagraphElement
