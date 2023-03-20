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
      <div v-if="show" ref="contentRef" class="actionInfo">
        <div class="card">
          <div class="cardBoard">
            <img :src="`images/cards/${action.cardID}.png`" />
          </div>
        </div>
        <el-scrollbar>
          <div class="info">
            <h1>{{ card.name }}</h1>

            <p v-html="card.desc"></p>
          </div>
        </el-scrollbar>
      </div>
    </transition>
  </Teleport>
</template>

<style scoped lang="scss">
.actionInfo {
  position: absolute;
  top: 8%;
  left: 3%;
  width: 32%;
  height: 80%;
  z-index: 10;
  display: flex;
  color: #cad8ea;
  align-items: flex-start;

  .card {
    width: 40%;
    flex-shrink: 0;

    > .cardBoard {
      background: url("/images/icons/card_border.png");
      background-size: 100% 100%;
      padding: 2.5% 3%;
      position: relative;

      > img {
        width: 100%;
      }
    }
  }

  > .el-scrollbar {
    margin-left: 1%;
    width: 100%;

    .info {
      border-radius: 10px;
      display: flex;
      background-color: #2e3741;
      flex-direction: column;
      padding: 3%;
      width: 100%;
      max-height: 100%;
      overflow: auto;

      > h1 {
        font-size: 40px;
        margin-bottom: 1%;
      }

      > p {
        font-size: 30px;
      }
    }
  }
}
</style>
