<script setup lang="ts">
import { FormInstance } from "element-plus"

const form = reactive({
  nickName: "",
  password: "",
  checkPassword: "",
})

const formRef = ref<FormInstance>()

const submit = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async (valid) => {
    if (valid) {
      // const { data, pending, error, refresh } = await useFetch<{
      //   player_nick_name: string
      //   player_uid: string
      // }>("/backend/player", {
      //   method: "POST",
      //   body: {
      //     nick_name: form.nickName,
      //     password: form.password,
      //   },
      // })
    } else {
      // ElMessage.error("请检查信息")
      return false
    }
  })
}

const validatePassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"))
  } else {
    if (form.checkPassword !== "") {
      if (!formRef.value) return
      formRef.value.validateField("checkPassword", () => null)
    }
    callback()
  }
}

const validateCheckPassword = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入再次输入密码"))
  } else if (value !== form.password) {
    callback(new Error("两次输入密码不一致"))
  } else {
    callback()
  }
}

const rules = reactive({
  password: [{ validator: validatePassword, trigger: "blur" }],
  checkPassword: [{ validator: validateCheckPassword, trigger: "blur" }],
})
</script>

<template>
  <nuxt-layout>
    <div class="login">
      <h1>gcg-simulator Demo</h1>

      <el-form
        :model="form"
        :rules="rules"
        status-icon
        ref="formRef"
        label-position="left"
        label-width="120px"
      >
        <el-form-item label="昵称">
          <el-input v-model="form.nickName" />
        </el-form-item>

        <el-form-item label="密码" prop="password">
          <el-input v-model="form.password" />
        </el-form-item>

        <el-form-item label="确认密码" prop="checkPassword">
          <el-input v-model="form.checkPassword" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit(formRef)">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </nuxt-layout>
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
