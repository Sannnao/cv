<template>
  <ul class="social-panel">
    <li v-for="{ link, title, btnClass } in socialPanelData" :key="link">
      <a :href="link" :title="title" target="_blank">
        <div class="social-button" :class="btnClass"></div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      socialPanelData: [
        {
          link: "https://github.com/sannnao",
          title: "to github",
          btnClass: "github-btn",
        },
        {
          link: "https://www.facebook.com/profile.php?id=100001634313768",
          title: "to facebook",
          btnClass: "facebook-btn",
        },
        {
          link: "https://vk.com/bluestone",
          title: "to vk",
          btnClass: "vk-btn",
        },
        {
          link: "https://www.instagram.com/stormyweather_hoho/",
          title: "to instagram",
          btnClass: "inst-btn",
        },
        {
          link: "https://www.linkedin.com/in/alexander-piskun-0a2a13175/",
          title: "to linkedin",
          btnClass: "in-btn",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
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
  display: flex;
  width: max-content;
  height: max-content;
  list-style: none;
  background-color: #fff;
  border-radius: 5px;

  animation-name: social-shadow;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}

.social-button {
  width: 30px;
  height: 30px;
  margin: 5px;

  &:hover {
    transform: scale(1.1);
    transition: 0.2s;
    opacity: 0.8;
  }

  &:active {
    transform: scale(0.9);
  }
}

.github-btn {
  background: url("../assets/images/github.png") 50% 50%/100% no-repeat;
}

.facebook-btn {
  background: url("../assets/images/facebook.png") 50% 50%/100% no-repeat;
}

.vk-btn {
  background: url("../assets/images/vk.svg") 50% 50%/200% no-repeat;
}

.inst-btn {
  background: url("../assets/images/instagram.png") 50% 50%/100% no-repeat;
}

.in-btn {
  background: url("../assets/images/linkedin.png") 50% 50%/100% no-repeat;
}
</style>
