<template>
  <div id="home">
    <!-- Aqui vamos configurar a tela inicial -->
    <!-- Esse componente só será renderizado em '/' -->
    <h1>Deslanche em sua carreira</h1>
    <!-- <router-link to="/cadastro" tag="span">teste</router-link> -->
    <v-btn flat to="/cadastro">COMEÇAR AGORA</v-btn>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>


<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #000;
}
</style>
