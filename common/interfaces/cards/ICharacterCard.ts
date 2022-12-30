import Element from "~~/common/enums/Element"
import Weapon from "~~/common/enums/Weapon"
import ISkill from "../ISkill"

interface ICharacterCard {
  id: string
  name: string
  hp: number
  energy: number
  element: Element
  weapon: Weapon
  skills: ISkill[]
}

export default ICharacterCard
