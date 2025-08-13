import { IAdress } from "./IAdress"
import { IMovie } from "./IMovie"

interface IUser {
  username: string
  email: string
  phoneNumber: string
  address: IAdress
  role: string
  favoriteMovies: IMovie[]
}

export default IUser
