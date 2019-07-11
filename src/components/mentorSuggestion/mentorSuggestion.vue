<template>
  <v-container fluid>
    <!-- card de cadastro -->
    <v-layout class="layout-slides card" v-show="success === true">
      <h2>CADASTRO REALIZADO COM SUCESSO!</h2>
      <p>Fique atento ao seu e-mail. Em até 30 minutos você receberá detalhes da sua mentoria.</p>
      <v-btn class="btn lar" @click="nextSlide">Ok</v-btn>
    </v-layout>
    <!-- notificação de sugestão de mentor -->
    <v-layout class="layout-slides card" v-show="suggestion === true">
      <img
        fire
        src="@/assets/iconfinder_Artboard_1465_2884802.png"
        alt="Fogos de artificio para comemoração"
      />
      <h2>Encontramos o mentor ideal para você!</h2>
      <v-btn class="btn lar" @click="searchMentor">VER AGORA!</v-btn>
    </v-layout>
    <!-- mentor -->
    <v-layout class="layout-slides card" v-show="mentorSuggestion === true">
      <div class="mentor">
        <div class="mentor-detail">
          <img
            class="mentor-detail-img"
            :src="mentor.photo"
            :alt="`mentor sugerido: ${mentor.name}`"
          />
          <div>
            <h3>{{ mentor.name}}</h3>
            <h4>{{ mentor.cargo}}</h4>
          </div>
        </div>
        <div class="mentor-description">
          <h4>Experiências com:</h4>
          <div tags>
            <h4 v-for="tag in mentor.tags" :key="tag">#{{tag}}</h4>
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
        name: "Lucas Ferreira",
        cargo: "Ux Designer Pleno na Netshoes",
        photo:
          "http://varelanoticias.com.br/wp-content/uploads/2017/08/sidney-magal.jpg",
        tags: ["Design Thinking", "Scrum", "Agile"],
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
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
  background: #0378a6 !important;
  color: #fff !important;
  border: 1px solid #707070;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

[fire] {
  width: 203px;
  margin-bottom: 25px;
}

.mentor,
.mentor-detail .mentor-description {
  display: flex;
}

.mentor {
  flex-direction: column;
  align-items: center;
}

.mentor-detail {
  justify-content: space-between;
  margin-bottom: 20px;
}

.mentor-detail-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
}

.mentor-description {
  justify-content: flex-start;
  text-align: left;
}

[tags] {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

h3,
p,
h4 {
  color: #707070;
  margin-bottom: 20px;
}

h3 {
  font-size: 25px;
  font-weight: 500;
  margin: 0;
}

h4 {
  font-size: 16px;
}
</style>
