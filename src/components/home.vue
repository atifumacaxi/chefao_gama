<template>
  <div id="home">
    <!-- Aqui vamos configurar a tela inicial -->
    <!-- Esse componente só será renderizado em '/' -->
    <h1>DESLANCHE EM SUA CARREIRA!</h1>
    <h2>receba dicas e orientações de Profissionais experientes em sua área</h2>
    <!-- <router-link to="/cadastro" tag="span">teste</router-link> -->
    <v-btn class="btn" flat to="/cadastro">COMEÇAR AGORA</v-btn>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>


<style scoped>
#home {
  flex-direction: column;

  width: 100%;
  height: auto;
  background-image: url("imgs/bg-min.png");
  /* background-size: cover; */
  background-repeat: no-repeat;

}

h1, h2 {
  color: white;
  font-variant-caps: all-petite-caps;
}

h1 {
  font-size: 20px;
}
  
</style>
