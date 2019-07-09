<template>
  <div id="home">
    <Header></Header>
    <mentorForm />
  </div>
</template>

<script>
import mentorForm from "./form/mentorForm";
import Header from "./Header";

export default {
  name: "home",
  components: { mentorForm, Header },
  props: {}
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
