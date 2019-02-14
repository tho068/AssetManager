<template lang="pug">
  #products
    new-product-dialog(:show="showNewProductDialog")
    v-layout(row)
      v-flex(shrink)
        h1 Assets
      v-flex#button-group(grow)
        v-btn(flat @click="showNewProductDialog = true") + New
    v-card
      v-card-title
        v-text-field(
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        )
      v-card-text
        v-data-table(
          :headers="headers"
          :items="getAssets"
          :search="search"
        )
          template(slot="items" slot-scope="props")
            td
              router-link(:to="{ name: 'SingleAsset', params: {id: props.item.id} }")
                | {{ props.item.serialNumber }}
            td {{ getCollectionById(props.item.collection).name }}
            td
              v-btn(icon round @click="editItem(props.item)")
                v-icon edit
              v-btn(icon round @click="deleteAsset({asset: props.item})")
                v-icon delete
</template>

<script>

import NewProductDialog from '@/components/dialogs/NewProduct.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'products',
  components: {NewProductDialog},
  data () {
    return {
      showNewProductDialog: false,
      search: '',
      headers: [
        {text: 'Serial number', value: 'serialNumber', align: 'left'},
        {text: 'Product name', value: 'productName', align: 'left'}
      ]
    }
  },
  created () {
    this.$eventHub.$on('dialog-closed', () => {
      this.showNewProductDialog = false
    })
  },
  methods: {
    ...mapActions('products', [
      'deleteAsset'
    ])
  },
  computed: {
    ...mapGetters('products', [
      'getAssets'
    ]),
    ...mapGetters('collection', [
      'getCollectionById'
    ])
  }
}
</script>

<style>

</style>
