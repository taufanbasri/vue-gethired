import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos-store", {
  state: () => {
    return {
      todos: [],
      activity: {},
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
  },
});
