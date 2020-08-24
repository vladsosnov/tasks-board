<template>
  <div
    :class="{ 'tasks-list--dark': isDarkModeOn }"
    class="tasks-list"
  >
    <div
      :class="{ 'tasks-list__title--dark': isDarkModeOn }"
      class="tasks-list__title"
    >
      <h2
        v-for="key in taskGroupKeys"
        :key="key"
        :class="[`title title--${key}`, darkModeTitleClass]"
      >
        {{ key }}
      </h2>
    </div>
    <div
      :class="{ 'tasks-list__roster--dark': isDarkModeOn }"
      class="tasks-list__roster roster"
    >
      <draggable
        v-for="(taskGroup, index) in taskGroups"
        :key="index"
        :value="taskGroup"
        :class="{ 'roster__field--dark': isDarkModeOn }"
        group="tasksGroup"
        class="roster__field"
        @change="e => onChange(e, index)"
      >
        <task-card
          v-for="task in taskGroup"
          :key="task.id"
          :task-item="task"
          :class="`task--${task.status}`"
          @open-task-detail-modal="openTaskDetailModal"
        />
      </draggable>
    </div>
    <button
      class="tasks-list__add-task-btn"
      @click="onAddTaskModalBtnClick"
    />
    <task-create-modal v-if="isAddTaskModalVisible" />
    <task-detail-modal
      v-if="isTaskDetailModalVisible"
      :task-item="taskItems"
    />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import TaskCard from '@/components/TaskCard'
import TaskCreateModal from '@/components/TaskCreateModal'
import TaskDetailModal from '@/components/TaskDetailModal'

const TASKS_GROUPS_KEYS = ['todo', 'progress', 'testing', 'done']

export default {
  name: 'TasksList',
  components: {
    draggable,
    TaskCard,
    TaskCreateModal,
    TaskDetailModal
  },
  data () {
    return {
      isAddTaskModalVisible: false,
      isTaskDetailModalVisible: false,
      taskItems: []
    }
  },
  computed: {
    taskGroups () {
      return TASKS_GROUPS_KEYS.map(groupKey => this.$store.getters.allTasks.filter(task => task.status === groupKey))
    },
    taskGroupKeys () {
      return TASKS_GROUPS_KEYS
    },
    isDarkModeOn () {
      return this.$store.state.darkMode
    },
    darkModeTitleClass () {
      return this.isDarkModeOn ? 'title--dark' : ''
    }
  },
  methods: {
    openTaskDetailModal (currentItem) {
      this.taskItems = currentItem
      this.isTaskDetailModalVisible = !this.isTaskDetailModalVisible
    },
    onAddTaskModalBtnClick () {
      this.isAddTaskModalVisible = !this.isAddTaskModalVisible
    },
    log (str) {
      return (e) => { window.console.log(e, str) }
    },
    onChange (e, index) {
      if (e.added) {
        const id = e.added.element.id
        const status = TASKS_GROUPS_KEYS[index]

        this.$store.dispatch('updateTaskStatus', { id, status })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tasks-list {
  padding: 0 2rem;
  transition: all .2s ease;

  &--dark {
    background-color: #000;
  }

  &__title {
    padding: .5rem;
    padding-bottom: 0;
    display: flex;
    background-color: #dbe2ec;

    &--dark {
      background-color: #333;
    }

    .title {
      position: relative;
      flex: 1;
      margin: 0;
      padding: .5rem 0 .5rem .5rem;
      font-size: 1.5rem;
      background-color: #f4f5f7;

      &::first-letter {
        text-transform: uppercase;
      }

      &:not(:last-child) {
        margin-right: .5rem;
      }

      &--dark {
        color: #fff;
        background-color: #000;
      }

      &--todo {
        border: .25rem solid #fde4ae;
      }

      &--progress {
        border: .25rem solid #cbccfc;
      }

      &--testing {
        border: .25rem solid #ecccfd;
      }

      &--done {
        border: .25rem solid #cbf2b4;
      }
    }
  }

  &__roster {
    height: 75vh;
    padding: .5rem;
    display: flex;
    background-color: #dbe2ec;

    @media (max-width: 992px) {
      height: 70vh;
    }

    &--dark {
      background-color: #333;
    }

    .roster {
      &__field {
        display: flex;
        flex-direction: column;
        flex: 1;
        background-color: #f4f5f7;
        transition: all .2s ease;
        overflow-y: auto;

        &:not(:last-child) {
          margin-right: .5rem;
        }

        &--dark {
          background-color: #252525;
        }

        .task {
          &--todo {
            &::before {
              border-left: .25rem solid #fde4ae;
            }
          }

          &--progress {
            &::before {
              border-left: .25rem solid #cbccfc;
            }
          }

          &--testing {
            &::before {
              border-left: .25rem solid #ecccfd;
            }
          }

          &--done {
            &::before {
              border-left: .25rem solid #cbf2b4;
            }
          }

          &--todo::before,
          &--progress::before,
          &--testing::before,
          &--done::before {
            content: '';
            position: absolute;
            height: 100%;
          }
        }
      }
    }
  }

  &__add-task-btn {
    position: fixed;
    right: 2.7rem;
    bottom: 4.5rem;
    width: 50px;
    height: 50px;
    background-image: url('~@/assets/images/add-task.svg');
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: transform .2s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:focus {
      outline: none;
    }
  }
}
</style>
