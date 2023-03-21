<template>
  <div class="home">
    <HomeHeader />
    <VInput
      v-model="search"
      class="home__search"
      placeholder="Поиск задач"
    >
      <template #iconLeft>
        <img
          src="@/assets/images/icons/search.svg"
          class="home__search-icon"
          alt="search"
        >
      </template>
    </VInput>
    <TaskProgress
      :progress="progress"
      class="home__task-progress"
    />
    <div class="home__tasks">
      <TaskBlock
        v-for="task in taskList"
        :key="task.id"
        :task="task"
        class="home__task"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import tasks from "@/api/tasks";
import { useTasksStore } from "@/store/tasks";
import HomeHeader from "@/components/HomeHeader.vue";
import VInput from "@/components/UI/VInput.vue";
import TaskProgress from "@/components/TaskProgress.vue";
import TaskBlock from "@/components/TaskBlock.vue";
import { computed, onMounted, ref } from "vue";
import { IProgress, ITask } from "@/types/task";

const storeTasks = useTasksStore();

const search = ref("");

const taskList = computed<ITask[]>(() => {
  return storeTasks.tasks.filter(task => task.title.indexOf(search.value) !== -1);
});
const progress = computed<IProgress>(() => {
  const length = storeTasks.tasks.length;
  const completed = storeTasks.tasks.filter(task => task.completed);

  return {
    length: length,
    completed: completed.length
  };
});

const getTasks = async () => storeTasks.tasks = await tasks.getTasks();

onMounted(() => getTasks());
</script>

<style scoped lang="scss">
.home {
  padding-top: 22px;

  &__search {
    margin-top: 20px;
  }

  &__search-icon {
    opacity: .5;
  }

  &__task-progress {
    width: 100%;
    margin-top: 16px;
  }

  &__tasks {
    width: 100%;
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 8px;
    grid-row-gap: 8px;

    @media (max-width: $tablet) {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
