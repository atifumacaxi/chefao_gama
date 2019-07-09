<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required></v-text-field>

    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>

    <!-- <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>-->

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>-->

    <v-btn :disabled="!valid" color="success" @click="cadastrar">Cadastrar</v-btn>

    <v-btn color="error" @click="reset">Reset Form</v-btn>

    <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
  </v-form>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Nome é obrigatório",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail é obrigatório",
      v => /.+@.+/.test(v) || "E-mail must be valid"
    ]
    // select: null,
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    // checkbox: false
  }),

  methods: {
    cadastrar() {
      if (this.$refs.form.validate()) {
        this.snackbar = true;

        const name = this.name;
        const email = this.email;
        //   sintax para colocar os dados no firebase: this.$http.METODO('recurso', Objeto)
        this.$http.put("leads.json", { name, email }).then(() => {
          // eslint-disable-next-line
          console.log("dados enviados");
        });
      }
    },
    reset() {
      this.$refs.form.reset();
    }
    // resetValidation() {
    //   this.$refs.form.resetValidation();
    // }
  }
};
</script>

<style>
</style>
