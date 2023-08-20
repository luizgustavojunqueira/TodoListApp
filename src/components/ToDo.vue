<script>

export default {
    props: ['todo'],
    emits: ['removeTodo']
}
</script>

<template>
    <section id="todo">

        <p id="todo-text" :class="{ 'line-through': todo.completed }" @click="todo.completed = !todo.completed">
            {{ todo.title }}
        </p>

        <button class="removeButton borderless" @click="$emit('removeTodo', todo)"> X </button>
    </section>
</template>