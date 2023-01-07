import Dice from "../enums/Dice"

interface Cost {
  type: Dice | "energy"
  count: number
}

export default Cost