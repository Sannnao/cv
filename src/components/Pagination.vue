<template>
  <div class="pagination">
    <button class="pagination__button pagination__prev-button" @click="prevSlide"></button>
    <div class="pagination__content">
      <img
        :src="slides[currentSlide]"
        :style="{height: '100%'}"
        alt="my-photo"
        @click="setDefault(currentSlide)"
      />
    </div>
    <button class="pagination__button pagination__next-button" @click="nextSlide"></button>
  </div>
</template>

<script>
export default {
  props: ["slides", "setDefault", "defaultSlide"],
  data() {
    return {
      currentSlide: this.defaultSlide
    };
  },
  methods: {
    prevSlide() {
      if (this.currentSlide === 0) {
        this.currentSlide = this.slides.length - 1;
      } else {
        this.currentSlide -= 1;
      }
    },
    nextSlide() {
      if (this.currentSlide === this.slides.length - 1) {
        this.currentSlide = 0;
      } else {
        this.currentSlide += 1;
      }
    }
  }
};
</script>

<style lang="scss">
.pagination {
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: 10% 76% 10%;
  grid-gap: 2%;
  width: 100%;
  height: 100%;
  padding: 2%;
  justify-items: center;
  align-items: center;
  background-color: hsla(132, 6%, 15%, 0.5);

  @media screen and (max-width: 600px) {
    grid-template-columns: 49% 49%;
    grid-template-rows: 86% 10%;
  }

  &__button {
    @keyframes pagination-btn-shadow {
      0% {
        box-shadow: 0 0 8px 0px hsla(0, 0%, 100%, 0.3);
      }

      50% {
        box-shadow: 0 0 15px 0px hsla(0, 0%, 100%, 0.3);
      }

      100% {
        box-shadow: 0 0 8px 0px hsla(0, 0%, 100%, 0.3);
      }
    }

    animation-name: pagination-btn-shadow;
    animation-duration: 2s;
    animation-iteration-count: infinite;

    width: 5vh;
    height: 5vh;
    background-color: hsla(132, 6%, 15%, 0);
    outline: none;
    border: none;
    border-radius: 5px;

    &:hover {
      cursor: pointer;
    }

    &:active {
      transform: scale(0.9);
      box-shadow: 0 0 15px 10px hsla(0, 0%, 100%, 0.3);
    }
  }

  &__prev-button {
    grid-area: 1 / 1 / 2 / 2;

    @media screen and (max-width: 600px) {
      grid-area: 2 / 1 / 3 / 2;
    }
  }

  &__content {
    grid-area: 1 / 2 / 2 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60%;
    overflow: hidden;

    @media screen and (max-width: 600px) {
      grid-area: 1 / 1 / 2 / 3;
    }
  }

  &__next-button {
    grid-area: 1 / 3 / 2 / 4;

    @media screen and (max-width: 600px) {
      grid-area: 2 / 2 / 3 / 3;
    }
  }
}
</style>
