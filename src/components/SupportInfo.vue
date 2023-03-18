<script setup lang="ts">
import { ISupport } from "~/common/interfaces/ISupport"
import { vOnClickOutside } from "@vueuse/components"

const props = defineProps<{
  show: boolean
  support: ISupport
}>()

const isMounted = ref(false)

const emits = defineEmits(["close"])

function close() {
  emits("close")
}

onMounted(() => {
  isMounted.value = true
})

const card = getAction(props.support.cardID)
</script>

<template>
  <teleport to=".game" v-if="isMounted">
    <transition name="fade">
      <div v-if="show" class="supportInfo">
        <div class="card">
          <div class="cardBoard">
            <img :src="getCard(support.cardID)" />
          </div>
        </div>

        <el-scrollbar>
          <div class="info" v-on-click-outside="close">
            <h1>{{ card.name }}</h1>

            <div class="costs">
              <div v-for="cost in card.cost">
                <cost-icon :cost="cost" />
              </div>
            </div>

            <p v-html="card.desc"></p>
          </div>
        </el-scrollbar>
      </div>
    </transition>
  </teleport>
</template>

<style scoped>
.supportInfo {
  position: absolute;
  top: 8%;
  left: 3%;
  width: 32%;
  height: 80%;
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
  border-radius: 10px;
  display: flex;
  background-color: #2e3741;
  flex-direction: column;
  padding: 2%;
  width: 100%;
  max-height: 100%;
  overflow: auto;
}

.info > h1 {
  font-size: 20px;
  margin-bottom: 1%;
}

.costs {
  margin-bottom: 3%;
}

.costs > div {
  width: 20%;
}
</style>
