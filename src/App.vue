<template>
  <div class="app-wrapper">
    <Header :menuItems="menuItems"></Header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "./components/Header";

export default {
  components: {
    Header,
  },
  data() {
    return {
      menuItems: [
        { link: "/about-me", title: "About me" },
        { link: "/experience", title: "Experience" },
      ],
    };
  },
  beforeCreate() {
    document.title = 'Alex Piskun CV'
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";
@font-face {
  font-family: "Montserrat";
  src: url("./assets/fonts/Montserrat/Montserrat-Regular.ttf");
  font-weight: 400;
}
@font-face {
  font-family: "Merriweather";
  src: url("./assets/fonts/Merriweather-Regular.ttf");
  font-weight: 400;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 10px;

  @media screen and (max-width: 400px) {
    font-size: 8px;
  }
}

body {
  font-family: "Montserrat", "Arial", sans-serif;
}

a {
  text-decoration: none;
  line-height: 1.6;
  color: hsl(349, 100%, 33%);
  border-bottom: 1px solid hsla(132, 6%, 15%, 0);

  &:hover {
    transform: scale(1.1);
    border-bottom: 1px solid hsla(132, 6%, 15%, 0.5);
    transition: 0.1s;

    @media screen and (max-width: 550px) {
      transform: scale(1.02);
    }
  }

  &:active {
    text-shadow: hsl(349, 100%, 33%) 0px 0px 1px;
  }
}

h1 {
  font-size: 5rem;
  color: $h-color;
}

h3 {
  font-size: 3rem;
  color: $h-color;
}

.main {
  display: flex;
  justify-content: center;
  overflow-y: auto;
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

@media screen and (max-width: $wrapper-width) {
  .wrapper {
    width: 100%;
  }
}
</style>
