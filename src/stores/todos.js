import { defineStore } from "pinia";
import { useActivityStore } from "./activity.js";

export const useTodosStore = defineStore("todos-store", {
  state: () => {
    return {
      todos: [],
      activity: "",
    };
  },
  actions: {
    async getAllTodos(activityId) {
      const activityStore = useActivityStore();
      await activityStore
        .getActivityOne(activityId)
        .then((item) => (this.activity = item.title));

      const response = await fetch(
        `https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${activityId}`
      ).then(async (res) => await res.json());

      this.todos = response.data;

      return this.todos;
    },
    async createTodo(data) {
      const respose = await fetch(
        `https://todo.api.devcode.gethired.id/todo-items`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(data),
        }
      )
        .then(async (res) => res.json())
        .catch((e) => console.log(e));

      return (this.todos = [respose, ...this.todos]);
    },
    async removeTodo(todoId) {
      await fetch(`https://todo.api.devcode.gethired.id/todo-items/${todoId}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=utf-8",
        },
      }).then(
        () => (this.todos = this.todos.filter((item) => item.id !== todoId))
      );
    },
  },
});
