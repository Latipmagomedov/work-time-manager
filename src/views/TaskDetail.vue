<template>
  <div class="task-detail">
    {{ task?.title }}
    <input
      v-model="task?.title"
      type="text"
      class="task-detail__title"
    >
  </div>
</template>

<script setup lang="ts">
import tasks from "@/api/tasks";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { ITask } from "@/types/task";

const route = useRoute();
const id = ref<number | null>(null);

const task = ref<ITask>();
const getTask = async () => {
  console.log(route.params.id);
  task.value = await tasks.getTask(id.value);
  console.log(task.value);
};

onMounted(() => {
  id.value = Number(route.params.id);
  getTask();
});
</script>

<style scoped lang="scss">
.task-detail {
}
</style>
