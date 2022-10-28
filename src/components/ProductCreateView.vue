<template>
  <v-dialog
    v-model="show"
    max-width="900"
    hide-overlay
    transition="dialog-top-transition"
  >
    <v-card>
      <v-toolbar dark color="#0075a9">
        <v-btn icon dark @click="closeDialog">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Add New Product</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn dark text @click="createProduct"> Save </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-form class="pa-16"
        ><v-row align="center" justify="center">
          <v-col>
            <v-text-field
              color="#0099dc"
              outlined
              single-line
              placeholder="Name"
              v-model="name"
              ref="name"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-file-input
              placeholder="Picture"
              outlined
              single-line
              color="#0099dc"
              v-model="image"
            >
            </v-file-input>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <h3>Creation Date</h3>
            <v-date-picker v-model="creation_date"></v-date-picker>
          </v-col>
          <v-col>
            <h3>Expiration Date</h3>
            <v-date-picker v-model="expiration_date"></v-date-picker>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Product,
  ProductService,
  Body_create_product_products_post as ProductCreate,
} from "@/client";

export default Vue.extend({
  data() {
    return {
      name: "",
      image: undefined as any,
      creation_date: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
      expiration_date: new Date(
        Date.now() - new Date().getTimezoneOffset() * 60000
      )
        .toISOString()
        .substr(0, 10),
    };
  },
  props: {
    show: { type: Boolean },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
    createProduct() {
      const creation_date = new Date(this.creation_date).toISOString();
      const expiration_date = new Date(this.expiration_date).toISOString();

      ProductService.createProductProductsPost({
        creation_date: creation_date,
        expiration_date: expiration_date,
        name: this.name,
        image: this.image,
      });
      this.closeDialog();
      this.$emit("getProducts");
    },
  },
});
</script>