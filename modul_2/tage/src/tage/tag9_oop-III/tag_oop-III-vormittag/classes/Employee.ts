import Person from "./Person"

// ? Wenn ich von einer Elternklasse Eigenschaften und Methoden erben will, sieht das immer so aus =>
// ? class Klassenname extends (Name der Eltern Klasse)
// ? Eine Klasse erbt von einer anderen Klasse

// $ Ich brauche zwei Dinge, um zu erben => "extends" und "super" im Konstruktor

class Employee extends Person {
  public _isMarried: boolean = false
  private _email: string = ""

  get email(): string {
    return this._email
  }

  set email(value: string) {
    this._email = value
  }

  constructor(firstName: string, lastName: string, handyNummer?: string) {
    // ? diese Logik passiert schon in der ElternKlasse =>

    super(firstName, lastName, handyNummer)
  }

  public getFullName(): string {
    return `${this._firstName} ${this._lastName} `
  }

  public checkingFly(): void {
    if (this._isMarried) {
      this.checkPassport()
    }
  }
}
export default Employee
