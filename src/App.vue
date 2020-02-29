<template>
  <div class="app-wrapper">
    <Header :menuItems="menuItems"></Header>
    <main>
      <InfoPage></InfoPage>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";
import InfoPage from "./components/InfoPage";

export default {
  components: {
    Header,
    InfoPage
  },
  data() {
    return {
      menuItems: [
        { link: "#about-me", title: "About me" },
        { link: "#summary", title: "Summary" },
        { link: "#skills", title: "Skills" },
        { link: "#experience", title: "Experience" },
      ]
    };
  }
};
</script>

<style lang="scss">
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf");
  font-weight: 400;
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

h1 {
  font-size: 5rem;
  color: $h-color;
}

h3 {
  font-size: 3rem;
  color: $h-color;
}

.wrapper {
  width: 1024px;
  height: 100%;
  margin: 0 auto;
}

.app-wrapper {
  display: grid;
  grid-template-rows: 40px 1fr;
  height: 100vh;
}
</style>
