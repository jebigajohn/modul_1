import OrderStatus from "../enums/OrderStatus"
import type IPizza from "./IPizza"

interface IOrder {
  _orderNumber: number
  _customerName: string
  _pizzen: IPizza[]
  _status: OrderStatus
  // * Schreibweise (wie bei Type) => Methodenname:
  // * () für Paramter => Rückgabedatentype
  // gibMalName: () => string
  updateStatus: () => void
  cancle: () => boolean
}

export default IOrder
