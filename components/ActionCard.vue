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
      <div class="cost">
        <CostIcon :cost="cost" v-for="cost in action.card.cost" />
      </div>
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
  font-family: "HYWenHei";
  color: white;
  text-shadow: -1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c,
    1px 1px 1px #673b2c;
}
</style>
