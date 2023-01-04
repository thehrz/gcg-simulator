<script setup lang="ts">
import IAction from "~~/common/interfaces/IAction"

defineProps<{
  action: IAction
}>()
</script>

<template>
  <div class="card">
    <div class="cardBoard">
      <nuxt-img :src="'images/cards/' + action.card.id + '.png'" />
    </div>
  </div>
</template>

<style scoped>
.card {
  height: auto;
  position: relative;
  display: inline-block;
  margin-left: -15%;
}

.card > img {
  width: 100%;
}

.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: 100% 100%;
  padding: 2.5% 3%;
}

.cardBoard > img {
  width: 100%;
}
</style>
