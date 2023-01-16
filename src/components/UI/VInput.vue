<template>
  <div
    class="v-input"
    :class="{
      'v-input_error': error,
      'v-input_border': border,
      'v-input_disabled': disabled,
    }"
  >
    <span
      v-if="$slots.iconLeft"
      class="v-input__icon-left"
    >
      <slot name="iconLeft" />
    </span>
    <input
      v-model="inputVal"
      :type="type"
      class="v-input__input"
      :placeholder="placeholder"
      :disabled="disabled"
    >
    <span
      v-if="$slots.iconRight"
      class="v-input__icon-right"
    >
      <slot name="iconRight" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  modelValue?: string,
  placeholder?: string,
  type?: string,
  disabled?: boolean,
  border?: boolean,
  error?: boolean,
  bg?: string,
  color?: string
}>();

const emit = defineEmits(["update:modelValue"]);

const inputVal = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value)
});
</script>

<style scoped lang="scss">
.v-input {
  height: 48px;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  align-items: center;
  background-color: $dark-2;

  &_border {
    border: 2px solid $dark;
  }

  &_error {
    border: 2px solid $red;
  }

  &__icon-left {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 12px;
  }

  &__icon-right {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    cursor: pointer;
  }

  &__input {
    width: 100%;
    height: 100%;
    padding-left: 16px;
    background-color: transparent;
    color: #fff;
    font-size: 14px;
    font-weight: 400;

    &::placeholder {
      color: $grey;
      font-size: 16px;
      font-weight: 400;
    }

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  &_disabled &__input {
    color: $grey;
  }
}
</style>
