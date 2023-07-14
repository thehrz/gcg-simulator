<script setup lang="ts">
import { ICharacter } from "~/common/interfaces/ICharacter"

const props = defineProps<{
  character: ICharacter
}>()

const selected = ref(false)

const { cardID, hp, energy, weapon, artifact, talent, state } = props.character

const card = getCharacter(cardID)
</script>

<template>
  <div class="card m-4%" @click="selected = true">
    <div class="elementIcons flex justify-center" v-if="state">
      <ElementIcon class="w-25%" v-for="element in state" :element="element" />
    </div>

    <div class="cardBoard bg-fill p-3% relative cursor-pointer">
      <img class="w-100%" :src="getCard(cardID)" />
      <div class="hp font_shadow flex items-center justify-center py-20.5% h-0 w-34% bg-fill absolute top--8% left--12%">
        {{ hp }}</div>
      <div class="flex flex-col items-center absolute w-28% left--9% top-20%">
        <img class="w-100%" :src="getIcon('weapon')" v-if="weapon" />
        <img class="w-100%" :src="getIcon('artifact')" v-if="artifact" />
        <img class="w-100%" :src="getIcon('talent')" v-if="talent" />
      </div>
      <div class="energyIcons flex flex-col items-center w-35% absolute right--16% top-3%">
        <EnergyIcon class="mb--30%" :is-full="index <= energy" v-for="index in card.energy" />
      </div>
      <transition name="fade">
        <selected-icon :selected="selected" />
      </transition>
    </div>

    <character-info :show="selected" :character="character" @close="selected = false" />
  </div>
</template>

<style scoped lang="scss">
.cardBoard {
  background-image: url("/images/icons/card_border.png");
}

.hp {
  background-image: url("/images/icons/hp.png");
}

.null {
  padding: 15%;
}
</style>
