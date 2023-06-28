<script setup lang="ts">
const props = defineProps<{
  isCharacter: boolean
  id: string
}>()

const card = getCharacter(props.id)

const [isDetailVisible, toggle] = useToggle()
</script>

<template>
  <div @click="toggle()">
    <div class="cardBoard">
      <img :src="getCard(id)" />
      <div class="hp font_shadow" v-if="isCharacter">{{ card.hp }}</div>
      <div class="energyIcons">
        <EnergyIcon :is-full="true" v-for="_ in card.energy" />
      </div>
    </div>

    <el-dialog :title="card.name" v-model="isDetailVisible">
      <el-card class="card" v-for="(skill, index) in card.skills">
        <div class="skill">
          <img :src="getSkill(card.id, index + 1)" />
          <div>
            <p>{{ skill.name }}</p>
            <p v-html="skill.desc"></p>
          </div>
        </div>
      </el-card>
    </el-dialog>
  </div>
</template>

<style scoped lang="scss">
.cardBoard {
  background: url("/images/icons/card_border.png");
  background-size: 100% 100%;
  padding: 2.5% 3%;
  position: relative;

  img {
    width: 100%;
  }
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
  font-size: 23px;
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

  div {
    width: 100%;
    margin-bottom: -30%;
  }
}

.card {
  --el-card-padding: 10px;
  margin-bottom: 3%;
  background: #909399;
  color: white;

  img {
    width: 65px;
  }
}

.skill {
  display: flex;

  div {
    margin-left: 10px;
  }
}
</style>
