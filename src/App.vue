<template>
  <Header :menuItems="menuItems"></Header>
</template>

<script>
import Header from './components/Header';

export default {
  components: {
    Header
  },
  data() {
    return {
      menuItems: [
        { link: "#name", title: "Name" },
        { link: "#e-mail", title: "E-mail" },
        { link: "#summary", title: "Summary" },
        { link: "#skills", title: "Skills" },
        { link: "#code-examples", title: "Code Examples" },
        { link: "#experience", title: "Experience" },
        { link: "#education", title: "Education" },
        { link: "#english", title: "English" }
      ]
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Montserrat';
  src: url('./assets/fonts/Montserrat/Montserrat-Regular.ttf');
  font-weight: 400;
}

@font-face {
  font-family: 'Nunito';
  src: url('./assets/fonts/Nunito/Nunito-Bold.ttf');
  font-weight: 700;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;
}

body {
  font-family: "Montserrat", "Arial", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

h1, h3 {
  font-weight: bold;
  font-family: "Nunito", "Arial", sans-serif;
}

h1 {
  padding-top: 50px;
  padding-bottom: 20px;
  font-size: 50px;
  color: hsl(132, 6%, 15%);
  border-bottom: 1px solid hsl(132, 6%, 15%);
}

h3 {
  font-size: 30px;
  color: hsl(132, 6%, 15%);
}

.wrapper {
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}
</style>
