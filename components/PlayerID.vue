<script setup lang="ts">
import IPlayer from "~~/common/interfaces/IPlayer"

defineProps<{
  player: IPlayer
  type: "enemy" | "owner"
}>()
</script>

<template>
  <div class="playerid">
    <nuxt-img
      class="thisround"
      :src="'images/icons/playerid_thisround_' + type + '.png'"
      v-if="player.thisRound"
    />
    <nuxt-img class="id" :src="'images/icons/playerid_' + type + '.png'" />
  </div>
</template>

<style scoped>
.playerid {
  display: flex;
  align-items: center;
  margin: 2%;
}
.id {
  width: 50%;
}
.thisround {
  position: relative;
  width: 10%;
  left: 2%;
  margin: -5%;
}
</style>
