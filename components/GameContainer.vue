<script setup lang="ts">
import Table from "~~/common/enums/Table"
import ICharacter from "~~/common/interfaces/ICharacter"
import IPlayer from "~~/common/interfaces/IPlayer"
import CharacterCard from "./CharacterCard.vue"
import DicesNumber from "./DicesNumber.vue"

const props = defineProps<{
  table: Table
  owner: IPlayer
  enemy: IPlayer
  rounds: number
}>()

const backgroundUrl = computed(() => `url("/images/tables/${props.table}.png")`)
</script>

<template>
  <div class="game background grid">
    <div class="enemy_id">
      <PlayerID :player="enemy" type="enemy" />
    </div>

    <div class="enemy_action_cards"></div>

    <div class="settings"></div>

    <div class="control"></div>

    <div class="enemy_support">
      <SupportCard :support="support" v-for="support in enemy.support" />
    </div>

    <div class="enemy_cards">
      <CharacterCard
        class="card"
        :class="{ fighting: character.isFighting }"
        v-for="character in enemy.characters"
        :character="character"
      />
    </div>

    <div class="enemy_summon">
      <SummonCard :summon="summon" v-for="summon in enemy.summons" />
    </div>

    <div class="dices">
      <DicesNumber :num="owner.dices.length" />

      <nuxt-img
        v-for="dice in owner.dices"
        :src="'images/icons/' + dice + '.png'"
      />
    </div>

    <div class="owner_support">
      <SupportCard :support="support" v-for="support in owner.support" />
    </div>

    <div class="owner_cards">
      <CharacterCard
        class="card"
        :class="{ fighting: character.isFighting }"
        v-for="character in owner.characters"
        :character="character"
      />
    </div>

    <div class="owner_summon">
      <SummonCard :summon="summon" v-for="summon in owner.summons" />
    </div>

    <div class="owner_id">
      <PlayerID :player="owner" type="owner" />
    </div>

    <div class="owner_action_cards">
      <ActionCard
        class="card"
        v-for="action in owner.actions"
        :action="action"
      />
    </div>

    <div class="skills">
      <Skill
        :character="owner.characters.find((value: ICharacter) => value.isFighting)!!"
        :disable="!owner.thisRound"
      />
    </div>
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
  grid-template-rows: 12% 38% 38% 12%;
}

.number {
  width: 50%;
}

.enemy_cards .fighting {
  margin-top: 10%;
}

.owner_cards .fighting {
  margin-bottom: 10%;
}

.card {
  width: 25%;
}

.enemy_id {
  grid-column: 1 / 3;
}

.enemy_support,
.owner_support,
.enemy_summon,
.owner_summon {
  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.enemy_support > div,
.owner_support > div,
.enemy_summon > div,
.owner_summon > div {
  width: 70%;
  height: 75%;
}

.enemy_action_cards {
  grid-column: 3 / 5;
}

.owner_action_cards {
  display: flex;
  justify-content: center;
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
  align-items: flex-end;
  margin-right: 20%;
}

.dices > svg,
.dices > img {
  width: 50%;
}

.dices svg {
  margin-bottom: 15%;
}

.owner_id {
  grid-column: -6 / -4;
}

.skills {
  grid-column: -3 / -1;
}
</style>
