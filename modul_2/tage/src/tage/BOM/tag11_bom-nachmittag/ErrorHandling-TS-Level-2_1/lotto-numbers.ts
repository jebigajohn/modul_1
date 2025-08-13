function generateLottoNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1

  if (randomNumber > 49) {
    throw new Error(`Ungültige Zahl (${randomNumber}) - muss <= 49 sein`)
  }

  return randomNumber
}

const lottoResults: number[] = []

while (lottoResults.length < 7) {
  try {
    const number = generateLottoNumber()

    if (!lottoResults.includes(number)) {
      lottoResults.push(number)
    } else {
      console.log(`Zahl ${number} bereits gezogen...`)
    }
  } catch (error) {
    console.log((error as Error).message)
  }
}

console.log("Lottozahlen:", lottoResults)
