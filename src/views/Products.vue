<template>
  <div class="pa-16">


    <v-data-table :headers="headers" :items="products" class="elevation-1">
    </v-data-table>
  </div>
</template>
<script lang="ts">
import { Product, ProductService } from "@/client";
import Vue from "vue";
interface ProductsData {
  headers: Array<{ text: string; value: string }>;
  products: Array<Product>;
}
export default Vue.extend({
  name: "App",

  data: (): ProductsData => ({
    headers: [
      { text: "Name", value: "name" },
      { text: "Creation Date", value: "creation_date" },
      { text: "Expiration Date", value: "expiration_date" },
      { text: "Picture", value: "image_url" },
    ],
    products: [],
  }),
  created() {
    ProductService.readProductGet().then((value) => {
      this.products = value;
    });
  },
});
</script>