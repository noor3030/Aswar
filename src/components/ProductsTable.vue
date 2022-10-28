<template>
  <div
    :style="$vuetify.breakpoint.mdAndDown ? 'padding: 10px;' : 'padding: 30px;'"
  >
    <v-row class="pa-5 mb-2" justify="space-between">
      <h1 style="color: #616161">
        {{ isExpired ? "Expired items list" : "Items list" }}
      </h1>
      <v-btn
        color="#0075a9"
        class="rounded-xl"
        large
        @click="dialog = true"
        v-if="isExpired == false"
      >
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
      <v-btn
        class="rounded-xl"
        large
        text
        :to="isExpired ? '/products' : '/expired-products'"
      >
        <v-icon color="#616161" v-if="isExpired == true">
          mdi-arrow-left-thick</v-icon
        >
        <h2 style="color: #616161; font-size: 20px; text-transform: none">
          {{ isExpired ? " Items list " : "Expired items list" }}
        </h2>
        <v-icon color="#616161" v-if="isExpired == false">
          mdi-arrow-right-thick
        </v-icon>
      </v-btn>
    </v-row>

    <v-data-table
      :headers="headers"
      :items="paging.products.result"
      class="pa-5"
      calculate-widths
      item-key="id"
      hide-default-footer
      :server-items-length="paging.products.total"
      :options.sync="paging.options"
    >
      <template v-slot:[`item.image_url`]="{ item }">
        <div class="pa-2">
          <v-img :src="item.image_url" max-width="150" class="mx-auto" />
        </div>
      </template>
      <template v-slot:[`item.creation_date`]="{ item }">
        <p>{{ formatDate(item.creation_date) }}</p>
      </template>
      <template v-slot:[`item.expiration_date`]="{ item }">
        <p>{{ formatDate(item.expiration_date) }}</p>
      </template>
    </v-data-table>
    <ProductCreateView :show="dialog" @close="dialog = false" @getProducts="getProducts"/>
    <div class="text-center pt-2">
      <v-pagination
        @input="optionsChangeHandler"
        :value="paging.options.page"
        :length="pagesLength"
        :total-visible="paging.options.perPage"
        prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"
      ></v-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { formatDate } from "../utils/date-filter";
import ProductCreateView from "../components/ProductCreateView.vue";
import { Product, ProductService, Pagination } from "@/client";
import Vue from "vue";
interface ProductsData {
  headers: Array<{ text: string; value: string; align: string }>;
  products: Array<Product>;
  dialog: boolean;
  paging: {
    products: Pagination;
    options: { page: number; perPage: number };
  };
}
export default Vue.extend({
  name: "ProductsTable",

  data: (): ProductsData => ({
    headers: [
      { text: "Name", value: "name", align: "center" },
      { text: "Creation Date", value: "creation_date", align: "center" },
      { text: "Expiration Date", value: "expiration_date", align: "center" },
      { text: "Picture", value: "image_url", align: "center" },
    ],
    products: [],
    dialog: false,

    paging: {
      products: { total: 0, result: [] },
      options: { page: 1, perPage: 25 },
    },
  }),
  props: {
    title: { type: String },
    isExpired: { type: Boolean },
  },
  created() {
    console.log(this.isExpired);

    this.getProducts();
  },

  methods: {
    formatDate,
    getProducts() {
      ProductService.readProductsProductsGet(
        this.paging.options.page,
        this.paging.options.perPage,
        this.isExpired
      ).then((value: Pagination) => {
        this.paging.products = value;
      });
    },
    optionsChangeHandler(pageNumber: number) {
      this.paging.options.page = pageNumber;
      this.getProducts();
    },
  },
  components: {
    ProductCreateView,
  },
  computed: {
    pagesLength(): number {
      if (
        this.paging.products.total == null ||
        this.paging.options.perPage == null
      ) {
        return 0;
      }
      return Math.ceil(
        this.paging.products.total / this.paging.options.perPage
      );
    },
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
p {
  font-size: 15px;
}
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td,
.v-data-table > .v-data-table__wrapper > table > thead > tr > td,
.v-data-table > .v-data-table__wrapper > table > tfoot > tr > td,
.v-application--is-ltr {
  font-size: 17px;
  color: #616161;
  font-weight: bold;
}
</style>