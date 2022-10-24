import { defineStore } from "pinia";

export const useActivityStore = defineStore("activity-store", {
  state: () => {
    return {
      activities: [],
    };
  },
  actions: {
    async getActivities() {
      await fetch(
        "https://todo.api.devcode.gethired.id/activity-groups?email=taufanprasetyobasri@gmail.com"
      )
        .then(async (res) => await res.json())
        .then((json) => (this.activities = json.data));
    },
    async createActivity() {
      await fetch("https://todo.api.devcode.gethired.id/activity-groups", {
        method: "POST",
        body: JSON.stringify({
          title: "New Activity",
          email: "taufanprasetyobasri@gmail.com",
        }),
      }).then(async () => await this.getActivities());
    },
    async removeActivity(activityId) {
      await fetch(
        `https://todo.api.devcode.gethired.id/activity-groups/${activityId}`,
        {
          method: "DELETE",
        }
      ).then(async () => await this.getActivities());
    },
  },
});
