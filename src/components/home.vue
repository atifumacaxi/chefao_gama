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
@media (max-width: 500px) {
  #home {
    padding-right: 10px;
    padding-left: 10px;
    flex-direction: column;
    width: 100%;
    /*height: 600px;*/
    justify-content: space-evenly;
    background-image: url("imgs/bg-min.png");
    background-position: center;
    background-repeat: no-repeat;
  }
  h1,
  h2 {
    color: white;
    font-variant-caps: all-petite-caps;
  }
  h1 {
    font-family: lato;
    font-weight: 500;
    font-size: 3em;
    text-shadow: #999999 1px 1px 4px;
  }
  h2 {
    font-size: 1.3em;
  }

  .btn {
    font-family: lato;
    color: white;
    background-color: #d9471a;
  }
}
</style>
