<template>
  <section id="name" class="page">
    <div class="wrapper page__wrapper">
      <div class="page__gallery-wrap">
        <Gallery :slides="personSlides"></Gallery>
        <Gallery :slides="portfolioSlides"></Gallery>
      </div>

      <div class="page__list-wrap">
        <h3 class="page__title">About me</h3>

        <ul class="section-list">
          <li class="section-list__item section-list__name-container">
            <span>Name:</span>
            <p
              class="section-list__name"
              :style="personNamePosition"
              @click="toggleSocialPanel"
            >Alexander Piskun</p>
            <SocialPanel :style="socialPanelPosition" :socialList="socialPanelData"></SocialPanel>
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

import culturePortal from "../assets/images/culture-portal.png";
import hexal from "../assets/images/hexal.jpg";
import neutronMail from "../assets/images/neutron-mail.jpg";
import piskelClone from "../assets/images/piskel-clone.png";
import youtubeClient from "../assets/images/youtube-client.png";

import Gallery from "./Gallery";
import SocialPanel from "./SocialPanel";

export default {
  components: {
    Gallery,
    SocialPanel
  },
  data() {
    return {
      personSlides: [personOne, personTwo, personThree],
      portfolioSlides: [
        culturePortal,
        hexal,
        neutronMail,
        piskelClone,
        youtubeClient
      ],
      socialPanelData: [
        {
          link: "https://github.com/sannnao",
          title: "to github",
          btnClass: "github-btn"
        },
        {
          link: "https://www.facebook.com/profile.php?id=100001634313768",
          title: "to facebook",
          btnClass: "facebook-btn"
        },
        {
          link: "https://vk.com/bluestone",
          title: "to vk",
          btnClass: "vk-btn"
        },
        {
          link: "https://www.instagram.com/stormyweather_hoho/",
          title: "to instagram",
          btnClass: "inst-btn"
        },
        {
          link: "https://www.linkedin.com/in/alexander-piskun-0a2a13175/",
          title: "to linkedin",
          btnClass: "in-btn"
        },
        {
          link: "https://t.me/sannnao",
          title: "to telegram",
          btnClass: "t-btn"
        }
      ],
      socialPanelRight: "587px",
      socialPanelShown: false,
      personNameTranslate: "0"
    };
  },
  methods: {
    showSocialPanel() {
      this.socialPanelRight = "340px";
    },
    hideSocialPanel() {
      this.socialPanelRight = "587px";
    },
    shiftPersonName() {
      this.personNameTranslate = "-240px";
    },
    unshiftPersonName() {
      this.personNameTranslate = "0";
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
      return { transform: `translateX(${this.socialPanelRight})` };
    },
    personNamePosition() {
      return { transform: `translateX(${this.personNameTranslate})` };
    }
  },
};
</script>

<style lang="scss">
.page {
  display: flex;
  height: 100%;

  &__wrapper {
    display: flex;
    align-items: center;
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30vh;
  }

  &__gallery-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;
  }

  &__list-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 150px;
  }
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
    align-items: center;
    height: 50px;
    min-height: 40px;
    padding: 0 20px;
    font-weight: 400;
    font-size: 18px;
    word-spacing: 7px;
    line-height: 1.8em;
    letter-spacing: 1.5px;
    color: hsl(132, 6%, 15%);
    background-color: #fff;
    transition: background-color 0.5s;

    &:hover {
      background-color: hsl(0, 0%, 91%);
    }

    span {
      flex-grow: 1;
    }

    a {
      line-height: 1.6;
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
    z-index: 1;
    transition: box-shadow 0.4s, transform 1s;

    &:hover {
      text-shadow: 0 0 10px hsla(132, 6%, 15%, 0.5);
      cursor: pointer;
    }
  }
}
</style>
