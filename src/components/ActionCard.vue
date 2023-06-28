<script setup lang="ts">
import { IAction } from "~/common/interfaces/IAction"

const props = defineProps<{
  action: IAction
}>()

const selected = ref(false)

const { cardID } = props.action

const card = getAction(cardID)
</script>

<template>
  <div class="card" @click="selected = true">
    <div class="cost font_shadow">
      <CostIcon :cost="cost" v-for="cost in card.cost" />
    </div>
    <div class="cardBoard">
      <img :src="getCard(cardID)" />

      <transition name="fade">
        <selected-icon :selected="selected" />
      </transition>
    </div>

    <action-info :show="selected" :action="action" @close="selected = false" />
  </div>
</template>

<style scoped lang="scss">
.card {
  height: auto;
  position: relative;
  display: inline-block;
  cursor: pointer;

  img {
    width: 100%;
  }
}

.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: cover;
  padding: 3%;
  position: relative;
}

.cost {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -23%;
  left: -16%;
  width: 35%;
  z-index: 1;
}
</style>
