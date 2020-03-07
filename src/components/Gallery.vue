<template>
  <div class="gallery">
    <div class="gallery__default-img">
      <img alt="my-photo" :src="slides[defaultSlide]" :style="{height: '250px'}" @click="openModal" />
    </div>
    <div class="gallery__modal" v-if="isGalleryOpened" @click.self="closeModal">
      <Pagination :setDefault="setDefault" :defaultSlide="defaultSlide" :slides="slides"></Pagination>
    </div>
  </div>
</template>

<script>
import Pagination from "./Pagination";

export default {
  components: {
    Pagination
  },
  props: ["slides"],
  data() {
    return {
      isGalleryOpened: false,
      defaultSlide: 0
    };
  },
  methods: {
    openModal() {
      this.isGalleryOpened = true;
    },
    closeModal() {
      this.isGalleryOpened = false;
    },
    setDefault(currentSlide) {
      this.defaultSlide = currentSlide;
    }
  }
};
</script>

<style lang="scss">
.gallery {
  flex-grow: 1;

  &__default-img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    overflow: hidden;
    border-radius: 5%;

    &:hover {
      transform: scale(1.02);
      transition: 0.1s;
      box-shadow: 0 0 10px 0 hsla(132, 6%, 15%, 0.5);
    }
  }

  &__modal {
    position: absolute;
    z-index: 9999;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: hsla(132, 6%, 15%, 0.5);
  }
}
</style>
