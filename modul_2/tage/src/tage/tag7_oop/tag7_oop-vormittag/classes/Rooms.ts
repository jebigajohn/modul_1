import type { RoomType } from "../enums/RoomType"

class Rooms {
  _roomCount: number
  _roomType: RoomType[]

  constructor(roomCount: number, roomType: RoomType[]) {
    this._roomCount = roomCount
    this._roomType = roomType
  }

  // join Methode wandlet das Array in String um und wir können in den runden Klammern mit komma arbeiten, weil die komma trennt die Index voneinander

  anzeigen(): void {
    console.log(`Das Haus hat ${this._roomCount} die Räume sind ${this._roomType.join(", ")}`)
  }
}

export default Rooms
