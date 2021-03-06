<template>
  <section id="name" class="page">
    <div class="wrapper page__wrapper">
      <div class="page__gallery-wrap">
        <Gallery :slides="personSlides"></Gallery>
        <Gallery :slides="portfolioSlides" v-if="!isMobile"></Gallery>
      </div>

      <div class="page__list-wrap" ref="listWrap">
        <h3 class="page__title">About me</h3>

        <ul class="section-list">
          <li
            class="section-list__item section-list__name-container"
            @click.self="toogleSocialMobile"
          >
            <span :style="nameTitlePosition">Name:</span>
            <p
              class="section-list__name"
              :style="personNamePosition"
              @click="toggleSocialPanel"
              ref="personName"
            >Alexander Piskun</p>
            <SocialPanel
              :style="socialPanelPosition"
              :socialList="socialPanelData"
              ref="socialPanel"
            ></SocialPanel>
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
      socialPanelRight: "240px",
      socialPanelShown: false,
      personNameTranslate: "0",
      nameTitleTranslate: "0",
      listWrapWidth: null,
      socialPanelWidth: null,
      personNameWidth: null,
      currentPanelShowAmount: 10,
      nameShiftAmount: 240
    };
  },
  methods: {
    showSocialPanel() {
      this.socialPanelRight = `-${this.currentPanelShowAmount}px`;
    },
    hideSocialPanel() {
      this.socialPanelRight = "240px";
    },
    shiftPersonName() {
      this.personNameTranslate = `-${this.nameShiftAmount}px`;
    },
    unshiftPersonName() {
      this.personNameTranslate = "0";
    },
    shiftNameTitle() {
      this.nameTitleTranslate = `-27px`;
    },
    unshiftNameTitle() {
      this.nameTitleTranslate = `0px`;
    },
    toggleSocialPanel() {
      if (this.listWrapWidth <= 560) {
        if (this.socialPanelShown) {
          this.hideSocialPanel();
          this.unshiftPersonName();
          this.unshiftNameTitle();
          this.socialPanelShown = false;
        } else {
          this.showSocialPanel();
          this.shiftPersonName();
          this.shiftNameTitle();
          this.socialPanelShown = true;
        }
      } else if (this.listWrapWidth > 560) {
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
    toogleSocialMobile() {
      if (this.listWrapWidth <= 560) {
        this.toggleSocialPanel();
      }
    }
  },
  computed: {
    socialPanelPosition() {
      return { transform: `translateX(${this.socialPanelRight})` };
    },
    personNamePosition() {
      return { transform: `translateX(${this.personNameTranslate})` };
    },
    nameTitlePosition() {
      return { transform: `translateY(${this.nameTitleTranslate})` };
    },
    isMobile() {
      return this.listWrapWidth <= 560;
    }
  },
  watch: {
    listWrapWidth(newWidth) {
      if (newWidth <= 560) {
        this.currentPanelShowAmount =
          Math.floor(this.listWrapWidth / 2 - this.socialPanelWidth / 2);
        this.nameShiftAmount = Math.floor(this.listWrapWidth / 2 + this.personNameWidth / 2);
      } else {
        this.currentPanelShowAmount = 10;
        this.nameShiftAmount = 240;
        this.nameTitleTranslate = 0;
      }
    }
  },
  mounted() {
    this.listWrapWidth = this.$refs.listWrap.clientWidth;
    this.socialPanelWidth = this.$refs.socialPanel.$el.clientWidth;
    this.personNameWidth = this.$refs.personName.clientWidth;

    window.addEventListener("resize", () => {
      this.listWrapWidth = this.$refs.listWrap.clientWidth;
    });
  }
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.page {
  display: flex;
  height: 100%;

  &__wrapper {
    display: flex;
    align-items: center;

    @media screen and (max-width: $wrapper-width) {
      flex-direction: column-reverse;
      justify-content: space-around;
    }
  }

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__gallery-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 80%;

    @media screen and (max-width: $wrapper-width) {
      flex-grow: 0;
      flex-direction: row;
      width: 80%;
      height: auto;
    }

    @media screen and (max-width: 650px) {
      width: 100%;
    }

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
  }

  &__list-wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 30vh;
    min-height: 150px;

    @media screen and (max-width: $wrapper-width) {
      flex-grow: 0;
      width: 60%;
    }

    @media screen and (max-width: 850px) {
      width: 70%;
    }

    @media screen and (max-width: 780px) {
      width: 80%;
    }

    @media screen and (max-width: 600px) {
      width: 90%;
    }
  }
}

.section-list {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  list-style: inside;
  list-style-type: circle;

  @media screen and (max-width: 700px) {
    height: 80%;
  }

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
    font-size: 1.8rem;
    word-spacing: 7px;
    letter-spacing: 1.5px;
    color: hsl(132, 6%, 15%);
    background-color: #fff;
    transition: background-color 0.5s;

    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: space-around;
      height: 80px;
    }

    &:hover {
      background-color: hsl(0, 0%, 91%);
    }

    span {
      flex-grow: 1;
      transition: transform 1s;

      @media screen and (max-width: 700px) {
        flex-grow: 0;
        font-weight: 600;
        color: #3d423e;
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
