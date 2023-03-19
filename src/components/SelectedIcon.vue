<script setup lang="ts">
defineProps<{
  selected: boolean
}>()
</script>

<template>
  <div class="selected">
    <img v-if="selected" :src="getIcon('card_select')" />
  </div>
</template>

<style scoped>
.selected {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
}

.selected > img {
  width: 100%;
  animation: rotate 20s linear infinite;
}
</style>
