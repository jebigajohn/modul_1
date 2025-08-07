// wie ist die Schreibweise ?
// ? zuerst kommt das Keyword class, dann der Name des Objects und danach geschweifte Klammern

import type Owner from "./Owner"
import type Rooms from "./Rooms"

class Bauplan {
  // interne Eigenschafte bennenen wir mit einem Unterstrich davor, um sie von nach außen sichtbaren Eigenschaften zu unterscheiden

  // ! wir stellen uns gerade nur vor, wie ein Hause aussehen sollte.
  _owner: Owner
  _rooms: Rooms
  _color: string = "weiss"
  _baseMent: boolean

  // $ das wäre wie ein paar Investoren, die meine Vorstellung bestätigen und lassen mich mein Haus aufbauen
  constructor(owner: Owner, room: Rooms, baseMent: boolean) {
    this._owner = owner
    this._rooms = room
    this._baseMent = baseMent
  }

  renovieren(newColor: string): void {
    this._color = newColor
    console.log(`Das wurde in${this._color} gestrichen`)
  }
}

export default Bauplan
