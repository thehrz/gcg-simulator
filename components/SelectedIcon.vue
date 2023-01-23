<script setup lang="ts">
defineProps<{
  selected: boolean
}>()
</script>

<template>
  <div class="selected">
    <img v-if="selected" src="/images/icons/card_select.png" />
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
  animation: rotate 6s linear infinite;
}
</style>
