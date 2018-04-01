<template lang="pug">
  .skills-list
    .skills-title {{skillType}}
    ul.skills-item-wrap
      skills-item(
        v-for="skill in skills"
        v-if="convertSkillStringToNum(skillType) === skill.type"
        :key="skill.id"
        :skill="skill"
      )
    skill-input(
      :type="convertSkillStringToNum(skillType)"
    )
</template>
<script>
import skillsItem from "./skillsItem";
import skillInput from "./skillInput";

export default {
  components: { skillsItem, skillInput },
  props: {
    skillType: String,
    skills: Array
  },
  methods: {
    convertSkillStringToNum(skillGroupName) {
      switch (skillGroupName) {
        case "Frontend":
          return 1;
        case "Workflow":
          return 2;
        case "Backend":
          return 3;
      }
    }
  }
};
</script>

<style src="styles/about.scss" lang="scss" scoped></style>