<template>
  <header class="header">
    <div class="wrapper">
      <nav class="header__navigation">
        <ul class="menu">
          <li class="menu__item" v-for="({link, title}) in menuItems" :key="link">
            <a :href="link">{{ title }}</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ["menuItems"]
};
</script>

<style lang="scss">
.header {
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: hsl(173, 14%, 12%);
}

.menu {
  display: flex;
  list-style: none;

  &__item {
    flex-grow: 1;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-align: center;
    color: hsl(180, 7%, 57%);

    a {
      display: block;
      padding: 2vh 0;
      font-size: 1.7rem;

      &:hover {
        transform: scale(1.1);
        transition: 0.2s;
      }
    }

    &:hover {
      color: hsl(180, 31%, 82%);
      background-color: hsl(173, 12%, 27%);
      opacity: 0.9;
    }

    &:active {
      color: hsl(0, 0%, 100%);
    }
  }
}
</style>
