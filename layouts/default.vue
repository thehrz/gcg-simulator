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
  <client-only>
    <el-menu
      mode="horizontal"
      :ellipsis="false"
      :default-active="$route.path"
      router
    >
      <nuxt-link to="/">
        <el-menu-item index="/">主页</el-menu-item>
      </nuxt-link>

      <div class="flex-grow" />

      <nuxt-link :to="page.path" v-for="page in pages">
        <el-menu-item :index="page.path">{{ page.name }}</el-menu-item>
      </nuxt-link>
    </el-menu>
  </client-only>

  <slot />
</template>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
