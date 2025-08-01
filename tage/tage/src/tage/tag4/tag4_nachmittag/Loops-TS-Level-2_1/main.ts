function createImageNames(): string[] {
  const returnArray: string[] = []

  for (let i = 1; i <= 100; i++) {
    const numberPart = i.toString().padStart(3, "0")
    const fileName = `image_${numberPart}.jpg`
    returnArray.push(fileName)
  }

  return returnArray
}

const imageNames = createImageNames()
console.log(imageNames)
