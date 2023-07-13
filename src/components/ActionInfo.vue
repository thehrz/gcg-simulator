<script setup lang="ts">
import { onClickOutside } from "@vueuse/core"
import { IAction } from "~/common/interfaces/IAction"

const props = defineProps<{
  show: boolean
  action: IAction
}>()

const isMounted = ref(false)

const emits = defineEmits(["close"])

const contentRef = ref(null)

onClickOutside(contentRef, () => {
  emits("close")
})

onMounted(() => {
  isMounted.value = true
})

const card = getAction(props.action.cardID)
</script>

<template>
  <Teleport to=".game" v-if="isMounted">
    <transition name="fade">
      <div v-if="show" ref="contentRef" class="actionInfo flex absolute top-8% left-3% w-32% h-80% c-#cad8ea">
        <div class="card w-40% flex-shrink-0">
          <div class="bg-fill cardBoard p-3% relative">
            <img class="w-100%" :src="`images/cards/${action.cardID}.png`" />
          </div>
        </div>
        <el-scrollbar class="ml-1%">
          <div class="info rd-10px flex bg-#2e3741 flex-col p-3% overflow-auto">
            <h1 class="text-40px mb-1px">{{ card.name }}</h1>

            <p class="text-30px" v-html="card.desc"></p>
          </div>
        </el-scrollbar>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="scss">
.cardBoard {
  background-image: url("/images/icons/card_border.png");
}
</style>
