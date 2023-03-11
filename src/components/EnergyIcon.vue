<script setup lang="ts">
defineProps<{
  isFull: boolean
}>()
</script>

<template>
  <div class="energyIcon" :class="{ null: !isFull }">
    <img :src="getIcon('energy_full')" v-if="isFull" />
    <img :src="getIcon('energy_card')" v-else />
  </div>
</template>

<style scoped>
.energyIcon > img {
  width: 100%;
}
</style>
