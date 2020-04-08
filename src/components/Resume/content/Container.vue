<template>
  <v-card color="grey lighten-4" light>
    <v-card-text>
      <content-section title="Who am I?">I'm a software developer, mathematician and father of two.</content-section>

      <content-section v-if="prouds" title="What am I proud of?">
        <v-layout v-for="(proud, i) in prouds" :key="i">
          <v-flex md1 xs3>
            <v-icon right>{{ proud.icon }}</v-icon>
          </v-flex>
          <v-flex md11 xs9>
            <p>
              <strong>{{ proud.text }}</strong>
              <br />
              <small>{{ proud.source }}</small>
            </p>
          </v-flex>
        </v-layout>
      </content-section>

      <content-section v-if="educations" title="Education">
        <v-layout v-for="(education, i) in educations" :key="i">
          <v-flex md4>{{ education.from }} - {{ education.to }}</v-flex>
          <v-flex md8>
            <strong v-if="education.title">{{ education.title }}</strong>
            <div v-if="education.location">
              <i>{{ education.location }}</i>
            </div>
            <div v-if="education.description">{{ education.description }}</div>
          </v-flex>
        </v-layout>
      </content-section>

      <content-section v-if="skills" id="to-timeline" title="Skills">
        <template slot="actions">(% are relative not absolute)</template>
        <v-layout wrap>
          <template v-for="(skill, i) in skills">
            <v-flex v-if="skill.divider" :key="i" md12 xs12 mb-4 />
            <v-flex v-else :key="i" md6 xs12>
              <div class="mr-2 ml-2">
                <div class="align-center">
                  <v-icon small>{{ skill.icon }}</v-icon>
                  {{ skill.title }}
                </div>
                <v-progress-linear
                  class="progress"
                  color="secondary"
                  height="3"
                  :value="skill.value"
                />
              </div>
            </v-flex>
          </template>
        </v-layout>
      </content-section>
    </v-card-text>
  </v-card>
</template>

<script>
import ContentSection from "@/components/Resume/content/Section";
export default {
  name: "MainContent",
  components: { ContentSection },
  data: () => ({
    prouds: [
      {
        icon: "mdi-help-rhombus-outline",
        text: "Something interesting about me!",
        source: "(it's not very interesting)"
      }
    ],
    educations: [
      {
        from: "2007",
        to: "2010",
        title: "M.S., Mathematics",
        location: "University of Massachusetts, Amherst",
        description: ""
      },
      {
        from: "2003",
        to: "2006",
        title: "B.S., Mathematics",
        location: "University of Massachusetts, Amherst",
        description: ""
      }
    ],
    skills: [
      {
        title: "JavaScript",
        icon: "mdi-language-javascript",
        value: 90
      },
      {
        title: "Node.js",
        icon: "mdi-nodejs",
        value: 90
      },
      {
        title: "Vue.js Framework",
        icon: "mdi-vuejs",
        value: 75
      },
      { divider: true },
      {
        title: "Web Application Security",
        icon: "mdi-shield-lock",
        value: 80
      },
      {
        title: "Test Driven Development",
        icon: "mdi-test-tube",
        value: 26
      },
      {
        title: "Continuous Integration / Continuous Delivery",
        icon: "mdi-truck-fast",
        value: 35
      },
      {
        title: "Git",
        icon: "mdi-git",
        value: 70
      },
      { divider: true },
      {
        title: "Leadership",
        icon: "mdi-account-group",
        value: 68
      }
    ]
  })
};
</script>

<style scoped>
.title {
  border-bottom: 2px #bfbfbf solid;
  line-height: 1.5 !important;
}
.progress {
  margin-top: 0.1rem;
}
</style>
