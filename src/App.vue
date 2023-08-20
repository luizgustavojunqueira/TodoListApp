<script>

import ToDoList from './components/ToDoList.vue'
import ToDoInput from './components/ToDoInput.vue'

const filters = {
  all: (todos) => todos,
  active: (todos) => todos.filter((todo) => !todo.completed),
  completed: (todos) => todos.filter((todo) => todo.completed)
}

export default {
  components: {
    ToDoList,
    ToDoInput
  },
  data() {
    return {
      todos: [],
      filter: 'all',
      id: 0,
      addingTodo: false
    }
  },
  methods: {
    addTodo(title, desc) {
      let todo = { id: this.id++, title: title, completed: false, desc: desc}
      this.todos.push(todo)
      this.saveTodos()
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
      <button id="addButton" @click="addingTodo = true"> Criar nova tarefa</button>
    </section>

    <section v-if="addingTodo == true" :class="{ 'overlay': addingTodo }">
      <ToDoInput v-if="addingTodo == true" @closeMenu="addingTodo = false" @newTodo="(title, desc) => addTodo(title, desc)"/>
    </section>

    <ToDoList :todos="filteredTodos" @removeTodo="(t) => removeTodo(t)" @removeAll="removeAll"
      @removeActive="removeActive" @removeCompleted="removeCompleted" @changeFilter="(f) => filter = f" />

  </main>
</template>