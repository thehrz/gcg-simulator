<script setup lang="ts">
import Dice from "~~/common/enums/Dice"
import Element from "~~/common/enums/Element"
import Table from "~~/common/enums/Table"
import IAction from "~~/common/interfaces/IAction"
import ICharacter from "~~/common/interfaces/ICharacter"
import IPlayer from "~~/common/interfaces/IPlayer"

const jadeplume_terrorshroom: ICharacter = {
  card: getCharacter("jadeplume_terrorshroom"),
  hp: 5,
  energy: 1,
  isFighting: true,
}

const chongyun: ICharacter = {
  card: getCharacter("chongyun"),
  hp: 10,
  energy: 2,
  isFighting: false,
}

const ganyu: ICharacter = {
  card: getCharacter("ganyu"),
  hp: 10,
  energy: 2,
  isFighting: true,
  state: [Element.Dendro, Element.Cryo],
}

const undivided_heart: IAction = {
  card: getAction("undivided_heart"),
  hp: 2,
}

const prophecy_of_submersion: IAction = {
  card: getAction("prophecy_of_submersion"),
  hp: 2,
}

const robot: IPlayer = {
  name: "robot",
  characters: [jadeplume_terrorshroom, chongyun],
  actions: [],
  dices: [Dice.Any],
  thisRound: false,
}
const player: IPlayer = {
  name: "player",
  characters: [ganyu],
  actions: [undivided_heart, prophecy_of_submersion],
  dices: [Dice.Cryo, Dice.Cryo],
  thisRound: true,
}
</script>

<template>
  <div class="container">
    <GameContainer
      :table="Table.Mondstadt"
      :owner="player"
      :enemy="robot"
      :rounds="1"
    />
  </div>
</template>
