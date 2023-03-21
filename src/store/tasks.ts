import { defineStore } from "pinia";
import { ref } from "vue";
import { ITask } from "@/types/task";

export const useTasksStore = defineStore("tasks", () => {
  const tasks = ref<ITask[]>([]);

  return { tasks };
});
