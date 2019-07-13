<template>
  <!-- tela com os slides do campo de cadastro. Todos os slides ficaram aqui, inclusive o form.
  para facilitar quando formos usar as informações preenchidas pelo user-->

  <v-container class="background">
    <!-- form para selecionar qualificar lead -->
    <v-form v-show="mostrarFormLead === true">
      <!-- SLIDE 1 -->
      <div v-show="mostrarSlide === true" class="slide slide-1 layout-slides">
        <h2>Atualmente você deseja:</h2>

        <!--   <v-radio-group v-model="choose" @click="nextSlide" :mandatory="false">
          <v-radio label="Radio 1" value="radio-1"></v-radio>
          <v-radio label="Radio 2" value="radio-2"></v-radio>
        </v-radio-group>-->
        <div class="items_inside">
          <v-btn class="btn_slide1" @click="nextSlide">iniciar no mercado de trabalho</v-btn>
          <v-btn class="btn_slide1" @click="nextSlide">mudar de área de atuação</v-btn>
        </div>
      </div>
      <!-- SLIDE 2 -->
      <div v-show="mostrarSlide2  === true" class="slide slide-2 layout-slides">
        <h2>Em qual dessas áreas você atua?</h2>
        <!-- <p>{{ radios || 'null' }}</p> -->
        <!-- <v-radio-group v-model="whatArea" @click="nextSlide2" :mandatory="false">
          <v-radio label="Radio 3" value="radio-3"></v-radio>
          <v-radio label="Radio 4" value="radio-4"></v-radio>
          <v-radio label="Radio 5" value="radio-5"></v-radio>
          <v-radio label="Radio 6" value="radio-6"></v-radio>
        </v-radio-group>-->
        <div class="items_inside">
          <v-btn class="btn_slide2" @click="nextSlide2">Exatas</v-btn>
          <v-btn class="btn_slide2" @click="nextSlide2">Humanas</v-btn>
          <v-btn class="btn_slide2" @click="nextSlide2">Biológicas</v-btn>
          <v-btn class="btn_slide2" @click="nextSlide2">Tecnologia</v-btn>
        </div>
      </div>
      <!-- SLIDE 3 - MultiSelect -->
      <div v-show="mostrarSlide3  === true" class="slide slide-3 layout-slides">
        <div class="slide-3-cb">
          <h2>Selecione as áreas de seu interesse:</h2>
          <v-checkbox v-model="areas" label="Design" class="cb" value="Design"></v-checkbox>
          <v-checkbox v-model="areas" label="Marketing" class="cb" value="Marketing"></v-checkbox>
          <v-checkbox
            v-model="areas"
            label="Business Intelligence"
            class="cb"
            value="Business Intelligence"
          ></v-checkbox>
          <v-checkbox v-model="areas" label="UX" class="cb" value="UX"></v-checkbox>
          <v-checkbox v-model="areas" label="Scrum" class="cb" value="Scrum"></v-checkbox>
          <v-checkbox v-model="areas" label="Hard Skills" class="cb" value="Hard Skills"></v-checkbox>
          <v-checkbox v-model="areas" label="Soft Skills" class="cb" value="Soft Skills"></v-checkbox>
          <v-checkbox v-model="areas" label="Face Ads" class="cb" value="Face Ads"></v-checkbox>
        </div>
        <v-btn class="btn_slide1" @click="nextSlide3">Avançar</v-btn>
      </div>

      <!-- Data e hora -->
      <v-layout row wrap v-show="mostrarSlide4  === true" class="slide slide-4 layout-slides">
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
          <v-btn class="btn_slide1" @click="nextSlide4">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>

    <!-- form para dados do user -->
    <v-form v-show="mostrarForm  === true" v-model="valid">
      <v-layout xs12 md4 class="slide-5 layout-slides">
        <h2>Complete seu cadastro para continuar</h2>
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
          <v-text-field v-model="password" :type="'password'" label="Senha" required></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            v-model="passwordTrue"
            :type="'password'"
            label="Confirmação de senha"
            required
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-btn class="btn_slide1" @click="nextSlide5">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>

    <!-- campo do cartão de crédito -->
    <v-form>
      <v-layout class="slide-6 layout-slides" v-show="cardForm  === true" xs12 md4>
        <h2>FORMA DE PAGAMENTO</h2>
        <v-btn class="btn_pgto1">Cartão de crédito</v-btn>
        <v-btn class="btn_pgto2">boleto</v-btn>
        <v-flex xs12 md4>
          <v-text-field
            v-model="cardNumber"
            label="Número do cartão de crédito"
            required
            placeholder="0000-0000-0000-0000"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-text-field
            :rules="nameRules"
            v-model="cardTitle"
            label="Nome do Títular do cartão"
            placeholder="Nome do Títular do cartão"
            required
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field
            :rules="nameRules"
            v-model="cardDue"
            label="Data de validade"
            required
            placeholder="MM/AA"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 md4>
          <v-text-field
            :rules="nameRules"
            v-model="cardSafe"
            label="Código de segurança"
            required
            placeholder="000"
          ></v-text-field>
        </v-flex>

        <v-flex xs12 md4>
          <v-btn class="btn_slide1" @click="cadastrar">Enviar</v-btn>
        </v-flex>
      </v-layout>
    </v-form>
    <mentorSuggestion
      :dateMatch="new Date(pickerDate)"
      :hourMatch="pickerHour"
      v-show="mentorComponent === true"
    />
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
      pickerDate: "", //é preciso converter pra pt-BR .toLocaleDateString("pt-BR")
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
      password: "",
      passwordTrue: "",
      cardForm: false,
      cardNumber: "",
      cardTitle: "",
      cardDue: "",
      cardSafe: "",
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
    nextSlide5() {
      if (
        this.firstname &&
        this.lastname &&
        this.email &&
        this.emailValidation &&
        this.password &&
        this.passwordTrue
      ) {
        if (
          this.password !== this.passwordTrue ||
          this.email !== this.emailValidation
        ) {
          this.password !== this.passwordTrue
            ? alert("A senhas digitadas não conferem :(")
            : alert("Os e-mails digitados não conferem :(");
        } else {
          this.mostrarForm = false;
          this.cardForm = true;
        }
      } else {
        alert("Pro favor, preencha todos os campos");
      }
    },
    cadastrar() {
      this.cardFormValidation();

      const choose = this.choose;
      const whatArea = this.whatArea;
      const areas = this.areas;
      const pickerDate = this.pickerDate;
      const pickerHour = this.pickerHour;
      const firstname = this.firstname;
      const lastname = this.lastname;
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
          this.cardForm = false;
          this.mentorComponent = true;
        });
    },
    cardFormValidation() {
      // fazer lógica para verificar se todos os dados estão sendo passados
    }
  }
};
</script>

<style scoped>
@media (min-width: 768px) {
  .background {
    max-width: 2000px !important;
    height: max-content;
  }
  .items_inside {
    flex-direction: row !important;
    justify-content: center;
  }
  .layout-slides {
    margin-top: 180px;
    width: 1150px;
    justify-content: center;
  }
  .btn_slide1 {
    width: 450px;
    height: 65px;
    font-size: 20px;
  }
}

.background {
  background-image: linear-gradient(#005778, #0798d1);
}

.btn_slide1 {
  margin: 30px 15px;
  background-color: #0378a6 !important;
  color: white;
}
.items_inside {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.btn_slide2 {
  /* margin: 15px 15px; */
  width: 150px;
}

/* .cb {
  width: 150px;
} */

.slide-2 {
  padding: 20px;
}

.slide-3 {
  margin-top: 80px;
}

.slide-3-cb {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding-left: 10px;
}

.cb {
  width: 50%;
}

.slide-4 {
  padding: 0 20px;
}

.slide-5 {
  margin-top: 50px;
  padding: 0 20px;
}

.slide-6 {
  margin-top: 50px;
  padding: 0px 10px;
}

.btn_pgto1,
.btn_pgto2 {
  margin: 1px;
}

.btn_pgto1 {
  color: #a3a3a3;
  margin-top: -15px;
}

.btn_pgto2 {
  margin-bottom: 10px;
}
/* .class= "rad"; */
</style>
