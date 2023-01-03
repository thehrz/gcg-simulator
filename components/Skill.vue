<script setup lang="ts">
import ICharacter from "~~/common/interfaces/ICharacter"

defineProps<{
  character: ICharacter
  disable: boolean
}>()
</script>

<template>
  <div class="skill">
    <SkillButton
      v-for="(skill, index) in character.card.skills"
      :skill="skill"
      :id="index + 1"
      :name="character.card.id"
      :disable="disable"
    />
  </div>
</template>

<style scoped>
.skill {
  display: flex;
  justify-content: center;
}
</style>
