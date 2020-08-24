import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    boardName: '',
    boardDescription: '',
    darkMode: false,
    tasks: [
      {
        id: 1,
        name: 'Зробити 8 задач на 7 Кю',
        description: 'description for task 1',
        status: 'todo',
        complexity: 6,
        priority: 'low',
        editing: false
      },
      {
        id: 2,
        name: 'Зробити 8 задач на 7 Кю',
        description: 'description for task 12',
        status: 'progress',
        complexity: 6,
        priority: 'low',
        editing: false
      }
    ]
  },
  getters: {
    allTasks (state) {
      return state.tasks
    }
  },
  mutations: {
    setBoardName (state, boardName) {
      state.boardName = boardName
    },
    setBoardDescription (state, boardDescription) {
      state.boardDescription = boardDescription
    },
    addTask (state, task) {
      state.tasks.push({
        id: task.id,
        name: task.name,
        description: task.description,
        status: task.status,
        complexity: task.complexity,
        priority: task.priority,
        editing: false
      })
    },
    deleteTask (state, id) {
      const index = state.tasks.findIndex(item => item.id === id)

      state.tasks.splice(index, 1)
    },
    updateMode (state) {
      state.darkMode = !state.darkMode
    },
    updateTaskStatus: (state, { id, status }) => {
      const newTasks = state.tasks.map(task => task.id === id ? { ...task, status } : task)

      state.tasks = [...newTasks]
    }
  },
  actions: {
    setBoardName (context, boardName) {
      context.commit('setBoardName', boardName)
    },
    setBoardDescription (context, boardDescription) {
      context.commit('setBoardDescription', boardDescription)
    },
    addTask (context, task) {
      context.commit('addTask', task)
    },
    deleteTask (context, id) {
      context.commit('deleteTask', id)
    },
    updateTaskStatus (context, { id, status }) {
      context.commit('updateTaskStatus', { id, status })
    }
  }
})
