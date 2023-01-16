<template>
  <div class="home">
    <div class="container">
      <HomeHeader />
      <VInput
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
      <TaskProgress class="home__task-progress" />
      <div class="home__tasks">
        <TaskBlock class="home__task" />
        <TaskBlock class="home__task" />
        <TaskBlock class="home__task" />
        <TaskBlock class="home__task" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import HomeHeader from "@/components/HomeHeader.vue";
import VInput from "@/components/UI/VInput.vue";
import TaskProgress from "@/components/TaskProgress.vue";
import TaskBlock from "@/components/TaskBlock.vue";
</script>

<style scoped lang="scss">
.home {
  padding-top: 22px;

  &__search {
    width: 100%;
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
    margin-top: 16px;
    margin-left: -8px;
    display: flex;
    flex-wrap: wrap;
  }

  &__task {
    width: calc(50% - 8px);
    margin-left: 8px;
    margin-bottom: 8px;
  }
}
</style>
