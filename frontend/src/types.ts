enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

export default interface UserState {
  firstName: string,
  age: number,
  email: string,
  gender: GenderEnum,
}
