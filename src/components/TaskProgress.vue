<template>
  <div class="task-progress">
    <div class="task-progress__content">
      <h2 class="task-progress__title">
        Прогресс задач
      </h2>
      <p class="task-progress__subtitle">
        13/23 выполнено
      </p>
      <span class="task-progress__date">16 января</span>
    </div>

    <radial-progress-bar
      :diameter="90"
      :animate-speed="1000"
      :completed-steps="completedSteps"
      :total-steps="totalSteps"
      :stroke-width="8"
      :inner-stroke-width="8"
      start-color="#1771F1"
      stop-color="rgba(113, 77, 217)"
      inner-stroke-color="#131313"
    >
      <div class="task-progress__progress-text">
        {{ precent }}%
      </div>
    </radial-progress-bar>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import RadialProgressBar from "vue3-radial-progress";

const completedSteps = ref(4);
const totalSteps = ref(10);

const precent = computed(() => {
  return completedSteps.value / totalSteps.value * 100;
});

</script>

<style scoped lang="scss">
.task-progress {
  padding: 16px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: $dark-2;

  &__title {
    font-size: 16px;
    font-weight: 700;
  }

  &__subtitle {
    margin-top: 4px;
    font-size: 14px;
    color: $light-grey-3;
  }

  &__date {
    display: inline-block;
    margin-top: 22px;
    padding: 5px 10px;
    border-radius: 50px;
    background-color: $blue;
  }

  &__progress-text {
    font-size: 20px;
    font-weight: 700;
  }
}
</style>
