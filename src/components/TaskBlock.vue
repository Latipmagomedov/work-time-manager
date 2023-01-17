<template>
  <div class="task">
    <h3 class="task__title">
      Разработка проекта
    </h3>
    <p class="task__date">
      14.01.2023 - 23.05.2023
    </p>
    <ul class="task__subtasks">
      <li class="task__subtask">
        Написание ТЗ
      </li>
      <li class="task__subtask">
        Создание прототипов
      </li>
      <li class="task__subtask">
        Нарисовать дизайн
      </li>
    </ul>

    <div class="task__progress">
      <span class="task__progress-bar" />
    </div>
  </div>
</template>

<script setup lang="ts">
// import ITask from "@/types/task";
// defineProps<{
//   task: ITask
// }>();
</script>

<style scoped lang="scss">
.task {
  padding: 16px;
  border-radius: 12px;
  background-color: $dark-2;

  &__title {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 16px;
    font-weight: 700;
  }

  &__date {
    margin-top: 6px;
    color: $light-grey-3;
    font-size: 11px;
    font-weight: 500;
  }

  &__subtasks {
    margin-top: 8px;
    list-style: none;
  }

  &__subtask {
    color: $light-grey-3;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 10px;

    &:not(:first-child) {
      margin-top: 2px;
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
    width: 40%;
    border-radius: 10px;
    background-color: $brand;
  }
}
</style>
