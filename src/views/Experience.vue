<template>
  <div class="experience-page">
    <div class="experience-page__content">
      <ExperienceSection
        v-for="(data, i) in ExperienceSections"
        :key="i"
        v-bind="data"
      ></ExperienceSection>
    </div>
  </div>
</template>

<script>
import VueHtml2pdf from "vue-html2pdf";
import ExperienceSection from "../components/ExperienceSection";

export default {
  components: {
    ExperienceSection,
    VueHtml2pdf,
  },
  data() {
    return {
      ExperienceSections: [
        {
          company: "EPAM",
          project: "Emirates",
          productLink: "https://www.emirates.com/",
          projectRole: "React Developer",
          period: "October 2019 – December 2019",
          projectDescription:
            "The project was in the “Tourism and hospitality” domain. We was developing a part of the application where you can book fly, hotel, airport/hotel transfer.",
          technologies: [
            "React, Redux, redux-thunk",
            "SCSS, BEM",
            "Jest, Enzyme, Storybook",
            "Node.js, koa",
            "Bitbucket",
            "Jenkins",
            "A11y",
          ],
          accomplishments: [
            "Created storybook for the specific components to visual testing in isolation",
            "Added a11y support for specific parts of application",
            "Fixed a lot of visual and logical bugs",
          ],
        },
        {
          company: "EPAM",
          project: "Refinitiv Eikon",
          productLink: "https://solutions.refinitiv.com/eikon-trading-software",
          projectRole: "Vue Developer",
          period: "February 2020 – Aprill 2020",
          projectDescription:
            "Trading charts tool where user can monitor charts about finances, stocks etc.",
          technologies: [
            "Vue.js",
            "Elf Ui library",
            "Moment.js",
            "Puppeteer",
            "Gitlab",
          ],
          accomplishments: ["Fixed a lot of UI and logical bugs and issues"],
        },
        {
          company: "EPAM",
          project: "Refinitiv Eikon",
          productLink: "https://solutions.refinitiv.com/eikon-trading-software",
          projectRole: "Vue Developer",
          period: "February 2020 – Aprill 2020",
          projectDescription:
            "Trading charts tool where user can monitor charts about finances, stocks etc.",
          technologies: [
            "Vue.js",
            "Elf Ui library",
            "Moment.js",
            "Puppeteer",
            "Gitlab",
          ],
          accomplishments: ["Fixed a lot of UI and logical bugs and issues"],
        },
        {
          company: "Sharekey Labs",
          project: "Sharekey",
          productLink: "https://sharekey.com/",
          projectRole: "React Developer",
          period: "April 2020 – August 2020",
          projectDescription:
            "A b2b solution for communication between teams, companies with high security and no metadata collection",
          technologies: [
            "React, Redux",
            "SCSS, BEM",
            "Storybook",
            "Node.js",
            "Meteor",
            "MongoDB",
            "Github",
          ],
          accomplishments: [
            "Introdused BEM approach to the team",
            "Introdused Storybook for visual testing components in isolation and created a list of control components (buttons) from all app",
            "Refactored an enormous SVG getter function, where all SVG icons where initialized at once on each singe SVG icon used in the project and returned by huge switch/case, which is definitely was a big performance issue. It has been created separated components for each SVG icon instead",
            "Created resize functional of two app’s columns",
            "Refactor a lot of components to be responsible to resize functional",
            "Other UI/logical improvements",
            "Code review",
            "Planning",
          ],
        },
        {
          company: "Innowise Group",
          project: "BS2 Penki Continental Group",
          productLink:
            "https://www.bs2.lt/en/industry-solutions/financial-institutions/software-2/",
          projectRole: "React Developer",
          period: "November 2020 – till now",
          projectDescription: `
            The goal is to create a web apps based on existing desktop app
             I’m working on two modules: Service Desk and Atmeye.
             Service Desk.iQ provides ability to monitor common workflow engine for effective technical support and lets respond quickly and  efficiently to any transaction equipment incident or other suspicious events.
              ATMeye.iQ is an integrated hardware and software solution that provides additional safety and security for self-service devices and their users.`,
          technologies: [
            "TypeScript",
            "React, Redux, redux-saga",
            "React-router",
            "Styled-components, Material-UI",
            "Formik",
            "Moment.js",
          ],
          accomplishments: [
            "Improved auth logic based on permissions",
            "Refactor some copy-pasted code",
            "Fixed some logical and behavioral bugs",
          ],
        },
      ].reverse(),
    };
  },
};
</script>

<style lang='scss'>
.experience-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
    justify-items: center;
    width: 50%;
    padding: 40px;
  }
}
</style>
