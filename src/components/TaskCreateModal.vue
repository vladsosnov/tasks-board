<template>
  <div
    v-show="isTaskCreateModalVisible"
    :class="{ 'animate__animated animate__zoomOut': closeModal }"
    class="create-task-modal"
  >
    <div
      :class="{ 'create-task-modal__container--dark' : isDarkModeOn }"
      class="create-task-modal__container create-form animate__animated animate__zoomIn"
    >
      <h2
        :class="{ 'create-form__title--dark' : isDarkModeOn }"
        class="create-form__title"
      >
        Create new task
      </h2>
      <input
        v-model="taskName"
        type="text"
        class="create-form__input"
        placeholder="Task name"
      >
      <textarea
        v-model="taskDiscription"
        type="text"
        class="create-form__textarea"
        placeholder="Task description"
        rows="8"
      />
      <span
        :class="{ 'create-form__caption--dark' : isDarkModeOn }"
        class="create-form__caption"
      >
        Status
      </span>
      <select
        v-model="taskStatus"
        class="create-form__select"
        name="status"
      >
        <option
          value="todo"
        >
          Todo
        </option>
        <option value="progress">
          In progress
        </option>
        <option value="testing">
          Testing
        </option>
        <option value="done">
          Done
        </option>
      </select>
      <span
        :class="{ 'create-form__caption--dark' : isDarkModeOn }"
        class="create-form__caption"
      >
        Complexity
      </span>
      <select
        v-model="taskComplexity"
        class="create-form__select"
        name="complexity"
      >
        <option value="1">
          1
        </option>
        <option value="3">
          3
        </option>
        <option value="6">
          6
        </option>
        <option value="9">
          9
        </option>
      </select>
      <span
        :class="{ 'create-form__caption--dark' : isDarkModeOn }"
        class="create-form__caption"
      >
        Priority
      </span>
      <select
        v-model="taskPriority"
        class="create-form__select"
        name="priority"
      >
        <option value="low">
          Low
        </option>
        <option value="medium">
          Medium
        </option>
        <option value="high">
          High
        </option>
      </select>
      <span
        :class="{ 'create-form__close-btn--dark' : isDarkModeOn }"
        class="create-form__close-btn"
        @click="closeCreateModal"
      >
        &times;
      </span>
      <button
        class="create-form__submit"
        @click.prevent="onAddTastBtnClick"
      >
        Create new task
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TaskCreateModal',
  data () {
    return {
      taskId: 3,
      taskName: '',
      taskDiscription: '',
      taskStatus: '',
      taskComplexity: '',
      taskPriority: '',
      closeModal: false,
      isTaskCreateModalVisible: true
    }
  },
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    }
  },
  methods: {
    onAddTastBtnClick () {
      if (this.taskName.trim().length === 0 || this.taskDiscription.trim().length === 0) {
        alert('All field must be filled!')

        return
      }

      this.$store.dispatch('addTask', {
        id: this.taskId,
        name: this.taskName,
        description: this.taskDiscription,
        status: this.taskStatus,
        complexity: this.taskComplexity,
        priority: this.taskPriority
      })

      this.taskId++
      this.taskName = ''
      this.taskDiscription = ''
      this.taskStatus = ''
      this.taskComplexity = ''
      this.taskPriority = ''
    },
    closeCreateModal () {
      this.closeModal = true

      setTimeout(() => {
        this.isTaskCreateModalVisible = false
      }, 600)
    }
  }
}
</script>

<style lang="scss" scoped>
.create-task-modal {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 6rem;
  background-color: rgba(0, 0, 0, .4);
  z-index: 1;

  @media (max-width: 992px) {
    padding-top: 3rem;
  }

  .container {
    padding: 1.25rem;
    border-radius: .375rem;
  }

  &__container {
    position: relative;
    max-width: 35rem;
    margin: 0 auto;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    box-shadow: 0 0 .375rem 0 #333;

    &--dark {
      background-color: #000;
    }

    .create-form {
      &__title {
        margin-top: 0;

        &--dark {
          color: #fff;
        }
      }

      &__input,
      &__textarea {
        width: 96%;
        padding: .6rem;
        border: 1px solid #ccc;
        border-radius: .125rem;
        margin-bottom: .5rem;
      }

      &__textarea {
        resize: none;
      }

      &__select {
        width: 50%;
        padding: .6rem;
        border: 1px solid #ccc;
        border-radius: .125rem;
        margin-bottom: .5rem;
        cursor: pointer;
      }

      &__caption {
        font-weight: 500;
        margin-bottom: .25rem;

        &--dark {
          color: #fff;
        }
      }

      &__submit {
        margin: 1rem auto 0;
        padding: .5rem 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 3rem;
        background-color: #289828;
        color: #fff;
        cursor: pointer;
        transition: background .2s ease;
        outline: none;

        &:hover {
          background-color: #206f20;
        }
      }

      &__close-btn {
        position: absolute;
        right: .5rem;
        top: .25rem;
        color: #aaa;
        font-size: 1.5rem;
        font-weight: 700;

        &:hover,
        &:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }

        &--dark {
          &:hover {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
