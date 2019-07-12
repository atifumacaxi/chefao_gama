<template>
  <v-app>
    <Header />
    <div class="main">
      <div class="main-container">
        <router-view class="main-container-render"></router-view>
      </div>
    </div>
  </v-app>
</template>

<script>
import Header from "./components/Header";
// import Home from "./components/home";

export default {
  name: "App",
  components: {
    Header
    // Home
  },
  data() {
    return {
      //
    };
  }
};
</script>

<style>
#app {
  font-family: "Lato", Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#app,
.main-container-render,
.main-container,
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}

.main-container-render,
.main-container,
.main {
  height: 100%;
  width: 100%;
}

.main-container-render {
  padding: 0px 10px !important;
}
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
strong {
  color: #000;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  text-decoration: none;
  color: black;
}

img,
a {
  cursor: pointer;
}
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

/* class para ser aplicada em botões  */
.btn {
  /* Não deixei as cores das bordas setadas porque variam */
  margin-top: 30px;
  padding-top: 10px;
  padding-bottom: 10px;
  height: auto;
  border-radius: 4px;
}

h2 {
  font-size: 25px;
  font-weight: 600;
  color: #005778;
  margin-bottom: 25px;
}

.layout-slides {
  display: flex;
  flex-direction: column;
  align-content: space-between;
  background: #fff;
  border: 1px solid #d1d1d1;
  border-radius: 4px;
  padding: 100px 1%;
  margin: 100px 0;
}

/* EXEMPLO DE ANIMAÇÕES, CASO FOR USARMOS */
@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
    opacity: 1;
  }
  to {
    transform: translateY(-30);
    opacity: 0;
  }
}

.slide-enter-active {
  animation: slide-in 0.3s ease;
}

.slide-leave-active {
  animation: slide-out 0.3 ease;
}
</style>

