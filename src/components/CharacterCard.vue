<script setup lang="ts">
import { ICharacter } from "~/common/interfaces/ICharacter"

const props = defineProps<{
  character: ICharacter
}>()

const selected = ref(false)

const { cardID, hp, energy, weapon, artifact, talent, state } = props.character

const card = getCharacter(cardID)
</script>

<template>
  <div class="card" @click="selected = true">
    <div class="elementIcons" v-if="state">
      <ElementIcon v-for="element in state" :element="element" />
    </div>

    <div class="cardBoard">
      <img :src="getCard(cardID)" />
      <div class="hp font_shadow">{{ hp }}</div>
      <div class="actionIcons">
        <img :src="getIcon('weapon')" v-if="weapon" />
        <img :src="getIcon('artifact')" v-if="artifact" />
        <img :src="getIcon('talent')" v-if="talent" />
      </div>
      <div class="energyIcons">
        <EnergyIcon :is-full="index <= energy" v-for="index in card.energy" />
      </div>
      <transition name="fade">
        <selected-icon :selected="selected" />
      </transition>
    </div>

    <character-info
      :show="selected"
      :character="character"
      @close="selected = false"
    />
  </div>
</template>

<style scoped lang="scss">
.card {
  margin: 4%;

  .elementIcons {
    display: flex;
    justify-content: center;

    > img {
      width: 25%;
    }
  }

  .cardBoard {
    background: url("/images/icons/card_border.png");
    background-size: 100% 100%;
    padding: 3%;
    position: relative;
    cursor: pointer;

    > img:first-child {
      width: 100%;
    }

    .hp {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20.5% 0;
      height: 0;
      width: 34%;
      background-image: url("/images/icons/hp.png");
      background-size: 100% 100%;
      position: absolute;
      top: -8%;
      left: -12%;
    }

    .actionIcons {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      width: 28%;
      left: -9%;
      top: 20%;

      > img {
        width: 100%;
      }
    }

    .energyIcons {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 35%;
      position: absolute;
      right: -16%;
      top: 3%;

      > div {
        width: 100%;
        margin-bottom: -30%;
      }

      .null {
        padding: 15%;
      }
    }
  }
}
</style>
