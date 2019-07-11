<template>
  <v-container fluid>
    <!-- card de cadastro -->
    <v-layout class="layout-slides card" v-show="success === true">
      <h2>CADASTRO REALIZADO COM SUCESSO!</h2>
      <p>Fique atento ao seu e-mail. Em até 30 minutos você receberá detalhes da sua mentoria.</p>
      <v-btn class="btn lar" @click="nextSlide">Ok</v-btn>
    </v-layout>
    <!-- notificação de sugestão de mentor -->
    <v-layout class="layout-slides" v-show="suggestion === true">
      <img src alt="Fogos de artificio para comemoração" />
      <h2>Encontramos o mentor ideal para você!</h2>
      <v-btn class="btn lar" @click="searchMentor">VER AGORA!</v-btn>
    </v-layout>
    <!-- mentor -->
    <v-layout class="layout-slides" v-show="mentorSuggestion === true">
      <div>
        <img :src="mentor.photo" :alt="`mentor sugerido: ${mentor.name}`" />
        <div>
          <h3>{{ mentor.name}}</h3>
          <h4>{{ mentor.cargo}}</h4>
        </div>
        <div>
          <h4>Experiências com:</h4>
          <div>
            <span v-for="tag in mentor.tags" :key="tag">{{tag}}</span>
          </div>
          <p>{{ mentor.description}}</p>
        </div>
      </div>
      <v-btn class="btn lar" @click="match">QUERO RESERVAR!</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      success: true,
      suggestion: false,
      mentorSuggestion: false,
      mentor: {
        name: "Tássio Jordão",
        cargo: "Hacker",
        photo:
          "http://varelanoticias.com.br/wp-content/uploads/2017/08/sidney-magal.jpg",
        tags: ["músico", "garanhão"],
        description: "Cantor que fez sucesso. Experiência em cantar"
      }
    };
  },
  props: {
    title: String,
    likes: Number,
    isPublished: Boolean
  },
  methods: {
    nextSlide() {
      this.success = false;
      this.suggestion = true;
    },
    searchMentor() {
      //lógica para comparar os dados recebidos com os mentores cadastrados no banco

      this.suggestion = false;
      this.mentorSuggestion = true;
    },
    match() {
      // eslint-disable-next-line
      console.log("reservado");
    }
  }
};
</script>

<style>
.lar {
  max-width: 290px;
}

.card {
  display: flex;
  flex-direction: column;
}
</style>
