<script setup lang="ts">
import Dice from "~~/common/enums/Dice"
import Element from "~~/common/enums/Element"
import Table from "~~/common/enums/Table"
import IPlayer from "~~/common/interfaces/IPlayer"

const robot: IPlayer = {
  name: "robot",
  characters: [
    {
      cardID: "jadeplume_terrorshroom",
      hp: 5,
      energy: 1,
      isFighting: true,
    },
    {
      cardID: "chongyun",
      hp: 10,
      energy: 2,
      isFighting: false,
    },
  ],
  actions: [],
  dices: [Dice.Any],
  support: [
    {
      cardID: "timmie",
      count: 1,
    },
  ],
  thisRound: false,
}

const player: IPlayer = {
  name: "player",
  avatar: "nahida",
  characters: [
    {
      cardID: "ganyu",
      hp: 10,
      energy: 2,
      isFighting: true,
      state: [Element.Dendro, Element.Cryo],
    },
  ],
  actions: [
    {
      cardID: "undivided_heart",
    },
    {
      cardID: "prophecy_of_submersion",
    },
  ],
  dices: [Dice.Cryo, Dice.Cryo],
  support: [
    {
      cardID: "parametric_transformer",
    },
    {
      cardID: "favonius_cathedral",
      time: 1,
      heal: 2,
    },
  ],
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
