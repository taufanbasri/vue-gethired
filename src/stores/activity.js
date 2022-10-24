import { defineStore } from "pinia";

export const useActivityStore = defineStore("activity-store", {
  state: () => {
    return {
      activities: [],
    };
  },
  actions: {
    init() {
      this.getActivities();
    },
    getActivities() {
      fetch(
        "https://todo.api.devcode.gethired.id/activity-groups?email=taufanprasetyobasri@gmail.com"
      )
        .then((res) => res.json())
        .then((json) => (this.activities = json.data));
    },
  },
});
