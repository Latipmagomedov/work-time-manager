<template>
  <button
    class="v-button"
    :class="`v-button_${color}`"
    :disabled="disabled"
  >
    <span
      v-if="$slots.iconLeft"
      class="v-button__icon-left"
    >
      <slot name="iconLeft" />
    </span>
    <span
      v-if="$slots.icon"
      class="v-button__icon"
    >
      <slot name="icon" />
    </span>
    {{ label }}
  </button>
</template>

<script setup lang="ts">
interface Props {
  label?: string,
  disabled?: boolean,
  color?: string
}

withDefaults(defineProps<Props>(), {
  label: "",
  disabled: false,
  color: "brand"
});
</script>

<style scoped lang="scss">
.v-button {
  height: 48px;
  padding: 0 25px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  transition: .1s;

  &_brand {
    background-color: $brand;

    @media (min-width: $tablet) {
      &:hover {
        background-color: rgba($brand, 0.8);
      }
    }

    &:active {
      background-color: rgba($brand, 0.7);
    }
  }

  &_blue {
    background-color: $blue;

    @media (min-width: $tablet) {
      &:hover {
        background-color: rgba($blue, 0.8);
      }
    }

    &:active {
      background-color: rgba($blue, 0.7);
    }
  }

  &_red {
    background-color: $red;

    @media (min-width: $tablet) {
      &:hover {
        background-color: rgba($red, 0.8);
      }
    }

    &:active {
      background-color: rgba($red, 0.7);
    }
  }

  &_green {
    background-color: $green;

    @media (min-width: $tablet) {
      &:hover {
        background-color: rgba($green, 0.8);
      }
    }

    &:active {
      background-color: rgba($green, 0.7);
    }
  }

  &_grey {
    background-color: $light-grey-1;

    @media (min-width: $tablet) {
      &:hover {
        background-color: rgba($light-grey-1, 0.8);
      }
    }

    &:active {
      background-color: rgba($light-grey-1, 0.7);
    }
  }

  &_disabled {
    background-color: #c2d3f4 !important;
    cursor: no-drop;
  }

  &__icon-left {
    margin-right: 4px;
    margin-top: 3px;
  }

  &__icon {
    margin-top: 3px;
  }
}
</style>
