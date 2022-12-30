<script setup lang="ts">
import Dice from "~~/common/enums/Dice"
import Element from "~~/common/enums/Element"
import Table from "~~/common/enums/Table"
import Weapon from "~~/common/enums/Weapon"
import ICharacterCard from "~~/common/interfaces/cards/ICharacterCard"
import ICharacter from "~~/common/interfaces/ICharacter"
import IPlayer from "~~/common/interfaces/player/IPlayer"
import { Type } from "~~/common/interfaces/ISkill"

//TODO: Test
const CharacterGanyu: ICharacterCard = {
  id: "ganyu",
  name: "甘雨",
  hp: 10,
  energy: 2,
  element: Element.Cryo,
  weapon: Weapon.Bow,
  skills: [
    {
      type: Type.NormalAttack,
      name: "流天射术",
      desc: "造成2点物理伤害。",
      cost: [
        {
          type: Dice.Cryo,
          count: 1,
        },
        {
          type: Dice.Void,
          count: 2,
        },
      ],
    },
    {
      type: Type.ElementalSkill,
      name: "山泽麟迹",
      desc: "造成1点冰元素伤害，生成冰莲。",
      cost: [
        {
          type: Dice.Cryo,
          count: 3,
        },
      ],
      sub: {
        id: "ice_lotus",
        name: "冰莲",
        desc: "我方出战角色受到伤害时：抵消1点伤害。可用次数：2",
      },
    },
    {
      type: Type.NormalAttack,
      name: "霜华矢",
      desc: "造成3点物理伤害，对所有敌方后台角色造成2点穿透伤害。",
      cost: [
        {
          type: Dice.Cryo,
          count: 5,
        },
      ],
    },
    {
      type: Type.ElementalBurst,
      name: "降众天华",
      desc: "造成1点物理伤害，对所有敌方后台角色造成1点穿透伤害，召唤冰灵珠。",
      cost: [
        {
          type: Dice.Cryo,
          count: 3,
        },
        {
          type: "energy",
          count: 2,
        },
      ],
      sub: {
        id: "sacred_cryo_pearl",
        name: "冰灵珠",
        desc: "结束阶段：造成1点冰元素伤害，对所有敌方后台角色造成1点穿透伤害。可用次数：2",
      },
    },
  ],
}

const ganyu1: ICharacter = {
  card: CharacterGanyu,
  hp: 5,
  energy: 1,
  isFighting: true,
}

const ganyu2: ICharacter = {
  card: CharacterGanyu,
  hp: 10,
  energy: 2,
  isFighting: false,
}

const ganyu3: ICharacter = {
  card: CharacterGanyu,
  hp: 10,
  energy: 2,
  isFighting: true,
}

const robot: IPlayer = {
  name: "robot",
  characters: [ganyu1, ganyu2],
  dices: [Dice.Any],
}
const player: IPlayer = {
  name: "player",
  characters: [ganyu3],
  dices: [Dice.Cryo, Dice.Cryo],
}
</script>

<template>
  <div class="container">
    <GameContainer :table="Table.Mondstadt" :owner="player" :enemy="robot" />
  </div>
</template>
