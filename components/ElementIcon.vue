<script setup lang="ts">
import Element from '~~/common/enums/Element';

defineProps<{
  element: Element
}>()
</script>

<template>
  <nuxt-img :src="`/images/icons/elements/${element}.png`" />
</template>