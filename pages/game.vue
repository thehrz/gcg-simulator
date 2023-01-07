<script setup lang="ts">
import Dice from "~~/common/enums/Dice"
import Element from "~~/common/enums/Element"
import Table from "~~/common/enums/Table"
import IAction from "~~/common/interfaces/IAction"
import ICharacter from "~~/common/interfaces/ICharacter"
import IPlayer from "~~/common/interfaces/IPlayer"
import ISupport from "~~/common/interfaces/ISupport"

const jadeplume_terrorshroom: ICharacter = {
  cardID: "jadeplume_terrorshroom",
  hp: 5,
  energy: 1,
  isFighting: true,
}

const chongyun: ICharacter = {
  cardID: "chongyun",
  hp: 10,
  energy: 2,
  isFighting: false,
}

const ganyu: ICharacter = {
  cardID: "ganyu",
  hp: 10,
  energy: 2,
  isFighting: true,
  state: [Element.Dendro, Element.Cryo],
}

const undivided_heart: IAction = {
  cardID: "undivided_heart",
}

const prophecy_of_submersion: IAction = {
  cardID: "prophecy_of_submersion",
}

const timmie: ISupport = {
  cardID: "timmie",
  count: 1,
}

const parametric_transformer: ISupport = {
  cardID: "parametric_transformer",
}

const favonius_cathedral: ISupport = {
  cardID: "favonius_cathedral",
  time: 1,
}

const robot: IPlayer = {
  name: "robot",
  characters: [jadeplume_terrorshroom, chongyun],
  actions: [],
  dices: [Dice.Any],
  support: [timmie],
  thisRound: false,
}

const player: IPlayer = {
  name: "player",
  characters: [ganyu],
  actions: [undivided_heart, prophecy_of_submersion],
  dices: [Dice.Cryo, Dice.Cryo],
  support: [parametric_transformer, favonius_cathedral],
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
