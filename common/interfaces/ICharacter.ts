import Element from "../enums/Element"

interface ICharacter {
  cardID: string
  hp: number
  energy: number
  isFighting: boolean
  state?: Element[]
}

export default ICharacter
