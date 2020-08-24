<template>
  <header
    :class="{ 'ui-header--dark': isDarkModeOn }"
    class="ui-header"
  >
    <div>
      <h2
        :class="{ 'ui-header__name--dark': isDarkModeOn }"
        class="ui-header__name"
      >
        {{ boardrName }}
      </h2>
      <p
        :class="{ 'ui-header__name--dark': isDarkModeOn }"
        class="ui-header__description"
      >
        {{ boardDescription }}
      </p>
    </div>
    <p
      :class="{ 'ui-header__mode-switch--dark': isDarkModeOn }"
      class="ui-header__mode-switch"
      @click="toggleDarkMode"
    >
      <img
        v-if="isDarkModeOn"
        src="@/assets/images/light-mode.svg"
        alt="Dark mode"
      >
      <img
        v-else
        src="@/assets/images/dark-mode.svg"
        alt="Light mode"
      >
    </p>
  </header>
</template>

<script>
export default {
  name: 'UIHeader',
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    },
    boardrName () {
      return this.$store.state.boardName
    },
    boardDescription () {
      return this.$store.state.boardDescription
    }
  },
  methods: {
    toggleDarkMode () {
      this.$store.commit('updateMode')
    }
  }
}
</script>

<style lang="scss" scoped>
.ui-header {
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all .2s ease;

  &--dark {
    background-color: #000;
  }

  &__name,
  &__description {
    max-width: 360px;
    margin: 0;
    word-break: break-word;

    &--dark {
      color: #fff;
    }
  }

  &__name {
    margin-bottom: .5rem;
  }

  &__mode-switch {
    margin: 0;
    cursor: pointer;

    img {
      max-width: 3.125rem;
    }

    &--dark {
      color: #fff;
    }
  }
}
</style>
