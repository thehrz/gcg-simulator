<script setup lang="ts">
import ICharacter from "~~/common/interfaces/ICharacter"

const props = defineProps<{
  character: ICharacter
  disable: boolean
}>()

const { cardID } = props.character

const card = getCharacter(cardID)
</script>

<template>
  <div class="skill">
    <SkillButton
      v-for="(skill, index) in card.skills"
      :skill="skill"
      :id="index + 1"
      :name="cardID"
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
