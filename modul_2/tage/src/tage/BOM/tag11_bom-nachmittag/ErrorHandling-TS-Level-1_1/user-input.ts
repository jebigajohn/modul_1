function greetUser(): void {
  try {
    const userName = window.prompt("Bitte gib deinen Namen ein:")

    if (!userName) {
      throw new Error("Kein Name eingegeben")
    }

    console.log(`Hallo, ${userName}! Schön, dich zu sehen.`)
  } catch (error) {
    console.error(error)
    console.log("Hallo, Gast! Willkommen auf unserer Seite.")
  }
}

greetUser()
