function myBio(vorname: string, nachname: string, geburtsort: string, alter: number, wohnort: string): void {
  const fullNameOutput = `Mein Name ist ${vorname} ${nachname}`
  const birthPlaceOutput = `Ich bin in ${geburtsort} geboren. `
  const ageOutput = `Ich bin ${alter} Jahre alt.`
  const residenceOutput = `Ich wohne in ${wohnort}`
  const bioText = `Mein Name ist ${vorname} ${nachname}. Ich bin in ${geburtsort} geboren, ${alter} Jahre alt und wohne in ${wohnort}.`

  console.log(bioText)
  console.log(fullNameOutput)
  console.log(birthPlaceOutput)
  console.log(ageOutput)
  console.log(residenceOutput)
}

myBio("John", "Staub", "Beckum", 29, "Diestedde")
