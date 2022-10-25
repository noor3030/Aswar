<template>
  <div class="home">
    <v-col>
      <v-img
        src="../assets/aswar-logo.png"
        max-width="200"
        class="mx-auto"
        style="margin-top: 100px"
      >
      </v-img>
      <v-card max-width="900" class="mx-auto pa-16 rounded-lg" flat>
        <v-card-title primary-title class="justify-center">
          <h2 style="color: #005885">Welcome to Aswar system dashboard</h2>
          <p class="mt-5 font-weight-bold text--disabled">
            Enter your credentials to access your account.
          </p>
        </v-card-title>
        <v-form class="pa-5">
          <v-text-field
            :rules="emailValidation"
            color="#0099dc"
            type="email"
            prepend-inner-icon="mdi-email"
            outlined
            single-line
            label="Email"
          ></v-text-field>
          <v-text-field
            :rules="passwordValidation"
            color="#0099dc"
            prepend-inner-icon="mdi-lock"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            hint="At least 8 characters"
            class="pt-5"
            @click:append="showPassword = !showPassword"
            outlined
            single-line
            label="Password"
          ></v-text-field>
        </v-form>
        <v-row align="center" justify="center" class="pt-5">
          <v-btn color="#0075a9" class="pa-8" rounded x-large>
            <span style="color: #fff; font-size: 20px; text-transform: none"
              >Sign In</span
            >
          </v-btn></v-row
        >
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Validation } from "@/types/validation";
import { emailValidation, passwordValidation } from "../utils/Validation";
interface LoginData {
  showPassword: boolean;
  emailValidation: Validation;
  passwordValidation: Validation;
}
export default Vue.extend({
  data(): LoginData {
    return {
      showPassword: false,
      emailValidation: emailValidation,
      passwordValidation: passwordValidation,
    };
  },
});
</script>
<style>
.v-icon {
  color: #0075a9 !important;
}
.v-label {
  color: #c2cbe1 !important;
  font-size: 20px;
  font-weight: 50px;
  margin-left: 10px;
}

.v-text-field--outlined fieldset {
  color: #e0e0e0 !important;
  border-radius: 10px;
  padding: 20px;
}
</style>
