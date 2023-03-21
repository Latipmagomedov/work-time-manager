<template>
  <div class="authorized-layout">
    <div class="authorized-layout__wrapper">
      <slot />
    </div>
    <TabBar class="authorized-layout__tab-bar" />
  </div>
</template>

<script setup lang="ts">
import TabBar from "@/components/TabBar.vue";
</script>

<style lang="scss">
.authorized-layout {
  padding-bottom: 120px;
  display: flex;

  &__wrapper {
    width: calc(90% - 250px);
    max-width: 900px;
    margin-left: 282px;

    @media (max-width: $tablet) {
      width: calc(100% - 200px);
      margin-left: 200px;
      padding: 0 16px;
    }

    @media (max-width: $mobile) {
      width: 100%;
      margin-left: 0;
    }
  }

  &__tab-bar {
    width: 250px;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;

    @media (max-width: $tablet) {
      width: 200px;
    }

    @media (max-width: $mobile) {
      top: auto;
      bottom: 0;
      width: 100%;
      height: auto;
    }
  }
}
</style>

