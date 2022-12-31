import Dice from "~~/common/enums/Dice"

interface IActionCard {
  id: string
  name: string
  requirement?: Dice | string
  cost: Cost[]
  desc: string
}

export interface Cost {
  type: Dice | "energy"
  count: number
}

export default IActionCard