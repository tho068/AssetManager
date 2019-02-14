<template lang="pug">
  v-dialog(
    v-model="show"
    persistent
    width="825"
  )
    v-stepper(
      v-model="step"
      vertical
    )
      v-stepper-step(
        :completed="step > 1"
        step="1"
      ) General information
      v-stepper-content(step="1")
        v-layout(row)
          v-flex(grow)
            v-text-field(
              placeholder="Serial number"
              label="Serial number"
              v-model="serialNumber"
            )
          v-flex(shrink)
            v-btn(flat color="primary") Generate
        v-select(
          outline
          label="Select a collection"
          v-model="selectedCollection"
          :items="collectionItems"
        )
        v-btn(@click="incrementStep" color="primary") Continue
        v-btn(@click="cancel") Cancel
      v-stepper-step(
        :completed="step > 2"
        step="2"
      ) Attributes
      v-stepper-content(step="2")
        #attributes(
          v-if="attributes.length > 0"
        )
          v-chip(
            v-for="(item, idx) in attributes"
            :key="idx"
            close
          ) {{ item.key }}
        v-text-field(
          placeholder="Key"
          label="Key"
          v-model="key"
        )
        v-text-field(
          placeholder="Value"
          label="Value"
          v-model="value"
        )
        v-btn(color="primary" @click="save") Save
        v-btn(color="primary" @click="addAttribute") Add attribute
        v-btn(@click="cancel") Cancel
</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'newProductDialog',
  props: ['show'],
  data () {
    return {
      step: 1,
      selectedCollection: null,
      attributes: [],
      serialNumber: '',
      key: '',
      value: ''
    }
  },
  computed: {
    ...mapGetters('collection', [
      'getCollection'
    ]),
    collectionItems: function () {
      return this.getCollection.map(item => {
        return {text: item.name, value: item.id}
      })
    }
  },
  methods: {
    ...mapActions('products', [
      'saveAsset'
    ]),
    incrementStep () {
      this.step++
    },
    reset () {
      this.serialNumber = ''
      this.attributes = []
      this.step = 1
    },
    addAttribute () {
      this.attributes.push({
        ...JSON.parse(JSON.stringify({key: this.key, value: this.value}))
      })
      this.key = ''
      this.value = ''
    },
    save () {
      let asset = {
        serialNumber: this.serialNumber,
        attributes: this.attributes,
        collection: this.selectedCollection
      }
      this.saveAsset({ asset })
      this.$eventHub.$emit('dialog-closed')
      this.reset()
    },
    cancel () {
      this.$eventHub.$emit('dialog-closed')
      this.reset()
    }
  }
}
</script>

<style>
  #attributes {
    padding-bottom: 20px;
  }
</style>
