<script setup lang="ts">
defineProps<{
  isFull: boolean
}>()
</script>

<template>
  <div class="energyIcon" :class="{ null: !isFull }">
    <!-- <img src="/images/icons/energy_full.png" v-if="isFull" />
    <img src="/images/icons/energy_card.png" v-else /> -->
  </div>
</template>

<style scoped>
.energyIcon > img {
  width: 100%;
}
</style>
