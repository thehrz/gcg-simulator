import { Dice } from "~/common/enums/Dice"
import { IAction } from "./IAction"
import { ICharacter } from "./ICharacter"
import { ISupport } from "./ISupport"
import { ISummon } from "./ISummon"

interface IPlayer {
  name: string
  avatar?: string
  characters: ICharacter[]
  actions?: IAction[]
  support?: ISupport[]
  summons?: ISummon[]
  dices: Dice[]
  thisRound?: boolean
}

export { IPlayer }
