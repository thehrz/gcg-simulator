<script setup lang="ts">
defineProps<{
  thisRound: boolean | undefined
}>()
</script>

<template>
  <div class="switchRoundButton">
    <nuxt-img class="background" src="/images/icons/switch_round.png" />

    <button v-if="thisRound !== undefined">
      <svg
        viewBox="0 0 124 124"
        :class="{ enable: thisRound, disable: !thisRound }"
      >
        <path
          d="M62.1 124C27.9 124 .1 96.3 0 62.2-.1 27.8 27.8-.1 62.2 0 96.3.1 124 27.9 124 62.1c0 34.1-27.8 61.9-61.9 61.9z"
        />
        <path
          :class="{ enable: thisRound, disable: !thisRound }"
          d="M92.8 98.9c.1 4.4.2 4.5 4.4 7.6-15 16-48.9 19.9-70.4.3 2.2-2.1 5.5-3.5 4.6-8-2.4 1.4-4.8 2.2-7.5 1.6-2.8-.6-4.7-2.6-6.3-4.9-3.6-5.1-3.6-12.1.5-17 2.6-3.1 5.6-5.9 8.6-8.6 1.9-1.7 1.9-3.1.8-5.3-2.6-4.9-5.8-9.2-10-12.7-8.6-7.2-7-11.7-3.3-20.2C17 25.4 21.5 20.1 30 22c1.9.4 2.2-1 2.3-2.4.7-6.3 4.8-9.5 10.1-11.6 12.1-4.8 24.3-5.1 36.7-1 6.2 2.1 10.6 5.7 11.4 12.7.2 1.5.5 2.2 2.5 2.2 11.5-.2 20.1 8.6 19.7 20.2-.1 3.7-2.2 6.7-5 9-4.3 3.6-7.8 7.9-10.6 12.8-1.4 2.5-1.8 4.4.8 6.5 2.5 2 4.8 4.3 6.9 6.7 4.9 5.2 5.5 12.5 1.7 18.2-3.6 5.5-7.4 6.5-13.7 3.6z"
        />
        <path
          :class="{ enable: thisRound, disable: !thisRound }"
          d="M115 82.4c-2.1-4.6-4.7-7.9-6.7-11.4-3.1-5.4-1.5-13.5 2.9-17.8 1.3-1.3 2.7-2.5 4.9-2 2.3.6 1.9 2.5 2.1 4.1 1.5 9 .1 17.7-3.2 27.1zM9.2 82.3c-3.6-10-4.6-19.1-3.1-28.4.5-3.2 3-3.8 6-1.5 5.6 4.4 7 14.2 2.6 20.3-1.9 2.7-3.8 5.5-5.5 9.6z"
        />
      </svg>

      <svg
        class="countDown"
        :class="{ disable: !thisRound }"
        viewBox="0 0 1024 1024"
      >
        <path
          d="M825.6 757.333333h-64v-113.066666c0-19.2-6.4-36.266667-17.066667-51.2l-100.266666-134.4 100.266666-134.4c10.666667-14.933333 17.066667-32 17.066667-51.2V160h64c23.466667 0 42.666667-19.2 42.666667-42.666667s-19.2-42.666667-42.666667-42.666666h-597.333333c-23.466667 0-42.666667 19.2-42.666667 42.666666s19.2 42.666667 42.666667 42.666667h64v113.066667c0 19.2 6.4 36.266667 17.066666 51.2l100.266667 134.4-100.266667 134.4c-10.666667 14.933333-17.066667 32-17.066666 51.2v113.066666h-64c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666667h597.333333c23.466667 0 42.666667-19.2 42.666667-42.666667s-17.066667-42.666667-42.666667-42.666667z m-448 0v-113.066666l100.266667-134.4c23.466667-29.866667 23.466667-72.533333 0-102.4l-100.266667-134.4V160h298.666667v113.066667L576 407.466667c-23.466667 29.866667-23.466667 72.533333 0 102.4l100.266667 134.4v113.066666h-298.666667z"
          p-id="1486"
        ></path>
        <path
          d="M567.466667 612.266667c-8.533333-8.533333-21.333333-12.8-34.133334-12.8h-10.666666c-12.8 0-25.6 4.266667-34.133334 12.8l-64 61.866666c-2.133333 2.133333-4.266667 6.4-4.266666 10.666667V725.333333c0 8.533333 6.4 12.8 12.8 12.8h187.733333c8.533333 0 12.8-6.4 12.8-12.8v-42.666666c0-4.266667-2.133333-6.4-4.266667-10.666667l-61.866666-59.733333z"
          p-id="1487"
        ></path>
      </svg>
    </button>

    <nuxt-img
      class="round_owner"
      src="/images/icons/switch_round_owner.png"
      v-if="thisRound"
    />
    <nuxt-img
      class="round_enemy"
      src="/images/icons/switch_round_enemy.png"
      v-else-if="thisRound !== undefined"
    />
  </div>
</template>

<style scoped>
.switchRoundButton {
  position: relative;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.switchRoundButton > img.background {
  width: 100%;
}

.switchRoundButton svg.enable {
  fill: #af7e29;
}

.switchRoundButton svg.disable:first-child {
  fill: none;
}

.switchRoundButton path.enable {
  fill: #e5af46;
}

.switchRoundButton path.disable {
  fill: none;
}

button {
  position: absolute;
  width: 55%;
  background-color: rgb(0 0 0 / 0%);
  border-color: rgb(0 0 0 / 0%);
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

button > .countDown {
  position: absolute;
  width: 55%;
}

button > .disable {
  fill: #96c1fa;
}

.round_enemy {
  position: absolute;
  width: 80%;
  top: -11%;
}

.round_owner {
  position: absolute;
  width: 80%;
  bottom: -11%;
  transform: rotateX(180deg);
}
</style>
