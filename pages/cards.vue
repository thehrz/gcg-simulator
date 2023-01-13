<script setup lang="ts">
import ICharacterCard from "~~/common/interfaces/cards/ICharacterCard"
import ICharacter from "~~/common/interfaces/ICharacter"

const cards: ICharacter[] = getAllCharacters().map((value: ICharacterCard) => {
  return {
    cardID: value.id,
    hp: value.hp,
    energy: value.energy,
    isFighting: false,
  }
})
</script>

<template>
  <nuxt-layout>
    <div class="cardsList">
      <character-card v-for="card in cards" :character="card" />
    </div>
  </nuxt-layout>
</template>

<style scoped>
.cardsList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 132px);
  justify-items: center;
  justify-content: center;
}

.cardsList > div {
  margin: 8% 0;
  width: 100px;
}
</style>
