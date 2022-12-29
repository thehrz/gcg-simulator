import Dice from "~~/common/enums/Dice"
import ICharacter from "../ICharacter"

interface IPlayer {
  name: string
  characters: ICharacter[]
  dices: Dice[]
}

export default IPlayer