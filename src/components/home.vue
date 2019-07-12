<template>
  <div id="home">
    <!-- Aqui vamos configurar a tela inicial -->
    <!-- Esse componente só será renderizado em '/' -->
    <h1>deslanche em sua carreira!</h1>
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
  height: 700px;
  justify-content: space-evenly;
  background-image: url("imgs/bg-min.png");
  background-position: center;
  background-repeat: no-repeat;
  padding: 150px 10px;
  /* mesma margin do layou */
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
  font-variant-caps: all-petite-caps;
}

.btn {
  font-family: lato;
  color: white;
  background-color: #d9471a;
}

@media (min-width: 768px) {
  #home {
    width: 2100px !important;
    justify-content: center;
    color: white;
    background-image: url("imgs/bg_desktop.jpg");
    background-position: initial;
    background-size: cover;
    height: 800px;
  }
  h1 {
    width: 600px;
    font-weight: 700 !important;
  }

  .btn {
    font-family: arial;
    padding: 15px 40px;
    font-weight: 100 !important;
    font-size: 30px;
  }
}
</style>
