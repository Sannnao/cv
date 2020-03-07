<template>
  <ul class="social-panel">
    <li v-for="({link, title, btnClass}) in socialList" :key="link">
      <a :href="link" :title="title" target="_blank">
        <div class="social-button" :class="btnClass"></div>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  props: ["socialList"]
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
  position: absolute;
  z-index: 1;
  right: -181px;
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

.github-btn {
  background: url("../assets/images/facebook.png") 50% 50%/100% no-repeat;
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
