<script setup lang="ts">
defineProps<{
  thisRound: boolean
}>()
</script>

<template>
  <div class="switchRoundButton">
    <nuxt-img class="background" src="/images/icons/switch_round.png" />

    <button>
      <svg viewBox="0 0 124 124">
        <path
          d="M62.1 124C27.9 124 .1 96.3 0 62.2-.1 27.8 27.8-.1 62.2 0 96.3.1 124 27.9 124 62.1c0 34.1-27.8 61.9-61.9 61.9z"
        />
        <path
          class="background"
          d="M92.8 98.9c.1 4.4.2 4.5 4.4 7.6-15 16-48.9 19.9-70.4.3 2.2-2.1 5.5-3.5 4.6-8-2.4 1.4-4.8 2.2-7.5 1.6-2.8-.6-4.7-2.6-6.3-4.9-3.6-5.1-3.6-12.1.5-17 2.6-3.1 5.6-5.9 8.6-8.6 1.9-1.7 1.9-3.1.8-5.3-2.6-4.9-5.8-9.2-10-12.7-8.6-7.2-7-11.7-3.3-20.2C17 25.4 21.5 20.1 30 22c1.9.4 2.2-1 2.3-2.4.7-6.3 4.8-9.5 10.1-11.6 12.1-4.8 24.3-5.1 36.7-1 6.2 2.1 10.6 5.7 11.4 12.7.2 1.5.5 2.2 2.5 2.2 11.5-.2 20.1 8.6 19.7 20.2-.1 3.7-2.2 6.7-5 9-4.3 3.6-7.8 7.9-10.6 12.8-1.4 2.5-1.8 4.4.8 6.5 2.5 2 4.8 4.3 6.9 6.7 4.9 5.2 5.5 12.5 1.7 18.2-3.6 5.5-7.4 6.5-13.7 3.6z"
        />
        <path
          class="background"
          d="M115 82.4c-2.1-4.6-4.7-7.9-6.7-11.4-3.1-5.4-1.5-13.5 2.9-17.8 1.3-1.3 2.7-2.5 4.9-2 2.3.6 1.9 2.5 2.1 4.1 1.5 9 .1 17.7-3.2 27.1zM9.2 82.3c-3.6-10-4.6-19.1-3.1-28.4.5-3.2 3-3.8 6-1.5 5.6 4.4 7 14.2 2.6 20.3-1.9 2.7-3.8 5.5-5.5 9.6z"
        />
      </svg>
    </button>

    <nuxt-img
      class="round_owner"
      src="/images/icons/switch_round_owner.png"
      v-if="thisRound"
    />
    <nuxt-img
      class="round_enemy"
      src="/images/icons/switch_round_enemy.png"
      v-else
    />
  </div>
</template>

<style scoped>
.switchRoundButton {
  position: relative;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switchRoundButton > img.background {
  width: 100%;
}

.switchRoundButton svg {
  fill: #af7e29;
}

.switchRoundButton path.background {
  fill: #e5af46;
}

button {
  position: absolute;
  width: 55%;
  background-color: rgb(0 0 0 / 0%);
  border-color: rgb(0 0 0 / 0%);
}

button > img {
  width: 100%;
  border-radius: 50%;
}

.round_enemy {
  position: absolute;
  width: 80%;
  top: -11%;
}

.round_owner {
  position: absolute;
  width: 80%;
  bottom: -11%;
  transform: rotateX(180deg);
}
</style>
