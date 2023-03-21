<!--В router-link я использую
вместо стандартного <a> тег div чтобы не
было предпросмотра страницы при удерживании
на ссылке в браузерах safari,
это мне нужно чтобы мое pwa
выглядело максимально
как нативное приложение-->
<template>
  <div class="tab-bar">
    <div class="tab-bar__wrapper">
      <router-link
        v-for="link in links"
        :key="link.path"
        v-slot="{ navigate, isActive }"
        :to="link.path"
        custom
      >
        <div
          :class="['tab-bar__btn', {'tab-bar__btn_active': isActive}]"
          @click="navigate"
        >
          <img
            v-show="!isActive"
            class="tab-bar__icon"
            :src="link.icon"
            :alt="link.label"
          >
          <img
            v-show="isActive"
            class="tab-bar__icon"
            :src="link.iconActive"
            :alt="link.label"
          >

          <p class="tab-bar__label">
            {{ link.label }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
interface ILinks {
  path: string,
  label: string
  icon: string
  iconActive: string
}

const links: ILinks[] = [
  {
    path: "/",
    label: "Задачи",
    icon: require("@/assets/images/icons/tasks.svg"),
    iconActive: require("@/assets/images/icons/tasks-active.svg")
  },
  {
    path: "/favorites",
    label: "Избранное",
    icon: require("@/assets/images/icons/favorite.svg"),
    iconActive: require("@/assets/images/icons/favorite-active.svg")
  },
  {
    path: "/profile",
    label: "Профиль",
    icon: require("@/assets/images/icons/profile.svg"),
    iconActive: require("@/assets/images/icons/profile-active.svg")
  }
];
</script>

<style scoped lang="scss">
.tab-bar {
  padding: 40px 0 0 32px;
  border-radius: 0 30px 30px 0;
  background-color: $dark-2;

  @media (max-width: $mobile) {
    width: 100%;
    padding: 14px 28px 34px 28px;
    border-radius: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.11);
  }

  &__wrapper {
    height: 100%;

    @media (max-width: $mobile) {
      max-width: 440px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
    }
  }

  &__btn {
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 32px;
    }

    @media (max-width: $mobile) {
      flex-direction: column;

      &:not(:first-child) {
        margin-top: 0;
      }
    }
  }

  &__icon {
    width: 28px;

    @media (max-width: $mobile) {
      width: 24px;
    }
  }

  &__label {
    margin-left: 16px;
    font-size: 16px;
    font-weight: 500;

    @media (max-width: $mobile) {
      margin-left: 0;
      margin-top: 4px;
      font-size: 14px;
    }
  }

  &__btn_active &__label {
    color: $blue;
  }
}
</style>
