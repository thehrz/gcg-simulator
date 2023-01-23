<script setup lang="ts">
import ISkill from "~~/common/interfaces/ISkill"

defineProps<{
  characterName: string
  index: number
  skill: ISkill
}>()

const isSelected = ref(false)
</script>

<template>
  <div class="skillInfo" @click="isSelected = !isSelected">
    <img :src="`./images/skills/${characterName}/skill_${index}.png`" />

    <div>
      <p>{{ skill.name }}</p>
      <div class="costs">
        <div v-for="cost in skill.cost">
          <cost-icon :cost="cost" />
        </div>
      </div>
    </div>
  </div>

  <transition name="fade">
    <p class="desc" v-html="skill.desc" v-if="isSelected"></p>
  </transition>
</template>

<style scoped>
.skillInfo {
  display: flex;
  border: grey 1.5px solid;
  border-radius: 8px;
  padding: 3%;
  align-items: center;
  margin-bottom: 3%;
}

.skillInfo > img {
  width: 27%;
  border-radius: 50%;
  border: grey 2px solid;
}

.skillInfo > div {
  margin-left: 10px;
  width: 100%;
}

.costs {
  display: flex;
}

.costs > div {
  width: 25%;
}

.desc {
  border: grey 2px solid;
  border-radius: 8px;
  padding: 0 3%;
  margin: 0 3%;
  margin-bottom: 3%;
}
</style>
