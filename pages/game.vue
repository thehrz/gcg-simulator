<script setup lang="ts">
import Dice from "~~/common/enums/Dice";
import Element from "~~/common/enums/Element";
import Weapon from "~~/common/enums/Weapon";
import Character from "~~/common/interfaces/cards/Character";
import Player from "~~/common/interfaces/player/Player"
import { Type } from "~~/common/interfaces/Skill";

const ganyu: Character = {
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
      desc: '造成2点物理伤害。',
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
      desc: '造成1点冰元素伤害，生成冰莲。',
      cost: [
        {
          type: Dice.Cryo,
          count: 3,
        },
      ],
      sub: {
        id: "ice_lotus",
        name: "冰莲",
        desc: '我方出战角色受到伤害时：抵消1点伤害。可用次数：2',
      },
    },
    {
      type: Type.NormalAttack,
      name: "霜华矢",
      desc: '造成3点物理伤害，对所有敌方后台角色造成2点穿透伤害。',
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
      desc: '造成1点物理伤害，对所有敌方后台角色造成1点穿透伤害，召唤冰灵珠。',
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
        desc: '结束阶段：造成1点冰元素伤害，对所有敌方后台角色造成1点穿透伤害。可用次数：2',
      },
    },
  ],
}

const robot: Player = {
  name: "robot",
  characterCards: [ganyu, ganyu],
}
const player: Player = {
  name: "player",
  characterCards: [ganyu],
}
</script>

<template>
  <div class="container">
    <GameContainer :current="player" :opponent="robot" />
  </div>
</template>