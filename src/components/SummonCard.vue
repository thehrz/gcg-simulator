<script setup lang="ts">
import { ISummon } from "~/common/interfaces/ISummon"

defineProps<{
  summon: ISummon
}>()

const selected = ref(false)
</script>

<template>
  <div class="summonCard" @click="selected = true">
    <div>
      <img :src="getCard(summon.cardID)" />
    </div>
    <div class="time font_shadow" v-if="summon.time">
      {{ summon.time }}
    </div>

    <transition name="fade">
      <selected-icon :selected="selected" />
    </transition>

    <summon-info :show="selected" :summon="summon" @close="selected = false" />
  </div>
</template>

<style scoped lang="scss">
.summonCard {
  position: relative;
  background-image: url("/images/icons/card_border_small.png");
  background-size: 100% 100%;
  padding: 2%;
  cursor: pointer;

  img {
    width: 100%;
  }

  >div:first-child {
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    border-radius: 10%;
  }

  >.time {
    position: absolute;
    top: -12%;
    right: -16%;
    display: flex;
    background-size: 100% 100%;
    padding: 20%;
    width: 40%;
    height: 0;
    align-items: center;
    justify-content: center;
    background-image: url("/images/icons/time.png");
  }
}
</style>
