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

    <!-- mentor match -->
    <v-layout class="layout-slides card" v-show="mentorMatch === true">
      <h2>Encontramos o mentor ideal para você!</h2>
      <div class="mentor">
        <img class="mentor-detail-img" :src="mentor.photo" :alt="`mentor sugerido: ${mentor.name}`" />

        <h4>
          Você reservou uma sessão com
          <h3 style="font-size: 18px !important;">{{ mentor.name}}</h3>
        </h4>

        <h4>{{dateMatch | complete}} Às {{hourMatch}}</h4>

        <v-btn to="/" class="btn lar" @click="profileMentor">MEU PERFIL!</v-btn>
      </div>
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
          "https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=815&q=80",
        tags: ["Design Thinking", "Scrum", "Agile"],
        description:
          "Experiente na área de vendas e contato com cliente. Já passei por três multinacionais e também duas startups. Agrego valor diariamente nas decisões de criação de novos projetos ágeis, além de participar do processo de criação de novos serviços."
      },
      mentorMatch: false
      // date: "29/07/2019",
      // hour: "13:30"
    };
  },
  filters: {
    complete(value) {
      return value.toLocaleDateString("pt-BR");
    }
  },
  props: {
    dateMatch: Date,
    hourMatch: String
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
      this.mentorSuggestion = false;
      this.mentorMatch = true;
    },
    profileMentor() {
      console.log("Consultar perfil");
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
  padding: 0 10px;
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
