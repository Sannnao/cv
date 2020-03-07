<template>
  <section id="name" class="page">
    <div class="wrapper">
      <h3 class="page__title">About me</h3>

      <div class="list-wrap">
        <Gallery
          :slides="slides"
        >
        </Gallery>

        <ul class="section-list">
          <li class="section-list__item section-list__name-container">
            <span>Name:</span>
            <p
              class="section-list__name"
              :style="personNamePosition"
              @click="toggleSocialPanel"
            >
              Alexander Piskun</p>
            <ul class="social-panel" :style="socialPanelPosition">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100001634313768"
                  title="to facebook"
                  target="_blank"
                >
                  <div class="social-button facebook-btn"></div>
                </a>
              </li>

              <li>
                <a href="https://vk.com/bluestone" title="to vk" target="_blank">
                  <div class="social-button vk-btn"></div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.instagram.com/stormyweather_hoho/"
                  title="to instagram"
                  target="_blank"
                >
                  <div class="social-button inst-btn"></div>
                </a>
              </li>

              <li>
                <a
                  href="https://www.linkedin.com/in/alexander-piskun-0a2a13175/"
                  title="to linkedin"
                  target="_blank"
                >
                  <div class="social-button in-btn"></div>
                </a>
              </li>

              <li>
                <a href="https://t.me/sannnao" title="to telegram" target="_blank">
                  <div class="social-button t-btn"></div>
                </a>
              </li>
            </ul>
          </li>
          <li class="section-list__item">
            <span>E-mail:</span>
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
import personOne from "../assets/images/person-0.jpg";
import personTwo from "../assets/images/person-1.jpg";
import personThree from "../assets/images/person-2.jpg";

import Gallery from './Gallery';

export default {
  components: {
    Gallery
  },
  data() {
    return {
      slides: [personOne, personTwo, personThree],
      socialPanelRight: "-151px",
      socialPanelShown: false,
      personNameRight: '',
    };
  },
  methods: {
    showSocialPanel() {
      this.socialPanelRight = "10px";
    },
    hideSocialPanel() {
      this.socialPanelRight = "-151px";
    },
    shiftPersonName() {
      this.personNameRight = "161px";
    },
    unshiftPersonName() {
      this.personNameRight = "0";
    },
    toggleSocialPanel() {
      if (this.socialPanelShown) {
        this.hideSocialPanel();
        this.unshiftPersonName();
        this.socialPanelShown = false;
      } else {
        this.showSocialPanel();
        this.shiftPersonName();
        this.socialPanelShown = true;
      }
    }
  },
  computed: {
    socialPanelPosition() {
      return { right: this.socialPanelRight };
    },
    personNamePosition() {
      return { right: this.personNameRight };
    }
  }
};
</script>

<style lang="scss">
.page {
  display: flex;

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
  }
}

.list-wrap {
  display: flex;
  min-height: 150px;
}



.section-list {
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  list-style: inside;
  list-style-type: circle;

  &__name-container {
    position: relative;
    overflow: hidden;
  }

  &__item {
    display: flex;
    min-height: 40px;
    padding: 10px 20px;
    font-weight: 400;
    font-size: 18px;
    word-spacing: 7px;
    line-height: 1.8em;
    letter-spacing: 1.5px;
    color: hsl(132, 6%, 15%);

    &:hover {
      background-color: hsl(0, 0%, 91%);
    }

    span {
      flex-grow: 1;
    }

    a {
      height: 100%;
      color: hsl(349, 100%, 33%);
      border-bottom: 1px solid hsla(132, 6%, 15%, 0);

      &:hover {
        transform: scale(1.1);
        border-bottom: 1px solid hsla(132, 6%, 15%, 0.5);
        transition: 0.1s;
      }

      &:active {
        text-shadow: hsl(349, 100%, 33%) 0px 0px 1px;
      }
    }
  }

  &__name {
    position: relative;
    right: 0;
    transition: right 1s, transform 0.2s;

    &:hover {
      transform: scale(1.05);
      transition: right 1s, transform 0.2s;
      text-shadow: 0 0 10px hsla(132, 6%, 15%, 0.5);
      cursor: pointer;
    }
  }
}

@keyframes social-shadow {
  0% {
    box-shadow: 0 0 5px 0 hsla(132, 6%, 15%, 0.5);
  }

  50% {
    box-shadow: 0 0 15px 0 hsla(132, 6%, 15%, 0.5);
  }

  100% {
    box-shadow: 0 0 5px 0 hsla(132, 6%, 15%, 0.5);
  }
}

.social-panel {
  position: absolute;
  z-index: 1;
  right: -150px;
  display: flex;
  background-color: hsl(0, 0%, 91%);
  list-style: none;
  transition: right 0.5s;

  animation-name: social-shadow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.social-button {
  width: 30px;
  height: 30px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }
}

.facebook-btn {
  background: url("../assets/images/facebook.png") 50% 50%/100% no-repeat;
}

.vk-btn {
  background: url("../assets/images/vk.png") 50% 50%/100% no-repeat;
}

.inst-btn {
  background: url("../assets/images/instagram.png") 50% 50%/100% no-repeat;
}

.in-btn {
  background: url("../assets/images/linkedin.png") 50% 50%/100% no-repeat;
}

.t-btn {
  background: url("../assets/images/telegram.png") 50% 50%/100% no-repeat;
}
</style>
