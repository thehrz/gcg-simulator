import ICharacterCard from "./cards/ICharacterCard"

interface ICharacter {
  card: ICharacterCard
  hp: number
  energy: number
  isFighting: boolean
}

export default ICharacter
