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
    <a class="name font">{{ player.name }}</a>
  </div>
</template>

<style scoped>
.playerid {
  display: flex;
  align-items: center;
  margin: 2%;
  position: relative;
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

.name {
  position: absolute;
  top: 8%;
  left: 21%;
  height: 0;
  width: 25%;
  padding: 4% 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
