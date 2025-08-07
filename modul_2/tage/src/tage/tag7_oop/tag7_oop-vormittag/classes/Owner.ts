class Owner {
  public _vorName?: string
  // public ist halt der standartwert von den Eigenschaft und dadurch sind die von außen immer sichtbar

  // mit private kann die Eigenschaft nur innerhalb der Klasse verwendet werden und ist von außen nicht sichbar

  private _nachName: string
  _handyNummer: string
  _email?: string

  // *** Getter und Setter

  // ? get ist für das Herausholen des Eigenschaftswert zuständing
  // ? get - Name der Eigenschaft - leere runde Klammern - geschweifte Klammern
  // ? in den runde Klammern wird immer ein return geschrieben

  get nachName() {
    return this._nachName
  }

  // ? set ist für das Setzen eines Eingeschaftswert zuständing
  // ? set - Name der Eigenschaft  dann einfach leere runde Klammern, wird er zu setzende Wert übergeben.
  // ? in den geschweifte Klammern wird dann der Wert einer internen Eingeschaft gesetzt
  // ? in value steht der Wert, der nach dem = beim zuweisen steht
  // ? ich lege auch den eindeutigen Datentyp fest: string

  set nachName(value: string) {
    this._nachName = value
  }

  constructor(nachName: string, handyNummer: string) {
    this._nachName = nachName
    this._handyNummer = handyNummer
  }

  printInfo(): void {
    console.log(`Der Besitzer ist ${this._vorName ?? "Unbekannt"} und seine Handynummer lautet ${this._handyNummer}`)
  }
}

export default Owner
