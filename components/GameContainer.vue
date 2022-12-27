<script setup lang="ts">
import Player from "~~/common/interfaces/player/Player"
import CharacterCard from "./CharacterCard.vue"

defineProps<{
  current: Player
  opponent: Player
}>()
</script>

<template>
  <div class="game background grid">
    <div class="opponent_info"></div>

    <div class="opponent_action_cards"></div>

    <div class="settings"></div>

    <div class="control"></div>

    <div class="opponent_artifact"></div>

    <div class="opponent_cards">
      <CharacterCard
        class="card"
        v-for="card in opponent.characterCards"
        :card="card"
        :hp="10"
        :energy="0"
      />
    </div>

    <div class="opponent_summon"></div>

    <div class="dices"></div>

    <div class="current_artifact"></div>

    <div class="current_cards">
      <CharacterCard
        class="card"
        v-for="card in current.characterCards"
        :card="card"
        :hp="10"
        :energy="0"
      />
    </div>

    <div class="current_summon"></div>

    <div class="current_info"></div>

    <div class="current_action_cards"></div>

    <div class="skills"></div>
  </div>
</template>

<style scoped>
.game {
  margin: 0 auto;
}

.background {
  background-image: url("/tables/default.png");
  background-size: 150% 150%;
  background-position: center;
  height: min(100vh, 100vw * 9 / 16);
  width: min(100vh * 16 / 9, 100vw);
}

.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 4fr 2fr 1fr;
  grid-template-rows: 1fr 38% 38% 1fr;
}

.card {
  width: 30%;
}

.opponent_info {
  grid-column: 1 / 3;
}

.opponent_action_cards {
  grid-column: 3 / 5;
}

.control {
  grid-row: 2 / 4;
}

.opponent_cards {
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.current_cards {
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.dices {
  grid-row: -4 / -2;
  grid-column: 5 / 6;
}

.current_info {
  grid-column: -6 / -4;
}

.skills {
  grid-column: -3 / -1;
}

.player {
  height: 50%;
  margin: 0px 11.5%;
  background: red;
}
</style>
