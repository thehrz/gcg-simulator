<script setup lang="ts">
import ICharacter from "~~/common/interfaces/ICharacter"

const props = defineProps<{
  character: ICharacter
}>()

const { cardID, hp, energy, state } = props.character

const card = getCharacter(cardID)
</script>

<template>
  <div class="card">
    <div class="elementIcons" v-if="state">
      <ElementIcon v-for="element in state" :element="element" />
    </div>

    <div class="cardBoard">
      <nuxt-img :src="'images/cards/' + cardID + '.png'" />
      <div class="hp font_shadow">{{ hp }}</div>
      <div class="energyIcons">
        <EnergyIcon :is-full="index <= energy" v-for="index in card.energy" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 4%;
}

.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: 100% 100%;
  padding: 2.5% 3%;
  position: relative;
}

.cardBoard > img {
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

.energyIcons {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35%;
  position: absolute;
  flex: 1;
  right: -16%;
  top: 3%;
}

.energyIcons > div {
  width: 100%;
  margin-bottom: -30%;
}

.energyIcons .null {
  padding: 15%;
}

.elementIcons {
  display: flex;
  justify-content: center;
}

.elementIcons > img {
  width: 25%;
}

.fighting {
  margin-top: 10%;
}
</style>
