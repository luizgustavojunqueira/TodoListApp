<script>

export default {
    data() {
        return {
            showDesc: false
        }
    },
    props: ['todo'],
    emits: ['removeTodo']
}
</script>

<template>
    <section id="todo-list-item">

        <section id="todo">
            <p id="todo-text" :class="{ 'line-through': todo.completed }" @dblclick="showDesc = !showDesc">
                {{ todo.title }}
            </p>
            
            <section id="todo-desc" :class="{'overflow-y-scroll': todo.desc.length > 106? true : false}" v-if="showDesc">
                <p> {{ todo.desc }}</p>
            </section>
        </section>


        <button id="completed-button" class="borderless" @click="todo.completed = !todo.completed"> <div v-if="todo.completed" id="checkmark"></div> </button>
        <button class="removeButton borderless" @click="$emit('removeTodo', todo)"> X </button>
    </section>
</template>