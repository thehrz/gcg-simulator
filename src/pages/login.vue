<script setup lang="ts">
import { ElMessage, FormInstance } from "element-plus"

const form = reactive({
  player_uid: "",
  password: "",
})

const formRef = ref<FormInstance>()

const submit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      const { data } = await useFetch("/api/player/login")
        .post({
          player_uid: form.player_uid,
          password: form.password,
        })
        .json<{
          player_nick_name: string
          player_uid: string
        }>()

      ElMessage.info(data.value?.player_nick_name)
    } else {
      ElMessage.error("请检查信息")
      return false
    }
  })
}

const rules = reactive({
  player_uid: [{
    required: true,
    message: 'Please input the uid',
    trigger: 'blur',
  },
  { type: 'number', message: 'UID must be a number' },],
  password: [{
    required: true,
    message: 'Please input the password',
    trigger: 'blur',
  }],
})
</script>

<template>
  <div class="login">
    <h1>gcg-simulator Demo</h1>

    <el-form :model="form" :rules="rules" status-icon ref="formRef" label-position="left" label-width="120px">
      <el-form-item label="UID" prop="player_uid">
        <el-input v-model.number="form.player_uid" />
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submit(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped lang="scss">
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: rgba(0, 0, 0, 0.03) 2px solid;
  border-radius: 20px;
  padding: 3%;

  h1 {
    margin-bottom: 5%;
  }
}
</style>
