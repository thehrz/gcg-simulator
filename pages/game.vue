<script setup lang="ts">
import Dice from "~~/common/enums/Dice"
import Table from "~~/common/enums/Table"
import IAction from "~~/common/interfaces/IAction"
import ICharacter from "~~/common/interfaces/ICharacter"
import IPlayer from "~~/common/interfaces/player/IPlayer"

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
}

const undivided_heart: IAction = {
  card: getAction("undivided_heart"),
  hp: 2,
}

const robot: IPlayer = {
  name: "robot",
  characters: [jadeplume_terrorshroom, chongyun],
  actions: [],
  dices: [Dice.Any],
}
const player: IPlayer = {
  name: "player",
  characters: [ganyu],
  actions: [undivided_heart, undivided_heart],
  dices: [Dice.Cryo, Dice.Cryo],
}
</script>

<template>
  <div class="container">
    <GameContainer :table="Table.Mondstadt" :owner="player" :enemy="robot" />
  </div>
</template>
