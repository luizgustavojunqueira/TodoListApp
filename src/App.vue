<script>

import ToDoList from './components/ToDoList.vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}

export default {
  components: {
    ToDoList
  },
  data() {
    return {
      newTodo: '',
      todos: [],
      filter: 'all',
      id: 0
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo !== "") {
        let todo = { id: this.id++, title: this.newTodo, completed: false }
        this.todos.push(todo)
        this.newTodo = ""
        this.saveTodos()
      }
    },
    removeTodo(t) {
      this.todos.splice(this.todos.indexOf(t), 1)
      this.saveTodos()
    },
    removeCompleted() {
      this.todos = filters.active(this.todos)
      this.saveTodos()
    },
    removeAll() {
      this.todos = []
      this.saveTodos()
    },
    removeActive() {
      this.todos = filters.completed(this.todos)
      this.saveTodos()
    },
    saveTodos() {
      localStorage.id = this.id
      localStorage.todos = JSON.stringify(this.todos)
    }
  },
  computed: {
    filteredTodos() {
      return filters[this.filter](this.todos)
    }
  },
  mounted() {
    if (localStorage.id) {
      this.id = localStorage.id
    }
    if (localStorage.todos) {
      this.todos = JSON.parse(localStorage.todos)
    }
  }
}
</script>

<template>
  <main id="main">

    <section id="input-section">

      <input id="todo-input" v-model="newTodo" placeholder="Tarefa..." @keyup.enter="addTodo">

      <button id="addButton" @click="addTodo"> Adicionar Tarefa</button>

    </section>

    <ToDoList :todos="filteredTodos" @removeTodo="(t) => removeTodo(t)" @removeAll="removeAll"
      @removeActive="removeActive" @removeCompleted="removeCompleted" @changeFilter="(f) => filter = f" />

  </main>
</template>