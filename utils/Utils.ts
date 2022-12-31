import ICharacterCard from "~~/common/interfaces/cards/ICharacterCard"
import _characters from "../data/characters.json"
import _actions from "../data/actions.json"
import IActionCard from "~~/common/interfaces/cards/IActionCard"

const characters = new Map<string, ICharacterCard>()

getAllCharacters().forEach((value: ICharacterCard) => {
  characters.set(value.id, value)
})

const actions = new Map<string, IActionCard>()

getAllActions().forEach((value: IActionCard) => {
  actions.set(value.id, value)
})

export function getAllCharacters(): ICharacterCard[] {
  return <ICharacterCard[]>_characters
}

export function getCharacter(id: string): ICharacterCard {
  return characters.get(id)!!
}

export function getAllActions(): IActionCard[] {
  return <IActionCard[]>_actions
}

export function getAction(id: string): IActionCard {
  return actions.get(id)!!
}