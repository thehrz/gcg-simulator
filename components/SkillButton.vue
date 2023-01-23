<script setup lang="ts">
import Cost from "~~/common/interfaces/Cost"
import ISkill, { Type } from "~~/common/interfaces/ISkill"

defineProps<{
  id: number
  name: string
  skill: ISkill
  costs?: Cost[]
  disable: boolean
}>()
</script>

<template>
  <div class="skillButton">
    <div :class="{ burst: skill.type == Type.ElementalBurst }">
      <button
        :class="{ disable: disable, burst: skill.type == Type.ElementalBurst }"
      >
        <img :src="`./images/skills/${name}/skill_${id}.png`" />
      </button>
    </div>

    <div class="costs">
      <div v-for="cost in costs">
        <CostIcon :cost="cost" />
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

.skillButton {
  width: 20%;
  margin: 0 1%;
}

.skillButton button {
  display: block;
  width: 100%;
  background-image: url("/images/icons/skill_background.png");
  background-size: 120%;
  background-position: center;
  border-radius: 50%;
  border: 2px solid #544e3b;
  margin: 0 1%;
}

.skillButton button:hover {
  border: 2px solid #ccb15a;
}

.skillButton button:active {
  border: 2px solid #888476;
}

.costs {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.costs > div {
  width: 50%;
}

.burst {
  background-image: url("/images/icons/skill_background_burst.png");
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
}

.disable {
  pointer-events: none;
}

.disable > img {
  opacity: 50%;
}
</style>
