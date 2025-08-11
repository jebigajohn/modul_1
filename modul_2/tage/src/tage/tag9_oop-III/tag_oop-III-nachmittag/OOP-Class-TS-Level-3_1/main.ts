import Actor from "./classes/Actor"
import Episode from "./classes/Episode"
import Series from "./classes/Series"

const bryan = new Actor("Bryan", "Cranston", new Date("1956-03-07"), "Male")
const aaron = new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male")
const anna = new Actor("Anna", "Gunn", new Date("1968-04-11"), "Female")

const ep1 = new Episode(
  "Pilot",
  58,
  "A high school chemistry teacher teams up with a former student to produce meth.",
  [bryan, aaron, anna]
)

const ep2 = new Episode("Cat's in the Bag...", 48, "Walt and Jesse attempt to tie up loose ends.", [bryan, aaron, anna])

const breakingBad = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  2013,
  [ep1, ep2]
)

function printSeriesInfo(series: Series) {
  console.log(`Title: ${series._title}`)
  console.log(`Description: ${series._description}`)
  console.log(`Start Year: ${series._startYear}`)
  console.log(`End Year: ${series._endYear}`)
  console.log(`Number of Episodes: ${series._episodes.length}`)
  console.log("")

  const allActors: Actor[] = []
  for (const episode of series._episodes) {
    for (const actor of episode._actors) {
      if (!allActors.includes(actor)) {
        allActors.push(actor)
      }
    }
  }

  console.log("Actors:")
  for (const actor of allActors) {
    console.log(`- ${actor._firstName} ${actor._lastName}`)
    console.log(`  - Birthday: ${actor._birthday.toISOString().split("T")[0]}`)
    console.log(`  - Gender: ${actor._gender}`)
  }
}

printSeriesInfo(breakingBad)
