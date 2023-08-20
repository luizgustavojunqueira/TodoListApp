import { describe, test, expect } from "vitest"

import { mount } from "@vue/test-utils"

import ToDo from "../ToDo.vue"

describe("todo.vue", () => {
    test("render correct style for completed", () => {
        const todo = {id: 0, title: "testing", completed: true}

        const wrapper = mount(ToDo, {
            props: { todo }
        })

        expect(wrapper.find("p").classes("line-through")).toBe(true)
    })

    test("display todo title", () => {
        const title = "testing title"
        const todo = {id: 0, title: title, completed: false}
        const wrapper = mount(ToDo, {
            props: { todo }
        })

        expect(wrapper.find("p").text()).toBe(title)
    })

    test("emits removeTodo event", async () => {
        const todo = {id: 0, title: "testing", completed: false}

        const wrapper = mount(ToDo, {
            props: { todo }
        })

        const removeButton = wrapper.find("button")
        await removeButton.trigger("click")

        expect(wrapper.emitted().removeTodo[0][0]).toEqual(todo)
    })
})