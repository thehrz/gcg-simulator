import Dice from "../enums/Dice"

interface ISkill {
  type: Type
  name: string
  desc: string
  cost?: Cost[]
  sub?: Sub
}

export enum Type {
  NormalAttack = "普通攻击",
  ElementalSkill = "元素战技",
  ElementalBurst = "元素爆发",
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

export default ISkill
