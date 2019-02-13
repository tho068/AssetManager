<template lang="pug">
  #singleCollection(v-if="getCurrentCollection != null")
    v-layout(row)
      v-flex(shrink)
        h1 Asset configuration
      v-flex#button-group(grow)
        v-btn(flat outline) Save
        v-btn(flat outline) + Component
        v-btn(flat outline) + Documents
    v-card
      v-card-title
        h2 {{ getCurrentCollection.name }}
      v-card-text
        v-text-field(
          label="Asset name"
          placeholder="Asset name"
          v-model="getCurrentCollection.name"
        )
        v-text-field(
          label="Manufacturer"
          placeholder="Manufacturer"
          v-model="getCurrentCollection.manufacturer"
        )
        #documents(
          v-if="getCurrentCollection.documents"
        )
          h2 Documents
          v-data-table(
            :headers="headersDoc"
            :items="getCurrentCollection.documents"
          )
            template(slot="items" slot-scope="props")
              td {{ props.item.fileName }}
              td {{ props.item.fileType }}
              td {{ props.item.size }}
        #components
          h2 Components
          v-data-table(
            :headers="headers"
            :items="getCurrentCollection.parts"
          )
            template(slot="items" slot-scope="props")
              td {{ props.item.partName }}
              td {{ props.item.manufacturer }}
              td {{ props.item.webAddress }}
              td {{ props.item.model }}
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SingleCollectionAsset',
  data () {
    return {
      collectionId: '',
      headers: [
        {text: 'Product name', value: 'name', align: 'left'},
        {text: 'Manufacturer', value: 'actions', align: 'left'},
        {text: 'Website', value: 'name', align: 'left'},
        {text: 'Model', value: 'name', align: 'left'}
      ],
      headersDoc: [
        {text: 'File name', value: 'name', align: 'left'},
        {text: 'File type', value: 'actions', align: 'left'},
        {text: 'File size', value: 'name', align: 'left'}
      ]
    }
  },
  mounted () {
    this.collectionId = parseInt(this.$route.params.id)
    this.setCurrentAsset({ assetId: this.collectionId })
  },
  methods: {
    ...mapActions('collection', [
      'setCurrentAsset'
    ])
  },
  computed: {
    ...mapGetters('collection', [
      'getCurrentCollection'
    ])
  }
}
</script>

<style>
  #documents {
    margin-top: 25px;
  }
  #components h2 {
    margin-bottom: 15px;
  }
</style>
