<template>
  <v-app style="background-color: #f0f8ff">
    <v-main>
      <router-view />
    </v-main>
    <Logout v-if="hide"/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Logout from "@/components/Logout.vue"
export default Vue.extend({
  name: "App",
  components:{Logout},

computed: {
    hide() {
      return this.$route.path !== "/"
    }}
  
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
div,
h3 {
  font-family: "Montserrat", sans-serif;
}

</style>
