import Element from "~~/common/enums/Element"
import Weapon from "~~/common/enums/Weapon"
import Skill from "../Skill"

interface ICharacterCard {
  id: string
  name: string
  hp: number
  energy: number
  element: Element
  weapon: Weapon
  skills: Skill[]
}

export default ICharacterCard
