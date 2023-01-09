<script setup lang="ts">
defineProps<{
  thisRound: boolean
}>()
</script>

<template>
  <button class="switchRoundButton">
    <nuxt-img class="background" src="/images/icons/switch_round.png" />
    <nuxt-img class="icon" src="/images/icons/switch_round_icon.png" />

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
  </button>
</template>

<style scoped>
.switchRoundButton {
  position: relative;
  width: 96%;
  background-color: rgb(0 0 0 / 0%);
  border-color: rgb(0 0 0 / 0%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.switchRoundButton > .background {
  width: 100%;
}

.switchRoundButton > .icon {
  position: absolute;
  width: 30%;
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
