import Dice from "~~/common/enums/Dice"
import IAction from "../IAction"
import ICharacter from "../ICharacter"

interface IPlayer {
  name: string
  characters: ICharacter[]
  actions: IAction[]
  dices: Dice[]
}

export default IPlayer
