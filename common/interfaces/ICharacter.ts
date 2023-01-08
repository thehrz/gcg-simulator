import Element from "../enums/Element"
import IArtifact from "./IArtifact"
import IWeapon from "./IWeapon"
import ITalent from "./ITalent"

interface ICharacter {
  cardID: string
  hp: number
  energy: number
  isFighting: boolean
  weapon?: IWeapon
  artifact?: IArtifact
  talent?: ITalent
  state?: Element[]
}

export default ICharacter
