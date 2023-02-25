<script setup lang="ts">
import Table from "~/common/enums/Table"
import ICharacter from "~/common/interfaces/ICharacter"
import IPlayer from "~/common/interfaces/IPlayer"
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

    <div class="control">
      <SwitchRoundButton :this-round="owner.thisRound" />
    </div>

    <div class="enemy_support">
      <SupportCard :support="support" v-for="support in enemy.support" />
    </div>

    <div class="enemy_cards">
      <CharacterCard
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

      <img
        v-for="dice in owner.dices"
        :src="'images/icons/' + dice + '.png'"
      />
    </div>

    <div class="owner_support">
      <SupportCard :support="support" v-for="support in owner.support" />
    </div>

    <div class="owner_cards">
      <CharacterCard
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
      <ActionCard v-for="action in owner.actions" :action="action" />
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
  overflow: hidden;
  position: relative;
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
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(8, minmax(0, 1fr));
}

.enemy_id {
  grid-column: 1 / 3;
}

.enemy_action_cards {
  grid-column: 3 / 11;
}

.settings {
  grid-column: 11 / 1;
}

.control {
  grid-row: 2 / 8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.enemy_support {
  grid-row: 2 / 5;
  grid-column: 2 / 5;
  display: grid;
  margin: 0 10%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.enemy_support > div {
  height: 80%;
  width: 75%;
}

.enemy_cards {
  grid-row: 2 / 5;
  grid-column: 5 / 9;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.enemy_cards > div {
  margin: 4%;
  width: 30%;
}

.enemy_cards .fighting {
  margin-top: 10%;
}

.enemy_summon {
  grid-row: 2 / 5;
  grid-column: 9 / 12;
  display: grid;
  margin: 0 10%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.enemy_summon > div {
  height: 80%;
  width: 75%;
}

.dices {
  grid-row: 2 / 8;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20%;
}

.dices > svg,
.dices > img {
  width: 50%;
}

.dices > svg {
  margin-bottom: 15%;
}

.owner_support {
  grid-row: 5 / 8;
  grid-column: 2 / 5;
  display: grid;
  margin: 0 10%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.owner_support > div {
  height: 80%;
  width: 75%;
}

.owner_cards {
  grid-row: 5 / 8;
  grid-column: 5 / 9;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}

.owner_cards > div {
  margin: 4%;
  width: 30%;
}

.owner_cards .fighting {
  margin-bottom: 10%;
}

.owner_summon {
  grid-row: 5 / 8;
  grid-column: 9 / 12;
  display: grid;
  margin: 0 10%;
  grid-template-rows: 50% 50%;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
}

.owner_summon > div {
  height: 80%;
  width: 75%;
}

.owner_id {
  grid-column: 1 / 3;
  grid-row: 8;
}

.owner_action_cards {
  grid-column: 3 / 11;
  grid-row: 8;
  display: flex;
  justify-content: center;
}

.owner_action_cards > div {
  width: 15%;
  margin-left: -9%;
}

.skills {
  grid-column: 10 / 13;
  grid-row: 8;
}

.skills > div {
  bottom: 40%;
  position: relative;
  width: 120%;
  right: 20%;
}
</style>
