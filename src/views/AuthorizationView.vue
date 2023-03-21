<template>
  <div class="authorization">
    <div class="authorization__wrapper">
      <AuthorizationForm />
    </div>
  </div>
</template>

<script setup>
import AuthorizationForm from "@/components/AuthorizationForm.vue";
</script>

<style scoped lang="scss">
.authorization {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__wrapper {
    width: 100%;
    max-width: 450px;
    padding: 0 16px;
    margin: 0 auto;
  }
}
</style>
