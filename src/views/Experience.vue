<template>
  <div class="experience-page">
    <button class="experience-page__download" @click="downloadWithCSS">
      Download PDF
    </button>
    <p class="experience-page__experience-amount">
      Overall experience: <span>{{ workExperience }}</span>
    </p>
    <div class="experience-page__content" ref="content">
      <ExperienceSection
        v-for="(data, i) in ExperienceSections"
        :key="i"
        v-bind="data"
      ></ExperienceSection>
    </div>
  </div>
</template>

<script>
import { differenceInCalendarMonths } from "date-fns";
import ExperienceSection from "../components/ExperienceSection";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";

export default {
  components: {
    ExperienceSection,
  },
  methods: {
    downloadWithCSS() {
      domtoimage
        .toPng(this.$refs.content)
        .then(function (dataUrl) {
          var img = new Image();
          img.src = dataUrl;
          const doc = new jsPDF({
            orientation: "portrait",
            unit: "px",
            format: [600, 2000],
          });
          doc.addImage(img, "JPEG", 20, 20);
          doc.save("Alexander_Piskun.pdf");
        })
        .catch(function (error) {
          console.error("oops, something went wrong!", error);
        });
    },
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
          company: "Exaft",
          project: "Chekin",
          productLink: "https://chekin.com/",
          projectRole: "React Developer",
          period: "December 2020 – July 2021",
          technologies: [
            "TypeScript",
            "React",
            "React-router",
            "React-query",
            "Styled-components",
            "react-hook-form",
          ],
          accomplishments: [
            "Refactored more than 40000 lines of code to get rid of unnecessary copy-paste code and make more reusable components",
            "Created pages and complex features with cooperation with back-end",
          ],
        },
        {
          company: "SolveQ",
          project: "Diggity",
          productLink: "https://digitty.io/",
          projectRole: "React Developer",
          period: "July 2021 – December 2021",
          technologies: [
            "TypeScript",
            "React",
            "React-router",
            "React-query",
            "Styled-components",
            "react-hook-form",
          ],
          accomplishments: [
            "Refactored more than 40000 lines of code to get rid of unnecessary copy-paste code and make more reusable components",
            "Created reusable layout components",
            "Created pages and features with cooperation with back-end",
          ],
        },
        {
          company: "SolveQ",
          project: "Mittspor",
          productLink: "https://www.mittspor.com/",
          projectRole: "React Developer",
          period: "January 2022 – now",
          technologies: [
            "TypeScript",
            "React",
            "React-native",
            "Styled-components",
            "Storybook",
          ],
          accomplishments: ["Creating pages and components for a mobile app"],
        },
      ].reverse(),
    };
  },
  computed: {
    workExperience() {
      const monthsAmount = differenceInCalendarMonths(
        new Date(),
        new Date(2019, 9)
      );
      const years = Math.floor(monthsAmount / 12);
      const restMonths = monthsAmount - years * 12;

      return `${years} years ${restMonths} ${
        restMonths === 1 ? "month" : "months"
      }`;
    },
  },
};
</script>

<style lang='scss'>
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

.experience-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;

  &__download {
    background-color: transparent;
    border: none;
    outline: none;
    font-family: inherit;
    font-size: 1.5rem;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 30px;

    animation-name: social-shadow;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 30px;
    justify-items: center;
    width: 100%;
    padding: 40px;
  }

  &__experience-amount {
    font-size: 2rem;
    text-align: center;
  }
}
</style>
