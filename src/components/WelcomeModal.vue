<template>
  <div
    v-show="isWelcomeModalVisible"
    :class="{ 'animate__animated animate__zoomOut': closeModal }"
    class="welcome-modal"
  >
    <div class="animate__animated animate__fadeIn">
      <h2 class="welcome-modal__title">
        Welcome to tasks planner!
      </h2>
      <p class="welcome-modal__description">
        Here you can divide a large project into
        small subtasks and watch their progress.
      </p>
      <input
        v-model="newBoardName"
        class="welcome-modal__input"
        placeholder="Board name, ex. Online shop"
        type="text"
      >
      <textarea
        v-model="newBoardDescription"
        class="welcome-modal__textarea"
        placeholder="Board description, ex. Apple shop with technical things"
        type="text"
        rows="4"
      />
      <button
        id="welcome-modal__submit-button"
        class="welcome-modal__submit-button"
        @click.prevent="setBoardInfo"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WelcomeModal',
  data () {
    return {
      newBoardName: '',
      newBoardDescription: '',
      isWelcomeModalVisible: true,
      closeModal: false
    }
  },
  methods: {
    setBoardInfo () {
      if (this.newBoardName.trim().length === 0 || this.newBoardDescription.trim().length === 0) {
        alert('All fields must be filled!')

        return
      }

      if (this.newBoardName.length > 30) {
        alert('Max length of title is 30')

        return
      }

      if (this.newBoardDescription.length > 80) {
        alert('Max length of description is 80')

        return
      }

      this.$store.dispatch('setBoardName', this.newBoardName)
      this.$store.dispatch('setBoardDescription', this.newBoardDescription)
      this.closeModal = true

      setTimeout(() => {
        this.isWelcomeModalVisible = false
      }, 600)
    }
  }
}
</script>

<style lang="scss" scoped>
.welcome-modal {
  position: fixed;
  width: 100%;
  height: 100%;
  padding-top: 6rem;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;

  @media (max-width: 992px) {
    padding-top: 3rem;
  }

  div {
    max-width: 48rem;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 .375rem 0 #333;

    @media (max-width: 768px) {
      margin: 0 1rem;
    }
  }

  &__title {
    margin-top: 0;
    margin-bottom: 1.25rem;
    font-size: 2rem;
    color: #2c2c96;
    text-align: center;

    @media (max-width: 600px) {
      font-size: 1.5rem;
    }
  }

  &__description {
    max-width: 30rem;
    margin-top: 0;
    margin-bottom: 1rem;
    font-size: 1.1rem;
    text-align: center;
  }

  &__input,
  &__textarea {
    width: 55%;
    margin-bottom: 1rem;
    padding: .5rem;
    text-align: center;
    border-radius: .5rem;
    border: 1px solid #000;

    &:focus {
      outline: none;
    }
  }

  &__textarea {
    resize: none;
  }

  &__submit-button {
    border-radius: 3rem;
    padding: .5rem 4rem;
    background-color: #38b063;
    color: #fff;
    transition: background-color .2s ease;
    border: none;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #278649;
    }
  }
}
</style>
