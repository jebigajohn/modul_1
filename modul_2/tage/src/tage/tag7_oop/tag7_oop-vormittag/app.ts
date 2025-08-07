// OOP => Objectorientierte Programmierung
// $ OOP ist ein Pragrammierstil, bei dem die Software in Objekte unterteilt sind.
// $ Diese Objekte sind Instanzen von klassen, die als Blaupausen oder Vorlage für die Objekte dienen. Jedes Objekt kann Daten wie Eigenschaften speichern und bestimmte Aktionen ausführen (Methoden)

import Bauplan from "./classes/Bauplan"
import Owner from "./classes/Owner"
import Rooms from "./classes/Rooms"
import { RoomType } from "./enums/RoomType"

// type Bauplan = {
//     _besitzer: string,
//     tiefGarage: boolean
// }

// const haus_1: Bauplan = {
//     _besitzer: "Joe",
//     tiefGarage: true
// }

// ==== Klasse =====

// const today = new Date()

// ! lass mal was aufbauen =>

const room_haus_1 = new Rooms(3, [RoomType.BEDROOM, RoomType.BATHROOM, RoomType.KITCHEN])

const room_haus_2 = new Rooms(1, [RoomType.BEDROOM])

const besitzer_1 = new Owner("Mustermann", "1786/231432523")

const hause_1 = new Bauplan(besitzer_1, room_haus_1, false)

hause_1.renovieren("red")

// besitzer_1._vorName = "kim"

console.log(hause_1)

console.log(besitzer_1.nachName)

besitzer_1.nachName = "Batman"

room_haus_1.anzeigen()
besitzer_1.printInfo()

// besitzer_1._nachName = "mustermann"
