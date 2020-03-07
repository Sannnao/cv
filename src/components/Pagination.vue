<template>
  <div class="pagination">
    <button class="pagination__button pagination__prev-button" @click="prevSlide"></button>
    <div class="pagination__content">
      <img
        :src="slides[currentSlide]"
        :style="{height: '500px'}"
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
  display: grid;
  grid-template-columns: 10% 1fr 10%;
  width: 70%;
  height: 60%;
  justify-items: center;
  align-items: center;
  box-shadow: 0 0 50px 25px hsla(0, 0%, 100%, 0.3);

  &__button {
    width: 5vh;
    height: 5vh;
    background-color: inherit;
    outline: none;
    border: none;
    border-radius: 5px;
    box-shadow: 0 0 10px 5px hsla(0, 0%, 100%, 0.3);

    &:active {
      transform: scale(0.9);
      box-shadow: 0 0 15px 10px hsla(0, 0%, 100%, 0.3);
    }
  }

  &__prev-button {
    grid-area: 1 / 1 / 2 / 2;
  }

  &__content {
    grid-area: 1 / 2 / 2 / 3;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }

  &__next-button {
    grid-area: 1 / 3 / 2 / 4;
  }
}
</style>
