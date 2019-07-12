<!-- <template>
  <header> 
    <v-toolbar row wrap app>
      <v-toolbar-title class="headline text-uppercase">
        <img src alt /> Logo
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Como funciona</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Planos</span>
      </v-btn>
      <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
        <span class="mr-2">Acessar</span>
      </v-btn>
    </v-toolbar>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>-->


<template>
  <div class="text-xs-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-btn class="mx-2" v-on="on" outlined fab color="white">
          <v-icon>list</v-icon>
        </v-btn>
      </template>
      <v-list class="menu_list">
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
          <span class="mr-2">Acessar</span>
        </v-btn>
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
          <span class="mr-2">Como funciona</span>
        </v-btn>
        <v-btn flat href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank">
          <span class="mr-2">Planos</span>
        </v-btn>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {};
</script>

<style>
.menu_list {
  display: flex;
  flex-direction: column;
  align-content: flex-end;
}

.text-xs-center {
  width: 100%;

  height: 90px;
  position: fixed;
  background-image: url("imgs/logo.jpg");
  background-position: initial;
  /* margin-bottom: -20px; */
  display: block;
  text-align: right !important;
}
</style>