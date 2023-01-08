import Element from "../enums/Element"
import IArtifact from "./IArtifact"
import IWeapon from "./IWeapon"

interface ICharacter {
  cardID: string
  hp: number
  energy: number
  isFighting: boolean
  weapon?: IWeapon
  artifact?: IArtifact
  state?: Element[]
}

export default ICharacter
