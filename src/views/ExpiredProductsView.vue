<template>
  <ProductsTable :isExpired="true"  />
</template>
<script lang="ts">
import Vue from 'vue'
import ProductsTable from "@/components/ProductsTable.vue"
export default Vue.extend({
  components:{ProductsTable}
})
</script>