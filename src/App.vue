<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
//components
import Header from "./components/Header/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>


<style lang="scss" scoped>
* {
  overflow: auto;
}
</style>
