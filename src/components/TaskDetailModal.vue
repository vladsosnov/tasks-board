<template>
  <div
    v-if="isModalVisible"
    :class="{ 'animate__animated animate__zoomOut': closeModal }"
    class="task-detail-modal"
  >
    <div
      :class="{ 'task-detail-modal__content--dark': isDarkModeOn }"
      class="task-detail-modal__content content animate__animated animate__zoomIn animate__fast"
    >
      <span
        class="content__close-btn"
        @click="onModalVisible"
      >
        &times;
      </span>
      <div :class="{ 'content-text--dark': isDarkModeOn }">
        <p class="content__id">
          id - {{ taskItem.id }}
        </p>
        <p class="content__name">
          {{ taskItem.name }}
        </p>
        <p class="content__description">
          Description: <br>
          {{ taskItem.description }}
        </p>
        <UI-text-editor />
      </div>
      <div :class="{ 'content-text--dark': isDarkModeOn }">
        <p class="content__status">
          Status - {{ taskItem.status }}
        </p>
        <p class="content__complexity">
          complexity - {{ taskItem.complexity }}
        </p>
        <p class="content__priority">
          priority - {{ taskItem.priority }}
        </p>
        <button
          class="content__delete-button"
          @click="onDeleteTaskButtonClick(taskItem)"
        >
          Delete task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import UITextEditor from '@/components/Shared/UITextEditor'

export default {
  name: 'UIModal',
  components: {
    UITextEditor
  },
  props: {
    taskItem: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      modalVisible: true,
      closeModal: false
    }
  },
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    },
    isModalVisible () {
      return this.modalVisible
    }
  },
  methods: {
    onModalVisible () {
      this.closeModal = true

      setTimeout(() => {
        this.modalVisible = !this.modalVisible
      }, 600)
    },
    onDeleteTaskButtonClick (taskItem) {
      this.$store.dispatch('deleteTask', taskItem.id)
      this.onModalVisible()
    }
  }
}
</script>

<style lang="scss" scoped>
.task-detail-modal {
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

  &__content {
    position: relative;
    width: 60%;
    margin: auto;
    padding: 1.25rem;
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    border: 1px solid #888;
    border-radius: .375rem;
    transition: all .2s ease;
    box-shadow: 0 0 .375rem 0 #333;

    @media (max-width: 992px) {
      width: 85%;
    }

    &--dark {
      background-color: #000;
    }

    .content {
      &__close-btn {
        position: absolute;
        top: .25rem;
        right: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        color: #aaa;

        &:hover,
        &:focus {
          color: #000;
          text-decoration: none;
          cursor: pointer;
        }
      }

      &__id {
        margin-top: 0;
        font-size: .9rem;
        color: #6b778c;
        text-transform: uppercase;
      }

      &__name {
        margin-top: 0;
        font-size: 1.8rem;
        line-height: 1.2;
        font-weight: 600;
        color: #172b4d;
      }

      &__description {
        margin-top: 0;
        font-size: 1rem;
        font-weight: 600;
        letter-spacing: -.003rem;
        line-height: 1.5rem;
        color: #172b4d;
      }

      &__delete-button {
        margin-top: 4rem;
        padding: .5rem 1.5rem;
        font-weight: 600;
        color: #fff;
        border: none;
        border-radius: 3rem;
        box-shadow: 0 1px 2px #000;
        background-color: red;
        cursor: pointer;
        outline: none;
        transition: all .2s ease;

        &:hover {
          background-color: #c71e1e;
        }
      }
    }

    .content-text {
      &--dark {
        p {
          color: #fff;
        }
      }
    }
  }
}
</style>
