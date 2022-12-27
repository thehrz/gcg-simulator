import Character from "../cards/Character"

interface Player {
  name: string
  characterCards: Character[]
}

export default Player