<template>
  <div
    class="home"
    :style="$vuetify.breakpoint.mdAndDown ? 'padding: 20px;' : 'padding: 0px;'"
  >
    <v-row align="center" justify="center">
      <v-col xl="6" lg="6" sm="9">
        <v-img
          src="../assets/aswar-logo.svg"
          max-width="200"
          class="mx-auto"
          style="margin-top: 100px"
        >
        </v-img>
        <v-card
          class="mx-auto 6 rounded-xl mt-16"
          elevation="2"
          flat
          :style="
            $vuetify.breakpoint.mdAndDown ? 'padding: 10px;' : 'padding: 40px;'
          "
        >
          <v-card-title primary-title class="justify-center">
            <h2 style="color: #005885">Welcome to Aswar system dashboard</h2>
            <p class="mt-5 font-weight-bold text--disabled">
              Enter your credentials to access your account.
            </p>
          </v-card-title>
          <v-form class="pa-5" @submit.prevent="login" ref="form">
            <v-text-field
              v-model="user.email"
              :rules="emailValidation"
              color="#0099dc"
              type="email"
              prepend-inner-icon="mdi-email"
              outlined
              single-line
              placeholder="Email"
              name="email"
            ></v-text-field>
            <v-text-field
              v-model="user.password"
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
              placeholder="Password"
              name="password"
            ></v-text-field>
            <v-card-actions class="justify-center pt-5">
              <v-btn
                color="#0075a9"
                class="pa-8 rounded-xl"
                x-large
                block
                name="submit"
                type="submit"
                value="submit"
              >
                <span
                  style="
                    color: #fff;
                    font-size: 20px;
                    text-transform: none;
                    font-weight: bold;
                  "
                  >Sign In</span
                >
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import { Validation } from "@/types/validation";
import { emailValidation, passwordValidation } from "../utils/Validation";
import { DefaultService } from "@/client";
import { TOKEN } from "../utils/keys";
interface LoginData {
  showPassword: boolean;
  emailValidation: Validation;
  passwordValidation: Validation;
  user: any;
}
export default Vue.extend({
  data(): LoginData {
    const defaultUser = Object.freeze({
      password: "",
      email: "",
    });
    return {
      showPassword: false,
      emailValidation: emailValidation,
      passwordValidation: passwordValidation,
      user: Object.assign({}, defaultUser),
    };
  },
  methods: {
    
    login() {
      DefaultService.loginAuthLoginPost({
        username: this.user.email,
        password: this.user.password,
      }).then((value) => {
        localStorage.setItem(TOKEN, value.access_token);
        this.$router.push("/products");
      });
    },
  },
});
</script>
<style>
.v-text-field .v-icon {
  color: #0075a9 !important;
}
#input-9,
#input-13 {
  color: #abb2b7 !important;
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
}

.v-text-field--outlined fieldset {
  color: #abb2b7 !important;
  border-radius: 10px;
  padding: 20px;
}
</style>
