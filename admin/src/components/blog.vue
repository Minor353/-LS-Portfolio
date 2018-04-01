<template lang="pug">
  div
    h3.blog-section__title Страница 	&#171;Блог&#187;
    form(action="#", method="post").form
      h5.form-title Добавить запись
      input(type="text" required placeholder="Название").form__field
      input(type="text" required placeholder="Дата").form__field
      textarea(name="massage" required placeholder="Содержание").form__area
      .btn-wrap
        button(type="submit").btn Добавить

</template>
<script>

</script>

<style src="styles/blog.scss" lang="scss" scoped></style>
