<template>
  <div
    :class="{ 'main-view--dark': isDarkModeOn }"
    class="main-view"
  >
    <UI-header />
    <welcome-modal />
    <tasks-list />
    <UI-footer />
  </div>
</template>

<script>
import UIHeader from '@/components/Shared/UIHeader'
import WelcomeModal from '@/components/WelcomeModal'
import TasksList from '@/components/TasksList'
import UIFooter from '@/components/Shared/UIFooter'

export default {
  name: 'TwoLists',
  components: {
    UIHeader,
    WelcomeModal,
    TasksList,
    UIFooter
  },
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    }
  }
}
</script>

<style lang="scss" scoped>
.main-view {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all .2s ease;

  &--dark {
    background-color: #000;
  }
}
</style>
