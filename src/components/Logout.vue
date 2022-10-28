<template>
  <div>
    <v-btn class="rounded-xl ma-10" large text @click="logout">
      <h2 style="color: #616161; font-size: 20px; text-transform: none">
        Logout
      </h2>
      <v-icon color="#616161"> mdi-exit-to-app</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { TOKEN } from "../utils/keys";
export default Vue.extend({
  methods: {
    logout() {
      localStorage.removeItem(TOKEN);
      this.$router.push("/");
    },
  },
});
</script>