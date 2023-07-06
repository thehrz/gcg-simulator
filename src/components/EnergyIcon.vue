<script setup lang="ts">
defineProps<{
  isFull: boolean
}>()
</script>

<template>
  <div class="energyIcon" :class="{ null: !isFull }">
    <img class="w-100%" :src="getIcon('energy_full')" v-if="isFull" />
    <img class="w-100%" :src="getIcon('energy_card')" v-else />
  </div>
</template>
