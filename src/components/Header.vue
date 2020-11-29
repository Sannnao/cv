<template>
  <header class="header">
    <div class="wrapper">
      <nav class="header__navigation">
        <ul class="menu">
          <li
            class="menu__item"
            v-for="{ link, title } in menuItems"
            :key="link"
          >
            <router-link class="router-link" :to="link">{{
              title
            }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  props: ["menuItems"],
};
</script>

<style lang="scss">
.header {
  position: relative;
  background-color: hsl(173, 14%, 12%);

  &__navigation {
    height: 100%;
  }
}

.menu {
  display: flex;
  height: 100%;
  list-style: none;

  &__item {
    flex-grow: 1;
    height: 100%;
    font-weight: 400;
    letter-spacing: 1.5px;
    text-align: center;
    color: hsl(180, 7%, 57%);

    .router-link {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 1.7rem;
      color: inherit;

      &:hover {
        transform: scale(1.1);
        transition: 0.2s;
        color: hsl(180, 31%, 82%);
        background-color: hsl(173, 12%, 27%);
        opacity: 0.9;
      }

      &:active {
        color: hsl(0, 0%, 100%);
      }
    }
  }
}
</style>
