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
  props: ["slides", 'setDefault', 'defaultSlide'],
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
</style>
