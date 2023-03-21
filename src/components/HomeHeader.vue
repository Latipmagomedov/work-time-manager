<template>
  <header class="header">
    <div class="header__content">
      <p class="header__text">
        Hi, Latip
      </p>
      <h1 class="header__title">
        Продуктивного дня
      </h1>
    </div>

    <img
      src="https://bbts1.azureedge.net/images/p/full/2021/10/9b79622a-3a0b-4109-99f8-2ab5d1cefb5b.jpg"
      alt="Latip"
      class="header__logo"
    >
  </header>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__text {
    font-size: 18px;
  }

  &__title {
    margin-top: 3px;
    font-size: 20px;
  }

  &__logo {
    width: 42px;
    height: 42px;
    border-radius: 100%;
    object-fit: cover;
  }
}
</style>
