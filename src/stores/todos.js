import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos-store", {
  state: () => {
    return {
      todos: [],
    };
  },
  actions: {
    async getAllTodos(activityId) {
      await fetch(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${activityId}`
      )
        .then(async (res) => await res.json())
        .then((json) => (this.todos = json.data));
    },
    async createTodo(data) {
      await fetch(`https://todo.api.devcode.gethired.id/todo-items`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      })
        .then(async () => await this.getAllTodos(data.activity_group_id))
        .catch((e) => console.log(e));
    },
    async removeTodo(todoId, activityId) {
      await fetch(`https://todo.api.devcode.gethired.id/todo-items/${todoId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then(() => this.getAllTodos(activityId));
    },
  },
});
