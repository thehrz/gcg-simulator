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
    <div class="count" v-if="support.count">
      {{ support.count }}
    </div>
    <div class="time" v-else-if="support.time">
      {{ support.time }}
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

.supportCard > div:nth-child(2) {
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
  font-family: "HYWenHei";
  color: white;
  text-shadow: -1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c,
    1px 1px 1px #673b2c;
}

.count {
  background-image: url("/images/icons/counter.png");
}

.time {
  background-image: url("/images/icons/time.png");
}

img {
  width: 100%;
}
</style>
