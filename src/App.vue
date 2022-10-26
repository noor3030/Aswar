<template>
  <v-app style="background-color: #f0f8ff">
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
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
.v-btn__content,
#input-9,
#input-13,
h1,
h2,
p,
.v-label,
span,
td,
div {
  font-family: "Montserrat", sans-serif;
}

</style>
