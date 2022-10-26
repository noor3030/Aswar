<template>
  <v-dialog
    v-model="show"
    max-width="800"
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
          <v-btn dark text> Save </v-btn>
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
            ></v-text-field>
          </v-col>
          <v-col>
            <v-text-field
              color="#0099dc"
              outlined
              single-line
              placeholder="Creation Date"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col>
            <v-text-field
              color="#0099dc"
              outlined
              single-line
              placeholder="Expiration Date"
            ></v-text-field>
          </v-col>
          <v-col>
            <v-file-input
              placeholder="Picture"
              outlined
              single-line
              color="#0099dc"
            >
            </v-file-input>
          </v-col>
        </v-row>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {};
  },
  props: {
    show: { type: Boolean },
  },
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
});
</script>