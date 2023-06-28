<script setup lang="ts">
import { Cost } from "~/common/interfaces/Cost"
import { ISkill, Type } from "~/common/interfaces/ISkill"

defineProps<{
  id: number
  name: string
  skill: ISkill
  costs?: Cost[]
  disable: boolean
}>()
</script>

<template>
  <div class="skillButton">
    <div :class="{ burst: skill.type == Type.ElementalBurst }">
      <button :class="{ disable: disable, burst: skill.type == Type.ElementalBurst }">
        <img :src="getSkill(name, id)" />
      </button>
    </div>

    <div class="costs" :class="{ disable: disable }">
      <div v-for="cost in costs">
        <CostIcon :cost="cost" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skillButton {
  width: 20%;
  margin: 0 1%;

  .burst {
    background-image: url("/images/icons/skill_background_burst.png");
    background-size: 110%;
    background-position: center;
    background-repeat: no-repeat;
  }

  button {
    display: block;
    width: 100%;
    background-image: url("/images/icons/skill_background.png");
    background-size: 120%;
    background-position: center;
    border-radius: 50%;
    border: 5px solid #544e3b;
    margin: 0 1%;
    cursor: pointer;

    &:hover {
      border: 5px solid #ccb15a;
    }

    &:active {
      border: 5px solid #888476;
    }

    >img {
      width: 100%;
    }
  }
}

.costs {
  display: flex;
  flex-direction: row;
  justify-content: center;

  >div {
    width: 50%;
  }
}

.disable {
  pointer-events: none;
  opacity: 70%;
}
</style>
