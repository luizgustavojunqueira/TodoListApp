<script>

import ToDo from './ToDo.vue'

export default {
    components: {
        ToDo
    },
    props: ["todos"],
    emits: ['removeTodo', 'removeCompleted', 'removeActive', 'removeAll', 'changeFilter']
}

</script>

<template>
    <main id="todo-list" :class="{ 'overflow-y-scroll': todos.length > 10 }">

        <section id="operations-buttons">
            <button @click="$emit('changeFilter', 'all')">Mostrar Todos</button>
            <button @click="$emit('changeFilter', 'completed')">Mostrar Completos</button>
            <button @click="$emit('changeFilter', 'active')"> Mostrar Ativos</button>
            <button class="removeButton" @click="$emit('removeCompleted')"> Remover completos </button>
            <button class="removeButton" @click="$emit('removeAll')"> Remover todos </button>
            <button class="removeButton" @click="$emit('removeActive')"> Remover Ativos </button>
        </section>

        <ToDo v-for="t in todos" :todo="t" @removeTodo="(t) => $emit('removeTodo', t)" />

    </main>
</template>