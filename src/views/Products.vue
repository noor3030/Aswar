<template>
  <div class="pa-16">
    <v-row class="pa-5 mb-2" justify="space-between">
      <h2 style="color: #616161">Products Table</h2>
      <v-btn color="#0075a9" class="rounded-xl" large @click="dialog = true">
        <span
          style="
            color: #fff;
            font-size: 20px;
            text-transform: none;
            font-weight: bold;
          "
          >Add New Product</span
        >
        <v-icon color="#fff">mdi-plus</v-icon>
      </v-btn>
      <v-btn class="rounded-xl" large text to="/expired-products">
        <h2 style="color: #616161; font-size: 20px; text-transform: none">
          Expired Products Table
        </h2>
      </v-btn>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="products"
      class="pa-5"
      calculate-widths
    >
      <template v-slot:[`item.image_url`]="{ item }">
        <v-img :src="item.image_url" max-width="150" class="mx-auto" />
      </template>
      <template v-slot:[`item.creation_date`]="{ item }">
        <p>{{ formatDate(item.creation_date) }}</p>
      </template>
      <template v-slot:[`item.expiration_date`]="{ item }">
        <p>{{ formatDate(item.expiration_date) }}</p>
      </template>
    </v-data-table>
    <ProductCreateView :show="dialog" @close="dialog = false" />
  </div>
</template>
<script lang="ts">
import { formatDate } from "../utils/date-filter";
import ProductCreateView from "../components/ProductCreateView.vue";
import { Product, ProductService } from "@/client";
import Vue from "vue";
interface ProductsData {
  headers: Array<{ text: string; value: string; align: string }>;
  products: Array<Product>;
  dialog: boolean;
}
export default Vue.extend({
  name: "App",

  data: (): ProductsData => ({
    headers: [
      { text: "Name", value: "name", align: "center" },
      { text: "Creation Date", value: "creation_date", align: "center" },
      { text: "Expiration Date", value: "expiration_date", align: "center" },
      { text: "Picture", value: "image_url", align: "center" },
    ],
    products: [],
    dialog: false,
  }),
  created() {
    ProductService.readProductGet().then((value) => {
      this.products = value;
    });
  },
  methods: {
    formatDate,
  },
  components: {
    ProductCreateView,
  },
});
</script>
<style>
span {
  color: #0075a9;
  font-size: 20px;
}

.v-data-table {
  border-radius: 20px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-application--is-ltr .v-data-footer__select,
.v-data-footer__select .v-select__selections .v-select__selection--comma,
.v-data-footer__pagination {
  font-size: 17px;
  color: #616161;
  font-weight: bold;
}
</style>