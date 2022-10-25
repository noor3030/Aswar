<template>
  <v-app style="background-color: #f0f7ff">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  data: () => ({
    //
  }),
});
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
.v-btn__content,
h1,
h2,
p,
.v-label {
font-family: 'Roboto', sans-serif;
}
</style>
