<template>
  <v-app>
    <Header />
    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
// import Home from "./components/home";

export default {
  name: "App",
  components: {
    Header
    // Home
  },
  data() {
    return {
      //
    };
  }
};
</script>
