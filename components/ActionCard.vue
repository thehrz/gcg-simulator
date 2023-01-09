<script setup lang="ts">
import IAction from "~~/common/interfaces/IAction"

const props = defineProps<{
  action: IAction
}>()

const { cardID } = props.action

const card = getAction(cardID)
</script>

<template>
  <div class="card">
    <div class="cardBoard">
      <nuxt-img :src="`images/cards/${cardID}.png`" />
      <div class="cost font_shadow">
        <CostIcon :cost="cost" v-for="cost in card.cost" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  height: auto;
  position: relative;
  display: inline-block;
  margin-left: -9%;
}

.card > img {
  width: 100%;
}

.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: cover;
  padding: 2.5% 2%;
  overflow: hidden;
  height: 100%;
}

.cardBoard > img {
  width: 100%;
}

.cost {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -20%;
  left: -20%;
  width: 40%;
}
</style>
