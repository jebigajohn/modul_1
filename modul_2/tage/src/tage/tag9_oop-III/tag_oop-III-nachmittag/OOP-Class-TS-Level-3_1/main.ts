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

const wentworth = new Actor("Wentworth", "Miller", new Date("1972-06-02"), "Male")
const dominic = new Actor("Dominic", "Purcell", new Date("1970-02-17"), "Male")
const sarahWC = new Actor("Sarah Wayne", "Callies", new Date("1977-06-01"), "Female")

const pbEp1 = new Episode(
  "Pilot",
  44,
  "Michael versucht, seinen Bruder mit einem gewagten Plan aus dem Gefängnis zu holen.",
  [wentworth, dominic, sarahWC]
)
const pbEp2 = new Episode("Allen", 43, "Der Plan nimmt Form an, doch die Zeit arbeitet gegen sie.", [
  wentworth,
  dominic,
])

const prisonBreak = new Series(
  "Prison Break",
  "Ein Ingenieur lässt sich absichtlich inhaftieren, um seinen Bruder aus dem Todestrakt zu befreien.",
  2005,
  2017,
  [pbEp1, pbEp2]
)

const andrew = new Actor("Andrew", "Lincoln", new Date("1973-09-14"), "Male")
const norman = new Actor("Norman", "Reedus", new Date("1969-01-06"), "Male")
const steven = new Actor("Steven", "Yeun", new Date("1983-12-21"), "Male")

const twdEp1 = new Episode(
  "Days Gone Bye",
  67,
  "Rick erwacht in einer apokalyptischen Welt und sucht nach seiner Familie.",
  [andrew, steven]
)
const twdEp2 = new Episode("Guts", 45, "Eine gefährliche Flucht durch zombiverseuchte Straßen.", [andrew, norman])

const theWalkingDead = new Series(
  "The Walking Dead",
  "Überleben in einer Welt voller Untoter – und der Menschlichkeit dazwischen.",
  2010,
  2022,
  [twdEp1, twdEp2]
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
console.log("\n----------------------\n")
printSeriesInfo(prisonBreak)
console.log("\n----------------------\n")
printSeriesInfo(theWalkingDead)
