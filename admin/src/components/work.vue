<template lang="pug">
  div
    h3.work-section__title Страница 	&#171;Мои работы&#187;
    form(action="#", method="post").form
      h5.form-title Добавить работу
      input(type="text" required placeholder="Название проекта").form__field
      input(type="text" required placeholder="Технологии").form__field
      input(type="file").form__file
      .btn-wrap
        button(type="submit").btn Добавить

</template>
<script>

</script>

<style src="styles/work.scss" lang="scss" scoped></style>