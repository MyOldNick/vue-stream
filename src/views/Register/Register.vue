<template>
    <h1 class="text-center text-primary mt-10">Создать аккаунт</h1>
    <div class="register__inputs mx-auto mt-10">
        <DefaultInput @input="onChange($event, formsData)" :value="formsData['login']" name="login" placeholder="Логин" class="pl-3"/>
        <DefaultInput @input="onChange($event, formsData)" :value="formsData['email']" name="email" placeholder="Email" class="mt-5 pl-3"/>
        <DefaultInput @input="onChange($event, formsData)" :value="formsData['password']" name="password" type="password" placeholder="Пароль" class="mt-5 pl-3"/>
        <DefaultInput @input="onChange($event, formsData)" :value="formsData['repeatPassword']" name="repeatPassword" type="password" placeholder="Повторить пароль" class="mt-5 pl-3"/>
    </div>
    <div class="d-flex justify-center">
        <v-btn @click="createUser" class="mt-10" color="primary">Создать аккаунт</v-btn>
    </div>
</template>

<script>
//vue
import { reactive } from "vue";
import { useStore } from "vuex";
//components
import DefaultInput from "../../components/Input/Input.vue"
//utils
import onChange from "../../utils/onChange"

export default {
    name: "Register",
    components: {
        DefaultInput
    },
    setup() {

        const { commit } = useStore()

        const formsData = reactive({})

        const createUser = () => {
            
            if(Object.keys(formsData).length >= 4 ) {
                commit('loginUser', formsData)
            }

        }
        

        return {
            formsData,
            onChange,
            createUser
        }
    }
}
</script>

<style lang="scss" scoped>
.register {
    &__inputs {
        max-width: 500px;
    }
}

</style>