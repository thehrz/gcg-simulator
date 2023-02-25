<script setup lang="ts">
import ICharacterCard from '~/common/interfaces/cards/ICharacterCard';

const cards: string[] = getAllCharacters().map((value: ICharacterCard) => {
  return value.id
})
</script>

<template>
  <nuxt-layout>
    <div class="cardsList">
      <preview-card v-for="id in cards" :id="id" :is-character="true" />
    </div>
  </nuxt-layout>
</template>

<style scoped lang="scss">
.cardsList {
  display: grid;
  grid-template-columns: repeat(auto-fill, 132px);
  justify-items: center;
  justify-content: center;

  div {
    margin-top: 16%;
    width: 100px;
  }
}
</style>
