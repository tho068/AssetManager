<template lang="pug">
  v-dialog(
    v-model="show"
    persistant
    max-width="600"
  )
    v-card
      v-card-title
        h1 New product
      v-card-text
        v-text-field(
          label="Product name"
          placeholder="Product name"
          v-model="productName"
          required
        )
        v-text-field(
          label="Manufacturer"
          placeholder="Manufacturer"
          v-model="manufacturer"
          required
        )
      v-card-actions
        v-btn(flat) Save
        v-btn(flat) Cancel
</template>

<script>
export default {
  name: 'newProductDialog',
  props: ['show'],
  data () {
    return {
      manufacturer: '',
      productName: ''
    }
  },
  mounted () {
  }
}
</script>

<style>

</style>
