<template>
  <section class="page">
    <ul class="section-list">
      <li class="section-list__item">
        <h1 class="section-list__name">Alexander Piskun</h1>
      </li>
      <li class="section-list__item">
        <a href="mailto:sannnao.developer@gmail.com" title="Contact me!"
          >sannnao.developer@gmail.com</a
        >
      </li>
    </ul>
    <div class="page__panel-container">
      <SocialPanel ref="socialPanel"></SocialPanel>
    </div>
  </section>
</template>

<script>
import SocialPanel from "../components/SocialPanel";

export default {
  components: {
    SocialPanel,
  },
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.page {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 40%;
}

.section-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    min-height: 40px;
    padding: 0 40px;
    font-weight: 400;
    font-size: 1.8rem;
    word-spacing: 7px;
    letter-spacing: 1.5px;
    color: hsl(132, 6%, 15%);
    background-color: #fff;
    transition: background-color 0.5s;

    &:hover {
      background-color: hsl(0, 0%, 91%);
    }
  }

  &__name {
    font-size: 3rem;

    &:hover {
      text-shadow: 0 0 10px hsla(132, 6%, 15%, 0.5);
    }
  }
}
</style>
