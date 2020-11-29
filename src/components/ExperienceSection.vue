<template>
  <section class="experience-section">
    <h2 class="experience-section__title">Company:</h2>
    <p class="experience-section__option">{{ company }}</p>

    <h2 class="experience-section__title">Project:</h2>
    <a
      class="experience-section__option"
      :href="productLink"
      :title="productLink"
      target="_blank"
      >{{ project }}</a
    >

    <h2 class="experience-section__title">Role:</h2>
    <p class="experience-section__option">{{ projectRole }}</p>

    <h2 class="experience-section__title">Period:</h2>
    <p class="experience-section__option">{{ period }}</p>

    <h2 class="experience-section__title">Description:</h2>
    <p class="experience-section__option">
      {{ projectDescription }}
    </p>

    <h2 class="experience-section__title">Technologies:</h2>
    <p class="experience-section__option">
      <ul class="experience-section__option-list">
        <li
          v-for="(item, i) in technologies"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </p>

    <h2 class="experience-section__title">Accomplishments:</h2>
    <p class="experience-section__option">
      <ul class="experience-section__option-list">
        <li
          v-for="(item, i) in accomplishments"
          :key="i"
        >
          {{ item }}
        </li>
      </ul>
    </p>
  </section>
</template>

<script>
export default {
  props: {
    company: String,
    project: String,
    productLink: String,
    projectRole: String,
    period: String,
    projectDescription: String,
    technologies: Array,
    accomplishments: Array,
  },
};
</script>

<style lang='scss'>
.experience-section {
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 20px;
  row-gap: 10px;
  justify-items: start;
  align-content: start;
  align-items: center;
  width: 100%;
  padding-bottom: 20px;
  border-bottom: 1px dashed grey;

  &:last-child {
    border-bottom: none;
  }

  &__title {
    align-self: start;
  }

  &__option {
    font-size: 14px;
    font-family: "Merriweather", serif;
    word-spacing: 6px;
    letter-spacing: 0.5px;
    line-height: 1.6;

    &-list {
      margin-left: 20px;
    }
  }
}
</style>
