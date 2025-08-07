type TWeeklyMeeting = {
  title: string
  startDate: Date
  weekday: string
}

// ? es gibt keine Vorgabe für die Schreibweise des Wochentages
// ? an verschieden Stellen im Code kann hier verschiedenes stehen

const DailMeet: TWeeklyMeeting = {
  title: "Daily",
  startDate: new Date(),
  weekday: "Montag",
}
const TW_Meet: TWeeklyMeeting = { title: "TrainersWeekly", startDate: new Date(), weekday: "Dienstag" }

const FeedBack_Meet: TWeeklyMeeting = { title: "Feedback", startDate: new Date(), weekday: "Friday" }

// * enum => eine vordefinierte Auflistung von Werten hinter denen Number stecken

enum Weekday {
  Monday, // 0
  Tuesday, // 1
  Wednesday, // 2
  Thursday, // 3
  Friday, // 4
  Saturday, // 5
  Sunday, // 6
}

console.log(Weekday)

for (const weekday in Weekday) {
  console.log(weekday)
}

type TWeeklyMeeting2 = {
  title: string
  startDate: Date
  weekday: Weekday
}

const vorlesung: TWeeklyMeeting2 = {
  title: "Retro",
  startDate: new Date(),
  weekday: Weekday.Monday,
}

switch (vorlesung.weekday) {
  case Weekday.Monday:
    console.log("Heute ist Montag")
    break
  case Weekday.Tuesday:
    console.log("Am Dienstag ist die Vorlesung")
    break
  default:
    console.log("ungültiger Tag")
    break
}

// ! Bsp2

enum OrderStatus {
  Created, // 0
  Accepted, // 1
  InProgress, // 2
  InDelivery,
  Cancelled,
  Deleted,
}

// das Enum OrderStatus können wir jetzt in unserem Type Bestellungen (shopOrder) verwenden
// alle die mit ShopOrder arbeiten, können jetzt nur sinvolle Werte im Feld Status angeben
type TShopOrder = {
  number: number
  customerNumber: number
  status: OrderStatus
}

const order477: TShopOrder = {
  number: 477,
  customerNumber: 5433,
  status: OrderStatus.Created,
}

console.log(order477)

order477.status = OrderStatus.Accepted

console.log("Beziechnung von Orderstatus direkt", OrderStatus[1])
console.log("Beziechnung von Orderstatus über Variable", OrderStatus[order477.status])

// wenn wir keine eigene Werte angeben, wird bei einem Enum automatisch 0,1.2,.... durchnummiertiert
// wenn wir aber eigene Werte vergeben, indem wir sie mit = dahinter speichern lassen

enum HttpStatusCode {
  OK = 200,
  Created = 201,
  BADGATEWAY = 400,
  NOTFOUND = 404,
}

console.log(HttpStatusCode)
