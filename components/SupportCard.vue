<script setup lang="ts">
import ISupport from "~~/common/interfaces/ISupport"

defineProps<{
  support: ISupport
}>()
</script>

<template>
  <div class="supportCard">
    <nuxt-img :src="`/images/cards/${support.cardID}.png`" />
  </div>
</template>

<style scoped>
.supportCard {
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 2px solid #6c7364;
  border-radius: 15%;
}

img {
  width: 100%;
}
</style>
