<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import ICharacter from "~~/common/interfaces/ICharacter"

const props = defineProps<{
  show: boolean
  character: ICharacter
}>()

const emits = defineEmits(["close"])

const contentRef = ref(null)

onClickOutside(contentRef, () => {
  emits("close")
})

const card = getCharacter(props.character.cardID)
</script>

<template>
  <client-only>
    <teleport to=".game">
      <div v-if="show" ref="contentRef" class="characterInfo">
        <div class="card">
          <div class="cardBoard">
            <nuxt-img :src="`images/cards/${character.cardID}.png`" />
          </div>
        </div>

        <div class="info">
          <div v-for="(skill, index) in card.skills">
            <div class="skill">
              <nuxt-img
                :src="`./images/skills/${card.id}/skill_${index + 1}.png`"
              />
              <div>
                <p class="name">{{ skill.name }}</p>
                <div class="costs">
                  <div v-for="cost in skill.cost">
                    <CostIcon :cost="cost" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </teleport>
  </client-only>
</template>

<style scoped>
.characterInfo {
  position: absolute;
  top: 5%;
  left: 2%;
  width: 36%;
  z-index: 10;
  display: flex;
  color: #cad8ea;
  align-items: flex-start;
}

.card {
  width: 40%;
  flex-shrink: 0;
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

.info {
  margin-left: 2%;
  border-radius: 10px;
  display: flex;
  background-color: #2e3741;
  flex-direction: column;
  padding: 1%;
  width: 100%;
}

.info > div{
  margin-bottom: 2%;
}

.skill {
  display: flex;
}

.skill > img {
  width: 25%;
}

.skill > div {
  margin-left: 10px;
  width: 100%;
}

.costs {
  display: flex;
}

.costs > div {
  width: 20%;
}
</style>
