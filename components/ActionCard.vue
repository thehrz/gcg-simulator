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
      <nuxt-img :src="`images/cards/${cardID}.png`" />

      <transition name="fade">
        <nuxt-img
          v-if="selected"
          class="selectd"
          src="images/icons/card_select.png"
        />
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
  position: relative;
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
  z-index: 1;
}

.selectd {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
}
</style>
