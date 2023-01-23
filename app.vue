<template>
  <NuxtPage />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--el-font-family);
}

img,
svg {
  vertical-align: top;
}

a {
  text-decoration: none;
}

@font-face {
  font-family: "HYWenHei-85W";
  src: url("/fonts/HYWenHei-85W.ttf") format("truetype");
}

.font {
  color: white;
  font-family: "HYWenHei-85W";
}

.font_shadow {
  font-family: "HYWenHei-85W";
  color: white;
  text-shadow: -1px -1px 1px #000, 1px -1px 1px #673b2c, -1px 1px 1px #673b2c,
    1px 1px 1px #673b2c;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
