function getNumberOfVowels(text: string): number {
  const vowels = ["a", "e", "i", "o", "u"]
  let count = 0

  for (let i = 0; i < text.length; i++) {
    const char = text[i].toLowerCase()
    if (vowels.includes(char)) {
      count++
    }
  }

  return count
}
console.log(getNumberOfVowels("Hello World")) // → 3
console.log(getNumberOfVowels("Programming")) // → 3
console.log(getNumberOfVowels("TypeScript")) // → 2
console.log(getNumberOfVowels("AEIOU are vowels")) // → 9
