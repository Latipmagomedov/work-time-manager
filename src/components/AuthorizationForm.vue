<template>
  <div class="authorization">
    <h1 class="authorization__title">
      {{ title }}
    </h1>

    <form
      class="authorization__form"
      @submit.prevent="submitForm"
    >
      <VInput
        v-model="form.username"
        placeholder="Логин"
        :error="v$.username.$error"
        class="authorization__inp"
      />

      <VInput
        v-model="form.password"
        type="password"
        placeholder="Пароль"
        :error="v$.password.$error"
        class="authorization__inp"
      />

      <VInput
        v-if="type === 'register'"
        v-model="form.confirmPassword"
        type="password"
        placeholder="Повторите пароль"
        :error="v$.confirmPassword.$error"
        class="authorization__inp"
      />
      <div class="authorization__errors">
        <p
          v-if="v$.username.$error && v$.username.$errors[0].$validator === 'minLength'"
          class="error-text"
        >
          Введите имя пользователя менее {{ userNameMinLength }} символов
        </p>
        <p
          v-if="v$.password.$error && v$.password.$errors[0].$validator === 'minLength'"
          class="error-text"
        >
          Введите пароль менее {{ passwordMinLength }} символов
        </p>
        <p
          v-if="v$.confirmPassword.$error && v$.confirmPassword.$errors[0].$validator === 'sameAsPassword'"
          class="error-text"
        >
          Пароли не совпадают
        </p>
      </div>

      <VButton
        v-if="type === 'login'"
        label="Войти"
        class="authorization__btn"
      />

      <VButton
        v-if="type === 'register'"
        label="Зарегистрироваться"
        class="authorization__btn"
      />

      <p
        v-if="type === 'login'"
        class="authorization__text"
      >
        Нет аккаунта ?
        <span
          class="authorization__text-btn"
          @click="toggleForm('register')"
        >
          Зарегистрируйтесь
        </span>
      </p>

      <p
        v-if="type === 'register'"
        class="authorization__text"
      >
        Есть аккаунт ?
        <span
          class="authorization__text-btn"
          @click="toggleForm('login')"
        >
          Авторизуйтесь
        </span>
      </p>
    </form>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/store/auth";
import { useVuelidate } from "@vuelidate/core";
import { useNotification } from "@kyvg/vue3-notification";
import { required, minLength, alphaNum } from "@vuelidate/validators";
import { IFormRegister } from "@/types/auth";

import auth from "@/api/auth";
import VInput from "@/components/UI/VInput.vue";
import VButton from "@/components/UI/VButton.vue";

const router = useRouter();
const store = useAuthStore();
const { notify } = useNotification();

const type = ref("register"); // login | register
const title = computed(() => type.value === "login" ? "Авторизация" : "Регистрация");

const form: IFormRegister = reactive({
  username: "",
  password: "",
  confirmPassword: ""
});

const userNameMinLength = 5;
const passwordMinLength = 8;
const requiredConfirmPassword = (val: string) => type.value === "register" ? val : true;
const sameAsPassword = (val: string) => type.value === "register" ? form.password === val : true;

const rules = {
  username: {
    required,
    minLength: minLength(userNameMinLength)
  },
  password: {
    required,
    alphaNum,
    minLength: minLength(passwordMinLength)
  },
  confirmPassword: {
    requiredConfirmPassword,
    sameAsPassword: sameAsPassword
  }
};
const v$ = useVuelidate(rules, form);

const formReset = () => {
  form.username = "";
  form.password = "";
  form.confirmPassword = "";
};
const toggleForm = (value: string) => {
  type.value = value;
  formReset();
};

const login = async () => {
  const response = await auth.login(form);

  if (!response.success) {
    notify({
      title: "Ошибка авторизации",
      text: response.message
    });
  } else {
    await store.auth(response.message);
    await router.push("/");
  }
};
const register = async () => {
  const response = await auth.register(form);

  if (!response.success) {
    notify({
      title: "Ошибка регистрации",
      text: response.message
    });
  } else {
    type.value = "login";
  }
};

const submitForm = async () => {
  const validate = await v$.value.$validate();
  if (!validate) return;

  if (type.value === "login") await login();
  if (type.value === "register") await register();
};
</script>

<style scoped lang="scss">
.authorization {
  &__title {
    text-align: center;
    font-size: 24px;
  }

  &__form {
    margin-top: 22px;
  }

  &__inp {
    &:not(:first-child) {
      margin-top: 8px;
    }
  }

  &__errors {
    margin-top: 8px;
  }

  &__btn {
    width: 100%;
    margin-top: 16px;
  }

  &__text {
    margin-top: 20px;
    text-align: center;
    font-size: 16px;
  }

  &__text-btn {
    color: $brand;
  }
}
</style>
