type Alcohol = {
  name: string
  percentage: number
  type: string
}

type Mixer = {
  name: string
  type: string
  carbonated: boolean
}

export type Cocktail = Alcohol & Mixer
