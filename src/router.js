import Vue from "vue";
import Router from "vue-router";

// import Portfolio from "./components/portfolio/Portfolio";
import userForm from "./components/form/userForm";
import Home from "./components/home";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/", //definindo o caminho da rota
      components: {
        default: Home //identificando o componente da rota,
        // menu: Menu
      }
    },
    // { path: '/', component: Home },
    { path: "/cadastro", component: userForm }
  ]
});
