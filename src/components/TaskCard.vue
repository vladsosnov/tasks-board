<template>
  <router-link
    :to="{ name: 'Main', params: { id: taskItem.id } }"
    :class="{ 'task-card--dark': isDarkModeOn }"
    class="task-card animate__animated animate__fadeIn animate__fast"
  >
    <div
      class="task-card-wrapper"
      @click="openCurrentModal"
    >
      <p class="task-card__text task-card__name">
        {{ taskItem.name }}
      </p>
      <div class="task-card-detail">
        <span class="task-card__text task-card-detail__id">
          Id-{{ taskItem.id }}
        </span>
        <span class="task-card__text task-card-detail__complexity">
          complexity-{{ taskItem.complexity }}
        </span>
        <span class="task-card__text task-card-detail__priority">
          priority-{{ taskItem.priority }}
        </span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'TaskCard',
  props: {
    taskItem: {
      type: Object,
      required: true
    }
  },
  computed: {
    isDarkModeOn () {
      return this.$store.state.darkMode
    }
  },
  methods: {
    openCurrentModal () {
      this.$emit('open-task-detail-modal', this.taskItem)
    }
  }
}
</script>

<style lang="scss" scoped>
.task-card {
  position: relative;
  margin: .5rem;
  box-shadow: 0 1px .125rem 1px #bbb;
  background-color: #fff;
  text-decoration: none;
  transition: all .2s ease;

  &:hover {
    background-color: #ebecf0;
  }

  .task-card-wrapper {
    padding: .5rem;
    padding-left: .75rem;
    display: flex;
    flex-direction: column;
  }

  &--dark {
    background-color: #000;

    div {
      span,
      p {
        color: #fff;
      }
    }

    &:hover {
      background-color: #3a3a3a;
    }
  }

  &__text {
    color: #172b4d;
    line-height: 1.4;

    &--dark {
      color: #fff;
    }
  }

  .task-card-detail {
    display: flex;

    @media (max-width: 992px) {
      flex-wrap: wrap;
    }

    span {
      margin-right: 1rem;
    }

    &__name {
      margin-top: 0;
    }

    &__id {
      text-transform: uppercase;
    }
  }
}
</style>
