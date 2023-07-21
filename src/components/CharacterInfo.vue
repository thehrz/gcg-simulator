<script setup lang="ts">
import { ICharacter } from "~/common/interfaces/ICharacter"
import { vOnClickOutside } from "@vueuse/components"

const props = defineProps<{
  show: boolean
  character: ICharacter
}>()

const isMounted = ref(false)

const emits = defineEmits(["close"])

function close() {
  emits("close")
}

onMounted(() => {
  isMounted.value = true
})

const card = getCharacter(props.character.cardID)
</script>

<template>
  <teleport to=".game" v-if="isMounted">
    <transition name="fade">
      <div v-if="show" class="absolute top-8% left-3% w-27% h-80% flex c-#cad8ea">
        <div class="w-40% flex-shrink-0">
          <div class="cardBoard bg-fill p-3% relative">
            <img class="w-100%" :src="getCard(character.cardID)" />
          </div>
        </div>

        <el-scrollbar class="ml-1% w-100%">
          <div class="rd-10px bg-#2e3741 p-3%" v-on-click-outside="close">
            <h1 class="text-40px mb-1%">{{ card.name }}</h1>

            <div class="mb-3%">
              <element-icon class="w-15%" :element="card.element" />
            </div>

            <skill-info :character-name="card.id" :skill="skill" :index="index + 1"
              v-for="(skill, index) in card.skills" />
          </div>
        </el-scrollbar>
      </div>
    </transition>
  </teleport>
</template>

<style scoped lang="scss">
.cardBoard {
  background-image: url("/images/icons/card_border.png");
}
</style>
