<template lang="pug">
  #singleAsset(
    v-if="getCurrentAsset"
  )
    v-layout(row)
      v-flex(shrink)
        h1 Asset configuration
      v-flex#button-group(grow)
        v-btn(flat outline) + Service
        v-btn(flat outline) + Attribute
    v-card
      v-card-title
        h2 {{ getCurrentCollection.name }}
      v-card-text
        .section
          v-text-field(
            box
            disabled
            placeholder="Serial number"
            label="Serial number"
            v-model="getCurrentAsset.serialNumber"
          )
        .section
          h2 Attributes
          v-data-table(
            :headers="headersAttributes"
            :items="getCurrentAsset.attributes"
          )
            template(slot="items" slot-scope="props")
              td {{ props.item.key }}
              td {{ props.item.value }}
              td
                v-btn(flat icon)
                  v-icon edit
                v-btn(flat icon)
                  v-icon delete
        .section(
          v-if="getCurrentAsset.service.length > 0"
        )
          h2 Service history
          v-timeline(dense)
            v-timeline-item(
              v-for="(serviceItem, serviceIdx) in getCurrentAsset.service"
              :key="serviceIdx"
              color="primary"
            )
              v-card
                v-card-title.blue.lighten-2
                  h2.white--text {{ serviceItem.date }}
                v-card-text
                  div {{ serviceItem.message }}
                  v-btn(flat).see-more See more
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'singleAsset',
  data () {
    return {
      headersAttributes: [
        {text: 'Key', value: 'key', align: 'left'},
        {text: 'Value', value: 'value', align: 'left'},
        {text: 'Actions', value: 'actions', align: 'left'}
      ]
    }
  },
  mounted () {
    this.setCurrentAsset({ id: parseInt(this.$route.params.id) })
    this.setCurrentCollection({ assetId: this.getCurrentAsset.collection })
  },
  computed: {
    ...mapGetters('products', [
      'getCurrentAsset'
    ]),
    ...mapGetters('collection', [
      'getCurrentCollection'
    ])
  },
  methods: {
    ...mapActions('products', [
      'setCurrentAsset'
    ]),
    ...mapActions('collection', [
      'setCurrentCollection'
    ])
  }
}
</script>

<style>
  .section {
    padding-bottom: 15px;
  }
  .see-more {
    margin-top: 25px;
  }
</style>
