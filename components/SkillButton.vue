<script setup lang="ts">
import ISkill from "~~/common/interfaces/ISkill"

defineProps<{
  id: number
  name: string
  skill: ISkill
  enable: boolean
}>()
</script>

<template>
  <button>
    <nuxt-img :class="{ enable: !enable }" :src="'./images/skills/' + name + '/skill_' + id + '.png'" />
  </button>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

button {
  width: 20%;
  background-image: url("./images/icons/skill_background.png");
  background-size: 105%;
  background-position: center;
  border-radius: 50%;
  border: 2.5px solid #544e3b;
  margin: 0 1%;
}

.enable {
  opacity: 50%;
}
</style>
