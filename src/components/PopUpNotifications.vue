<template>
  <Notifications
    position="top center"
    width="100%"
  >
    <template #body="props">
      <div
        class="notification"
        :style="{backgroundColor: props.item.bg}"
      >
        <p class="notification__title">
          {{ props.item.title }}
        </p>
        <p class="notification__text">
          {{ props.item.text }}
        </p>
      </div>
    </template>
  </Notifications>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.notification {
  width: calc(100% - 32px);
  max-width: 480px;
  margin: 16px auto 0 auto;
  padding: 16px;
  border-radius: 12px;
  background-color: $red;

  &__title {
    font-size: 18px;
  }

  &__text {
    margin-top: 8px;
    font-size: 16px;
  }
}
</style>
