<script>
export default {
    data() {
        return {
            title: '',
            desc: '',
            id: 0,
            emptyTitle: false
        }
    },
    methods: {
        addAndClose() {
            if (this.title !== '') {
                this.$emit('newTodo', this.title, this.desc)
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
        <input id="title-input" :class="{ 'row-2': emptyTitle }" v-model="title" placeholder="Título">

        <p id="emptyTitle-advise" v-if="emptyTitle"> É necessário um título </p>

        <textarea id="desc-input" :class="{ 'row-3': emptyTitle }" v-model="desc" placeholder="Descrição"> </textarea>
        <button id="input-addButton" :class="{ 'row-4': emptyTitle }" @click="addAndClose()"> Adicionar Tarefa </button>
        <button id="input-menu-close-button" @click="$emit('closeMenu')"> X </button>
    </section>
</template>