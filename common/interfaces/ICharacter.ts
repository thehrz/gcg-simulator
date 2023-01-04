import Element from "../enums/Element"
import ICharacterCard from "./cards/ICharacterCard"

interface ICharacter {
  card: ICharacterCard
  hp: number
  energy: number
  isFighting: boolean
  state?: Element[]
}

export default ICharacter
