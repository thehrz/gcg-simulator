import Dice from "~/common/enums/Dice"
import Cost from "../Cost"

interface IActionCard {
  id: string
  name: string
  requirement?: Dice | string
  cost: Cost[]
  desc: string
}

export { IActionCard }