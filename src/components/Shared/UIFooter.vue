<template>
  <footer
    :class="{ 'ui-footer--dark': isDarkModeOn }"
    class="ui-footer"
  >
    <a
      href="https://github.com/vladsosnov"
      :class="{ 'ui-footer__author-link--dark': isDarkModeOn }"
      class="ui-footer__author-link"
      rel="noopener nofollow"
      target="_blank"
    >
      Create by Vlad Sosnov
      <img
        src="@/assets/images/github.svg"
        alt="logo"
      >
    </a>
  </footer>
</template>

<script>
export default {
  name: 'UIFooter',
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-footer {
  padding: .8rem 0;
  display: flex;
  justify-content: center;
  transition: all .2s ease;

  &--dark {
    background-color: #000;
  }

  &__author-link {
    display: flex;
    align-items: center;
    color: #172b4d;
    text-decoration: none;

    img {
      max-width: 1.25rem;
      margin-left: .5rem;
    }

    &--dark {
      color: #fff;
    }
  }
}
</style>
