<template lang="pug">
  #products
    new-product-dialog(:show="showNewProductDialog")
    v-layout(row)
      v-flex(shrink)
        h1 Assets
      v-flex#button-group(grow)
        v-btn(round flat outline @click="showNewProductDialog = true") + New
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
          :items="items"
          :search="search"
        )
          template(slot="items" slot-scope="props")
            td {{ props.item.name }}
            td {{ props.item.manufacturer }}
            td {{ props.item.serialNumber }}
            td
              v-btn(icon round @click="editItem(props.item)")
                v-icon edit
              v-btn(icon round @click="deleteItem(props.item)")
                v-icon delete
</template>

<script>

import NewProductDialog from '@/components/dialogs/NewProduct.vue'

export default {
  name: 'products',
  components: {NewProductDialog},
  data () {
    return {
      showNewProductDialog: false,
      search: '',
      headers: [
        {text: 'Name', value: 'name', align: 'left'},
        {text: 'Manufacturer', value: 'manufacturer', align: 'left'},
        {text: 'Serial number', value: 'serialNumber', align: 'left'},
        {text: 'Actions', value: 'actions', align: 'left'}
      ],
      items: [
        {name: 'Temperatur logger', manufacturer: 'Novamar AS', serialNumber: '1234'},
        {name: 'Sylinderformet bøye', manufacturer: 'Novamar AS', serialNumber: '1235'}
      ]
    }
  }
}
</script>

<style>

</style>
