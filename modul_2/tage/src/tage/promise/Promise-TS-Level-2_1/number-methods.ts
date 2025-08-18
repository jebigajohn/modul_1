let numberPromise = new Promise<number[]>((resolve, reject) => {
  const randomNumbers = Array.from({ length: 3 }, () => Math.floor(Math.random() * 130) + 1)
  if (randomNumbers.some((n) => n > 100)) {
    reject("One of the numbers is greater than 100!")
  } else {
    resolve(randomNumbers)
  }
})

numberPromise
  .then((randomNums) => {
    console.log("Original:", randomNums)
    return randomNums.map((n) => n + 7)
  })
  .then((randomNums) => {
    console.log("After +7", randomNums)
    return randomNums.map((n) => n * 2)
  })
  .then((randomNums) => {
    console.log("After * 2", randomNums)
    return randomNums.map((n) => n - 1)
  })
  .then((randomNums) => {
    console.log("After - 1", randomNums)
    return randomNums.map((n) => n % 2)
  })
  .then((randomNums) => {
    console.log("Final Values:", randomNums)
  })
  .catch((err) => {
    console.error("Error:", err)
  })
  .finally(() => {
    console.log("Finished")
  })
