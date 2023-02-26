import _characters from "~/assets/data/characters.json"
import _actions from "~/assets/data/actions.json"
import _summons from "~/assets/data/subs.json"
import IActionCard from "~/common/interfaces/cards/IActionCard"
import ICharacterCard from "~/common/interfaces/cards/ICharacterCard"
import ISummonCard from "~/common/interfaces/cards/ISummonCard"

const characters = new Map<string, ICharacterCard>()

getAllCharacters().forEach((value: ICharacterCard) => {
  characters.set(value.id, value)
})

const actions = new Map<string, IActionCard>()

getAllActions().forEach((value: IActionCard) => {
  actions.set(value.id, value)
})

const summons = new Map<string, ISummonCard>()

getAllSummons().forEach((value: ISummonCard) => {
  summons.set(value.id, value)
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

export function getAllSummons(): ISummonCard[] {
  return <ISummonCard[]>_summons
}

export function getSummon(id: string): ISummonCard {
  return summons.get(id)!!
}
