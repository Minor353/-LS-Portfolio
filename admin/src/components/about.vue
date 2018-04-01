<template lang="pug">
  .about-section
    h1.about-section__title Страница &#171;Обо мне&#187;
    .skills-wrap
      skills-list(
        v-for="skillType in skillsTypes"
        :key="skillType"
        :skillType="skillType"
        :skills="skills"
      )
    .btn-wrap
        button(type="submit").btn-save Сохранить

</template>
<script>
import { mapActions, mapGetters } from "vuex";
import skillsList from "./skillsList";
export default {
  components: {
    skillsList
  },
  data() {
    return {
      skillsTypes: ["Frontend", "Workflow", "Backend"]
    };
  },
  computed: {
    ...mapGetters(['skills'])
  },
  methods: {
    ...mapActions(['fetchSkills'])
  },
  mounted() {
    this.fetchSkills();
  }
};
</script>

<style src="styles/about.scss" lang="scss" scoped></style>