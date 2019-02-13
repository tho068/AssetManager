<template lang="pug">
  #collection
    new-product-dialog(:show="showNewCollectionDialog")
    v-layout(row)
      v-flex(shrink)
        h1 Collection
      v-flex#button-group(grow)
        v-btn(round flat outline @click="showNewCollectionDialog = true") + New
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
          :items="getCollection"
          :search="search"
        )
          template(slot="items" slot-scope="props")
            td
              router-link(:to="{ name: 'SingleCollection', params: {id: props.item.id} }")
                | {{ props.item.name }}
            td {{ props.item.manufacturer }}
            td
              v-btn(icon round @click="editItem(props.item)")
                v-icon edit
              v-btn(icon round @click="deleteItem(props.item)")
                v-icon delete
</template>

<script>

import NewProductDialog from '@/components/dialogs/NewCollection'
import { mapGetters } from 'vuex'

export default {
  name: 'products',
  components: {NewProductDialog},
  data () {
    return {
      showNewCollectionDialog: false,
      search: '',
      headers: [
        {text: 'Name', value: 'name', align: 'left'},
        {text: 'Manufacturer', value: 'manufacturer', align: 'left'},
        {text: 'Actions', value: 'actions', align: 'left'}
      ]
    }
  },
  computed: {
    ...mapGetters('collection', [
      'getCollection'
    ])
  },
  methods: {
    editItem (item) {
      console.log(item)
    },
    deleteItem (item) {
      console.log(item)
    }
  }
}
</script>

<style>

</style>
