<script setup lang="ts">
import { Cost } from "~/common/interfaces/Cost"

const props = defineProps<{
  cost: Cost
}>()

const iconUrl = computed(() => `url("${getIcon(props.cost.type)}")`)
</script>

<template>
  <div class="icon h-0 py-50% flex items-center justify-center bg-fill font_shadow">
    {{ cost.count }}
  </div>
</template>

<style scoped>
.icon {
  background-image: v-bind(iconUrl);
}
</style>
