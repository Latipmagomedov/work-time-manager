import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useAuthStore = defineStore("auth", () => {
  const token = ref("");

  const auth = (value: string) => {
    token.value = value;
    localStorage.setItem("token", token.value);
  };

  onMounted(() => {
    const authToken = localStorage.getItem("token");
    if (authToken) token.value = authToken;
  });

  return {
    auth,
    token
  };
});
