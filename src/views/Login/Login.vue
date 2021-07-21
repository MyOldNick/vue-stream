<template>
  <h1 class="text-center text-primary mt-10"> Войти</h1>
  <div class="login__inputs mx-auto mt-10">
    <DefaultInput
      @input="onChange($event, formsData)"
      :value="formsData['email']"
      name="email"
      placeholder="Email"
      class="mt-5 pl-3"
    />
    <DefaultInput
      @input="onChange($event, formsData)"
      :value="formsData['password']"
      name="password"
      type="password"
      placeholder="Пароль"
      class="mt-5 pl-3"
    />
  </div>
  <div class="d-flex justify-center">
    <v-btn @click="login" class="mt-10" color="primary">
       Войти
    </v-btn>
  </div>
  <p>{{formsData ? formsData.login : ''}}</p>
</template>

<script>
//vue
import { reactive } from "vue";
import { useStore } from "vuex";
//components
import DefaultInput from "../../components/Input/Input.vue";
//utils
import onChange from "../../utils/onChange"

export default {
  name: "Login",
  components: {
    DefaultInput,
  },
  setup() {

    const { commit } = useStore()

    const formsData = reactive({});

    const login = () => {

      if(formsData.email.length > 2 && formsData.password.length > 2 ) {

        commit("loginUser", formsData)

      }

    }

    return {
      formsData,
      onChange,
      login
    };
  },
};
</script>

<style lang="scss" scoped>
.login {

  &__inputs {
    max-width: 500px;
  }

}
</style>