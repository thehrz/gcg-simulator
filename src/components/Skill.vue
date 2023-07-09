<script setup lang="ts">
import { ICharacter } from "~/common/interfaces/ICharacter"

const props = defineProps<{
  character: ICharacter
  disable: boolean
}>()

const { cardID } = props.character

const card = getCharacter(cardID)
</script>

<template>
  <div class="flex justify-center">
    <SkillButton class="w-20%" v-for="(skill, index) in card.skills" :skill="skill" :id="index + 1" :name="cardID"
      :costs="skill.cost" :disable="disable" />
  </div>
</template>
