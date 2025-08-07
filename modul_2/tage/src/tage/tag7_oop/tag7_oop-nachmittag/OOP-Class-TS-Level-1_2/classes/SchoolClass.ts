class SchoolClass {
  _id: number | string
  _name: string
  _endDate?: string

  constructor(id: number | string, name: string) {
    this._id = id
    this._name = name
    console.log("School class creation successful")
  }
}

export default SchoolClass
