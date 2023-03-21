<template>
  <div class="app">
    <PopUpNotifications />
    <component :is="route.meta.layout || 'div'">
      <router-view />
    </component>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { useAuthStore } from "@/store/auth";
import PopUpNotifications from "@/components/PopUpNotifications.vue";

const route = useRoute()
useAuthStore();
</script>

<style lang="scss">
//
</style>
