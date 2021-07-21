<template>
  <v-app-bar class="d-flex">
    <v-app-bar-title @click="goToHome" class="header__title">STREAMS</v-app-bar-title>
    <v-spacer></v-spacer>
    <div class="d-flex">
      <v-btn @click="goToLogin" color="primary mr-5">Войти</v-btn>
      <v-btn @click="goToRegister" color="primary mr-5">Создать аккаунт</v-btn>
    </div>
  </v-app-bar>
</template>

<script>
//vue
import { useRouter } from "vue-router";

export default {
  name: "Header",
  setup() {

    //router
    const router = useRouter();

    //methods
    const goToHome = () => router.push("/", () => {})
    const goToRegister = () => router.push('/register', () => {})
    const goToLogin = () => router.push('/login', () => {})

    return {
        goToHome,
        goToRegister,
        goToLogin
    }
  },
};
</script>

<style lang="scss" scoped>

.header {
    &__title {
        cursor: pointer;
        user-select: none;
    }
}
</style>