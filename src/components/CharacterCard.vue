<script setup lang="ts">
import ICharacter from "~/common/interfaces/ICharacter"

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
      <img :src="`/images/cards/${cardID}.png`" />
      <div class="hp font_shadow">{{ hp }}</div>
      <div class="actionIcons">
        <img src="/images/icons/weapon.png" v-if="weapon" />
        <img src="/images/icons/artifact.png" v-if="artifact" />
        <img src="/images/icons/talent.png" v-if="talent" />
      </div>
      <div class="energyIcons">
        <EnergyIcon :is-full="index <= energy" v-for="index in card.energy" />
      </div>
      <transition name="fade">
        <selected-icon :selected="selected" />
      </transition>
    </div>
    <client-only>
      <character-info
        :show="selected"
        :character="character"
        @close="selected = false"
      />
    </client-only>
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
  cursor: pointer;
}

.cardBoard > img:first-child {
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
}

.actionIcons > img {
  width: 100%;
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
