<template lang="pug">
  #singleCollection(v-if="getCurrentCollection != null")
    v-layout(row)
      v-flex(shrink)
        h1 Collection configuration
      v-flex#button-group(grow)
        v-btn(flat outline) Save
        v-btn(flat outline) + Component
        v-btn(flat outline) + Documents
    v-card
      v-card-title
        h2 {{ getCurrentCollection.name }}
      v-card-text
        #form-productinfo
          v-text-field(
            box
            label="Asset name"
            placeholder="Asset name"
            v-model="getCurrentCollection.name"
          )
          v-text-field(
            box
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
        #components(
          v-if="getCurrentCollection.parts"
        )
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
    this.setCurrentCollection({ assetId: this.$route.params.id })
  },
  methods: {
    ...mapActions('collection', [
      'setCurrentCollection'
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
  #form-productinfo {
    margin-bottom: 15px;
  }
</style>
