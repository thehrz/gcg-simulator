<script setup lang="ts">
import ISkill, { Type } from "~~/common/interfaces/ISkill"

defineProps<{
  id: number
  name: string
  skill: ISkill
  enable: boolean
}>()
</script>

<template>
  <div
    class="skillButton"
    :class="{ burst: skill.type == Type.ElementalBurst }"
  >
    <button>
      <nuxt-img
        :class="{ enable: !enable }"
        :src="'./images/skills/' + name + '/skill_' + id + '.png'"
      />
    </button>
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
  background-image: url("./images/icons/skill_background.png");
  background-size: 120%;
  background-position: center;
  border-radius: 50%;
  border: 2px solid #544e3b;
  margin: 0 1%;
}
.burst {
  background-image: url("./images/icons/skill_background_burst.png");
  background-size: 110%;
  background-position: center;
  background-repeat: no-repeat;
}
.enable {
  opacity: 50%;
}
</style>
