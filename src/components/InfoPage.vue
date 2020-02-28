<template>
  <section id="name" class="page">
    <div class="wrapper">
      <h3>About me:</h3>

      <div class="list-wrap">
        <div class="gallery">
          <img
            src="../assets/images/person-0.jpg"
            alt="my-photo"
            width="200"
            height="250"
            @click="openModal"
          />
          <div class="gallery__modal" v-if="isGalleryOpened" @click.self="closeModal">
            <div class="pagination">
              <button class="pagination__button pagination__prev-button" @click="prevSlide"></button>
              <div class="padination__content">
                <img
                  :src="slides[currentSlide]"
                  alt="my-photo"
                  width="500"
                  height="500"
                  @click="openModal"
                />
              </div>
              <button class="pagination__button pagination__next-button" @click="nextSlide"></button>
            </div>
          </div>
        </div>

        <ul class="section-list">
          <li>Name: Alexander Piskun</li>
          <li>
            E-mail:
            <a
              href="mailto:sannnao.developer@gmail.com"
              title="Write me a letter!"
            >sannnao.developer@gmail.com</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
import personOne from '../assets/images/person-0.jpg';
import personTwo from '../assets/images/person-1.jpg';
import personThree from '../assets/images/person-2.jpg';
import personFour from '../assets/images/person-3.jpg';
import personFive from '../assets/images/person-4.jpg';

export default {
  data() {
    return {
      isGalleryOpened: false,
      slides: [personOne, personTwo, personThree, personFour, personFive],
      currentSlide: 0,
    };
  },
  methods: {
    openModal() {
      this.isGalleryOpened = true;
    },
    closeModal() {
      this.isGalleryOpened = false;
    },
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
.page {
  height: 100vh - $header-height;
  margin: 0 20px -75px 20px;
  padding-top: 125px;
  padding-bottom: 50px;
  border-bottom: 1px solid hsla(132, 6%, 15%, 0.5);
}

.list-wrap {
  display: flex;
  justify-content: space-between;
  min-height: 150px;
  padding: 0 50px;
}

.gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
  width: 250px;
  height: 200px;

  &__modal {
    position: absolute;
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
  }

  &__next-button {
    grid-area: 1 / 3 / 2 / 4;
  }
}

.section-list {
  display: flex;
  flex-direction: column;
  list-style-type: circle;
}

.list-wrap li {
  min-height: 40px;
  padding: 10px 20px;
  font-weight: 400;
  font-size: 18px;
  word-spacing: 7px;
  line-height: 1.8em;
  letter-spacing: 1.5px;
  color: hsl(132, 6%, 15%);
}

.list-wrap li:hover {
  background-color: hsl(0, 0%, 91%);
}

.list-wrap li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: hsl(349, 100%, 33%);
  border-bottom: 1px solid hsla(132, 6%, 15%, 0);
}

.list-wrap li a:hover {
  font-size: 19px;
  border-bottom: 1px solid hsla(132, 6%, 15%, 0.5);
  transition: 0.1s;
}

.list-wrap li a:active {
  text-shadow: hsl(349, 100%, 33%) 0px 0px 1px;
}
</style>
