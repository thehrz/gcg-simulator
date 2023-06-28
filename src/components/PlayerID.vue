<script setup lang="ts">
import { IPlayer } from "~/common/interfaces/IPlayer"

const props = defineProps<{
  player: IPlayer
  type: "enemy" | "owner"
}>()

const borderColor = computed(() => {
  return props.type == "enemy" ? "#dae4f2" : "#f1d09e"
})
</script>

<template>
  <div class="playerid">
    <img class="thisround" :src="`/images/icons/playerid_thisround_${type}.png`" v-if="player.thisRound" />

    <div class="avatar">
      <img :src="`/images/characters/${player.avatar ?? 'traveler'}.png`" />
    </div>

    <img class="id" :src="`/images/icons/playerid_${type}.png`" />
    <a class="name font">{{ player.name }}</a>
  </div>
</template>

<style scoped lang="scss">
.playerid {
  display: flex;
  align-items: center;
  margin: 2%;
  position: relative;

  .thisround {
    position: relative;
    width: 10%;
    left: 2%;
    margin: -5%;
  }

  .avatar {
    position: absolute;
    width: 24%;
    left: 13.6%;
    top: 14.8%;
    border: v-bind(borderColor) 4px solid;
    border-radius: 50%;
    overflow: hidden;
    box-shadow: 0px 0px 3px 0px black;

    >img {
      width: 100%;
      object-fit: cover;
      border-radius: 50%;
      transform: scale(1.15);
    }
  }

  .id {
    width: 100%;
  }

  .name {
    position: absolute;
    top: 6%;
    left: 42.5%;
    height: 0;
    width: 50%;
    padding: 8% 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
}
</style>
