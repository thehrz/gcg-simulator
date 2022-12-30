import Dice from "../enums/Dice"

interface Skill {
  type: Type
  name: string
  desc: string
  cost: Cost[]
  sub?: Sub
}

export enum Type {
  NormalAttack,
  ElementalSkill,
  ElementalBurst,
}

export interface Cost {
  type: Dice | "energy"
  count: number
}

export interface Sub {
  id: string
  name: string
  desc: string
}

export default Skill
