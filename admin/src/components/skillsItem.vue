<template lang="pug">
    li.skill-wrap
      .skill-name {{skill.name}}
      .skill-value 
        input(type="text" :value="skill.percents").input-value
        span &#37; 
      .skill-btn
        button(type="button" @click="removeExistedSkill(skill.id)").btn Удалить
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    skill: Object
  },
  methods: {
    ...mapMutations(['removeSkill']),
    removeExistedSkill(skillId) {
      this.removeSkill(skillId);
    }
  }
};
</script>

<style src="styles/about.scss" lang="scss" scoped></style>