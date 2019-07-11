<template>
  <!-- tela com os slides do campo de cadastro. Todos os slides ficaram aqui, inclusive o form.
  para facilitar quando formos usar as informações preenchidas pelo user-->

  <v-container class="background" fluid>
    <!-- form para selecionar qualificar lead -->
    <v-form v-show="mostrarFormLead === true">
      <!-- SLIDE 1 -->
      <div v-show="mostrarSlide === true" class="slide slide-1 layout-slides">
        <h2>Atualmente você quer:</h2>
        <!-- <p>{{ radios || 'null' }}</p> -->
        <v-radio-group v-model="choose" @click="nextSlide" :mandatory="false">
          <v-radio label="Radio 1" value="radio-1"></v-radio>
          <v-radio label="Radio 2" value="radio-2"></v-radio>
        </v-radio-group>
      </div>
      <!-- SLIDE 2 -->
      <div v-show="mostrarSlide2  === true" class="slide slide-2">
        <h2>Em qual dessas áreas você atual?</h2>
        <!-- <p>{{ radios || 'null' }}</p> -->
        <v-radio-group v-model="whatArea" @click="nextSlide2" :mandatory="false">
          <v-radio label="Radio 3" value="radio-3"></v-radio>
          <v-radio label="Radio 4" value="radio-4"></v-radio>
          <v-radio label="Radio 5" value="radio-5"></v-radio>
          <v-radio label="Radio 6" value="radio-6"></v-radio>
        </v-radio-group>
      </div>
      <!-- SLIDE 3 - MultiSelect -->
      <div v-show="mostrarSlide3  === true" class="slide slide-3">
        <h2>Selecione as áreas de seu interesse:</h2>
        <!-- <p>{{ selected }}</p> -->
        <v-checkbox v-model="areas" label="John" value="John"></v-checkbox>
        <v-checkbox v-model="areas" label="Jacob" value="Jacob"></v-checkbox>
        <v-checkbox v-model="areas" label="Outro" value="Outro  "></v-checkbox>
        <v-checkbox v-model="areas" label="Teste" value="Teste"></v-checkbox>
        <v-checkbox v-model="areas" label="Tas" value="Tas"></v-checkbox>
        <v-btn @click="nextSlide3">Avançar</v-btn>
      </div>

      <!-- Data e hora -->
      <v-layout row wrap v-show="mostrarSlide4  === true" class="slide slide-4">
        <h2>Quando você gostaria de encontrar seu mentor?</h2>
        <v-flex xs12 sm6 md3>
          <v-text-field label="Data" v-model="pickerDate" placeholder="Data" type="date" outline></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md3>
          <v-text-field
            label="Horário"
            v-model="pickerHour"
            placeholder="Horário"
            type="time"
            outline
          ></v-text-field>
          <v-btn @click="nextSlide4">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>

    <!-- form para dados do user -->
    <v-form v-show="mostrarForm  === true" v-model="valid">
      <v-layout xs12 md4>
        <v-flex xs12 md4>
          <v-text-field v-model="firstname" :rules="nameRules" :counter="10" label="Nome" required></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Sobrenome"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="emailValidation"
            :rules="emailRules"
            label="Confirmação de E-mail"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-btn @click="cadastrar">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <mentorSuggestion v-show="mentorComponent === true" />
  </v-container>
</template>

<script>
import { setTimeout } from "timers";
import mentorSuggestion from "../mentorSuggestion/mentorSuggestion";

export default {
  components: { mentorSuggestion },
  data() {
    return {
      // Qualificar lead
      mostrarFormLead: true,
      mostrarSlide: true,
      choose: "",
      mostrarSlide2: false,
      whatArea: "",
      mostrarSlide3: false,
      areas: [],
      mostrarSlide4: false,
      pickerDate: new Date().toISOString().substr(0, 10), //é preciso converter pra pt-BR .toLocaleDateString("pt-BR")
      pickerHour: null,
      mostrarSlide5: false,
      //   dados dos user
      mostrarForm: false,
      valid: false,
      firstname: "",
      lastname: "",
      nameRules: [
        v => !!v || "Name é obrigatório",
        v => v.length <= 10 || "Name must be less than 10 characters"
      ],
      email: "",
      emailValidation: "",
      emailRules: [
        v => !!v || "E-mail é obrigatório",
        v => /.+@.+/.test(v) || "E-mail must be valid"
      ],
      mentorComponent: false
    };
  },
  methods: {
    nextSlide() {
      this.mostrarSlide = false;
      this.mostrarSlide2 = true;
    },
    nextSlide2() {
      this.mostrarSlide2 = false;
      this.mostrarSlide3 = true;
    },
    nextSlide3() {
      if (this.areas.length >= 1) {
        this.mostrarSlide3 = false;
        this.mostrarSlide4 = true;
      } else {
        alert("Por favor, escolha uma das opções");
      }
    },
    nextSlide4() {
      if (this.pickerDate && this.pickerHour) {
        this.mostrarFormLead = false;
        this.mostrarForm = true;
      } else {
        alert("Por favor, preencha todos os campos");
      }
    },
    cadastrar() {
      // fazer lógica para verificar se todos os dados estão sendo passados
      const choose = this.choose;
      const whatArea = this.whatArea;
      const areas = this.areas;
      const pickerDate = this.pickerDate;
      const pickerHour = this.pickerHour;
      const firstname = this.firstname;
      const email = this.email;

      this.$http
        .put("leads.json", {
          choose,
          whatArea,
          areas,
          pickerDate,
          pickerHour,
          firstname,
          email
        })
        .then(() => {
          // eslint-disable-next-line
          this.mostrarForm = false;
          this.mentorComponent = true;
        });
    }
  }
};
</script>

<style scoped>
.background {
  background-image: linear-gradient(#005778, #0798d1);
}
/* .class= "rad"; */
</style>
