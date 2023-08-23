<script>
export default {
    props: ['todo', 'editingTodo'],
    data() {
        return {
            emptyTitle: false,
        }
    },
    methods: {
        addAndClose() {
            if (this.title !== '') {
                if(!this.editingTodo){
                    this.$emit('newTodo')
                }
                this.$emit('closeMenu')
            } else {
                this.emptyTitle = true
            }
        }
    },
    emits: ['newTodo', 'closeMenu']
}
</script>

<template>
    <section id="input-menu" :class="{ 'input-menu-4-rows': emptyTitle, 'input-menu-3-rows': !emptyTitle}">
        <input id="title-input" :class="{ 'row-2': emptyTitle }" v-model="todo.title" placeholder="Título">

        <p id="emptyTitle-advise" v-if="emptyTitle"> É necessário um título </p>

        <textarea id="desc-input" :class="{ 'row-3': emptyTitle }" v-model="todo.desc" placeholder="Descrição"> </textarea>
        <button id="input-addButton" :class="{ 'row-4': emptyTitle }" @click="addAndClose()"> {{ editingTodo ? 'Editar' : 'Adicionar Tarefaaaa' }} </button>
        <button id="input-menu-close-button" @click="$emit('closeMenu')"> X </button>
    </section>
</template>