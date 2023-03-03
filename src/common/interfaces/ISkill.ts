import { Cost } from "./Cost"

interface ISkill {
  type: Type
  name: string
  desc: string
  cost?: Cost[]
  subID?: string
}

enum Type {
  NormalAttack = "普通攻击",
  ElementalSkill = "元素战技",
  ElementalBurst = "元素爆发",
}

export { ISkill, Type }
