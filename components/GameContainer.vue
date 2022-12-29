<script setup lang="ts">
import Table from "~~/common/enums/Table"
import IPlayer from "~~/common/interfaces/player/IPlayer"
import CharacterCard from "./CharacterCard.vue"

const props = defineProps<{
  table: Table
  owner: IPlayer
  enemy: IPlayer
}>()

const backgroundUrl = computed(() => `url("/images/tables/${props.table}.png")`)
</script>

<template>
  <div class="game background grid">
    <div class="enemy_info"></div>

    <div class="enemy_action_cards"></div>

    <div class="settings"></div>

    <div class="control"></div>

    <div class="enemy_artifact"></div>

    <div class="enemy_cards">
      <CharacterCard
        class="card"
        v-for="character in enemy.characters"
        :character="character"
      />
    </div>

    <div class="enemy_summon"></div>

    <div class="dices">
      <nuxt-img
        v-for="dice in owner.dices"
        :src="'images/icons/' + dice + '.png'"
      />
    </div>

    <div class="owner_artifact"></div>

    <div class="owner_cards">
      <CharacterCard
        class="card"
        v-for="character in owner.characters"
        :character="character"
      />
    </div>

    <div class="owner_summon"></div>

    <div class="owner_info"></div>

    <div class="owner_action_cards"></div>

    <div class="skills"></div>
  </div>
</template>

<style scoped>
.game {
  margin: 0 auto;
}

.background {
  background-image: v-bind("backgroundUrl");
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

.number {
  width: 50%;
}

.card {
  width: 25%;
}

.enemy_info {
  grid-column: 1 / 3;
}

.enemy_action_cards {
  grid-column: 3 / 5;
}

.control {
  grid-row: 2 / 4;
}

.enemy_cards {
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.owner_cards {
  margin: 0 5%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.dices {
  grid-row: -4 / -2;
  grid-column: 5 / 6;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dices img {
  width: 50%;
}

.owner_info {
  grid-column: -6 / -4;
}

.skills {
  grid-column: -3 / -1;
}
</style>
