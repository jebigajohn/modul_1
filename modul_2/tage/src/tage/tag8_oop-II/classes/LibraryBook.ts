class LibraryBook {
  private _id: string = ""
  private _currentOwner: string = ""
  private _title: string = ""
  public _author: string = ""
  private _isBorrowed: boolean = false

  private generateId(): string {
    const myId = `id:${Math.floor(Math.random() * 100 + 1)}`
    return myId
  }

  constructor(title: string, author: string) {
    // ! Einmaliges setzen von Werten: Im Konstruktor, Eigenschaften private nur ein Getter
    this._id = this.generateId()
    this._title = title
    this._author = author
  }

  public borrowBook(name: string): void {
    if (!this._isBorrowed) {
      this._isBorrowed = true
      this._currentOwner = name
    } else {
      console.error(`The Book ${this._title} is already borrowed`)
    }
  }

  public returnBook(): void {
    if (this._isBorrowed) {
      this._isBorrowed = false
      this._currentOwner = ""
    } else {
      console.error(`The book ${this._title} was not borrowed`)
    }
  }
}

export default LibraryBook
