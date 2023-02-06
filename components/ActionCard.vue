<script setup lang="ts">
import IAction from "~~/common/interfaces/IAction"

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
      <img :src="`/images/cards/${cardID}.png`" />

      <transition name="fade">
        <selected-icon :selected="selected" />
      </transition>
    </div>

    <client-only>
      <action-info
        :show="selected"
        :action="action"
        @close="selected = false"
      />
    </client-only>
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
  padding: 2% 1%;
  position: relative;

  img {
    width: 100%;
  }
}
.cost {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: -20%;
  left: -20%;
  width: 40%;
  z-index: 1;
}
</style>
