<script lang="ts">
export default {
  data() {
    return {
      pages: [
        {
          name: "卡牌",
          path: "/cards",
        },
        {
          name: "卡组",
          path: "/cardgroup",
        },
        {
          name: "开始游戏",
          path: "/game",
        },
      ],
    }
  },
}
</script>

<template>
  <el-menu
    mode="horizontal"
    :ellipsis="false"
    :default-active="$route.path"
    router
  >
    <router-link to="/">
      <el-menu-item index="/">主页</el-menu-item>
    </router-link>

    <div class="flex-grow" />

    <router-link :to="page.path" v-for="page in pages">
      <el-menu-item :index="page.path">{{ page.name }}</el-menu-item>
    </router-link>
  </el-menu>

  <router-view />
</template>
