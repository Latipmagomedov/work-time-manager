<template>
  <div class="task">
    <router-link
      v-slot="{ navigate }"
      :to="`/task/${task.id}`"
      custom
    >
      <div
        class="task__wrapper"
        @click="navigate"
      >
        <h3 class="task__title">
          {{ task.title }}
        </h3>
        <ul class="task__subtasks">
          <li
            v-for="subtask in subtasks"
            :key="subtask.id"
            class="task__subtask"
          >
            {{ subtask.title }}
          </li>
        </ul>

        <div class="task__progress">
          <span
            class="task__progress-bar"
            :style="{width: `${progress}%`}"
          />
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { ITask } from "@/types/task";

const props = defineProps<{
  task: ITask
}>();

const subtasks = computed(() => {
  return props.task.subtasks.filter((subtask, index) => index < 3);
});

const progress = computed(() => {
  const length = subtasks.value.length;
  const completed = subtasks.value.filter(item => item.completed);

  return completed.length / length * 100;
});
</script>

<style scoped lang="scss">
.task {
  padding: 16px;
  border-radius: 12px;
  background-color: $dark-2;

  &__wrapper {
    width: 100%;
  }

  &__title {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.3em;
    font-size: 14px;
    font-weight: 700;
  }

  &__subtasks {
    height: 46px;
    margin-top: 8px;
    list-style: none;
  }

  &__subtask {
    color: $light-grey-3;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    font-size: 12px;

    &:not(:first-child) {
      margin-top: 2px;
    }

    &_completed {
      text-decoration: line-through;
    }
  }

  &__progress {
    width: 100%;
    height: 10px;
    margin-top: 14px;
    border-radius: 10px;
    overflow: hidden;
    background-color: $dark;
  }

  &__progress-bar {
    display: block;
    height: 100%;
    border-radius: 10px;
    background-color: $brand;
    transition: .3s;
  }
}
</style>
