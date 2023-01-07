import Dice from "~~/common/enums/Dice"
import IAction from "./IAction"
import ICharacter from "./ICharacter"
import ISupport from "./ISupport"

interface IPlayer {
  name: string
  characters: ICharacter[]
  actions: IAction[]
  support?: ISupport[]
  dices: Dice[]
  thisRound: boolean
}

export default IPlayer
