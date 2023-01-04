<script setup lang="ts">
import ICharacter from "~~/common/interfaces/ICharacter"

defineProps<{
  character: ICharacter
}>()
</script>

<template>
  <div class="card">
    <div class="hp">{{ character.hp }}</div>
    <div class="cardBoard">
      <nuxt-img :src="'images/cards/' + character.card.id + '.png'" />
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 4%;
  position: relative;
}
.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: 100% 100%;
  padding: 2.5% 3%;
}
.hp {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 21% 0;
  height: 0;
  width: 34%;
  background-image: url("/images/icons/hp.png");
  background-size: 100% 100%;
  position: absolute;
  top: -8%;
  left: -12%;
  font-family: "HYWenHei";
  color: white;
  text-shadow: -1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c,
    1px 1px 1px #673b2c;
}
.cardBoard > img {
  width: 100%;
}

.fighting {
  margin-top: 10%;
}
</style>
