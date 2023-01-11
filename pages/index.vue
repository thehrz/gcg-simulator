<template>
  <client-only>
    <el-menu mode="horizontal" :ellipsis="false" router>
      <div class="flex-grow" />
      <el-menu-item index="/cards">卡牌</el-menu-item>
      <el-menu-item index="/cardgroup">卡组</el-menu-item>
      <el-menu-item index="/game">开始游戏</el-menu-item>
    </el-menu>

    <main>
      <h1>gcg-simulator</h1>
      <p>开源的七圣召唤模拟器</p>
    </main>
  </client-only>
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
