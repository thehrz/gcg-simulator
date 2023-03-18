<script setup lang="ts">
defineProps<{ num: number }>()
</script>

<template>
  <svg viewBox="0 0 110 110">
    <g>
      <circle
        cx="55"
        cy="55"
        r="50"
        fill="none"
        stroke="#d3b879"
        stroke-width="5"
      />
      <text
        x="55"
        y="75"
        text-anchor="middle"
        fill="white"
        class="font"
        style="font-size: 60px;"
      >
        {{ num }}
      </text>
    </g>
  </svg>
</template>
