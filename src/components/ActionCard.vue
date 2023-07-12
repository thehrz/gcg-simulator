<script setup lang="ts">
import { IAction } from "~/common/interfaces/IAction"

const props = defineProps<{
  action: IAction
}>()

const [isSelected, toggle] = useToggle()

const { cardID } = props.action

const card = getAction(cardID)
</script>

<template>
  <div class="relative cursor-pointer" @click="toggle()">
    <div class="absolute top--23% left--16% w-35% z-1 font_shadow">
      <cost-icon :cost="cost" v-for="cost in card.cost" />
    </div>
    <div class="cardBoard relative p-3%">
      <img class="w-100%" :src="getCard(cardID)" />

      <transition name="fade">
        <selected-icon :selected="isSelected" />
      </transition>
    </div>

    <action-info :show="isSelected" :action="action" @close="toggle()" />
  </div>
</template>

<style scoped lang="scss">
.cardBoard {
  background: url("/images/icons/card_border.png");
}
</style>
