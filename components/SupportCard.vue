<script setup lang="ts">
import ISupport from "~~/common/interfaces/ISupport"

defineProps<{
  support: ISupport
}>()
</script>

<template>
  <div class="supportCard">
    <div>
      <nuxt-img :src="`/images/cards/${support.cardID}.png`" />
    </div>
    <div class="count font_shadow" v-if="support.count">
      {{ support.count }}
    </div>
    <div class="time font_shadow" v-if="support.time">
      {{ support.time }}
    </div>
    <div class="heal font_shadow" v-if="support.heal">
      {{ support.heal }}
    </div>
  </div>
</template>

<style scoped>
.supportCard {
  position: relative;
}

.supportCard > div:first-child {
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  border: 2px solid #6c7364;
  border-radius: 15%;
}

.count,
.time,
.heal {
  position: absolute;
  display: flex;
  background-size: 100% 100%;
  padding: 20%;
  width: 40%;
  height: 0;
  align-items: center;
  justify-content: center;
}

.count,
.time {
  top: -12%;
  right: -16%;
}

.count {
  background-image: url("/images/icons/counter.png");
}

.time {
  background-image: url("/images/icons/time.png");
}

.heal {
  bottom: -12%;
  left: -16%;
  background-image: url("/images/icons/heal.png");
}

img {
  width: 100%;
}
</style>
