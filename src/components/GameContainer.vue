<script setup lang="ts">
import { Table } from "~/common/enums/Table"
import { ICharacter } from "~/common/interfaces/ICharacter"
import { IPlayer } from "~/common/interfaces/IPlayer"
import CharacterCard from "./CharacterCard.vue"
import DicesNumber from "./DicesNumber.vue"

const props = defineProps<{
  table: Table
  owner: IPlayer
  enemy: IPlayer
  rounds: number
}>()

const gameRef = ref()

const backgroundUrl = computed(() => `url("/images/tables/${props.table}.png")`)

function setGameScale() {
  const { width, height } = useWindowSize()

  const num =
    width.value / height.value < 1920 / 1080
      ? width.value / 1920
      : height.value / 1080

  gameRef.value.style.transform = `scale(${num}) translate(-50%)`
}

onMounted(() => {
  setGameScale()
})

useEventListener(window, "resize", () => {
  setGameScale()
})
</script>

<template>
  <div class="game background grid" ref="gameRef">
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

      <img v-for="dice in owner.dices" :src="'images/icons/' + dice + '.png'" />
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

<style scoped lang="scss">
.game {
  margin: 0 auto;
  overflow: hidden;
  position: relative;

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

    > div {
      height: 80%;
      width: 75%;
    }
  }

  .enemy_cards {
    grid-row: 2 / 5;
    grid-column: 5 / 9;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    > div {
      margin: 4%;
      width: 30%;
    }

    .fighting {
      margin-top: 10%;
    }
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

    > div {
      height: 80%;
      width: 75%;
    }
  }

  .dices {
    grid-row: 2 / 8;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 20%;

    > svg,
    > img {
      width: 50%;
    }

    > svg {
      margin-bottom: 15%;
    }
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

    > div {
      height: 80%;
      width: 75%;
    }
  }

  .owner_cards {
    grid-row: 5 / 8;
    grid-column: 5 / 9;
    display: flex;
    justify-content: center;
    align-items: flex-end;

    > div {
      margin: 4%;
      width: 30%;
    }

    .fighting {
      margin-bottom: 10%;
    }
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

    > div {
      height: 80%;
      width: 75%;
    }
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

    > div {
      width: 15%;
      margin-left: -9%;
    }
  }

  .skills {
    grid-column: 10 / 13;
    grid-row: 8;

    > div {
      bottom: 40%;
      position: relative;
      width: 120%;
      right: 20%;
    }
  }
}

.background {
  background-image: v-bind("backgroundUrl");
  background-size: 150% 150%;
  background-position: center;
  width: 1920px;
  height: 1080px;
  transform-origin: 0 0;
  left: 50%;
  position: absolute;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-template-rows: repeat(8, minmax(0, 1fr));
}
</style>
