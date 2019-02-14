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
        v-text-field(
          label="Name"
          placeholder="Name"
          v-model="asset.name"
        )
        v-text-field(
          label="Manufacturer"
          placeholder="Manufacturer"
          v-model="asset.manufacturer"
        )
        v-btn(color="primary" @click="incrementStep") Continue
        v-btn(@click="cancel") Cancel
      v-stepper-step(
        :completed="step > 2"
        step="2"
      ) Components
      v-stepper-content(step="2")
        v-list
          template(
            v-for="(part, partidx) in asset.parts"
          )
            v-chip(close) {{ part.partName }}
        v-text-field(
          label="Part name"
          placeholder="Part name"
          v-model="part.partName"
        )
        v-text-field(
          label="Manufacturer"
          placeholder="Manufacturer"
          v-model="part.manufacturer"
        )
        v-text-field(
          label="Website"
          placeholder="Website"
          v-model="part.website"
        )
        v-text-field(
          label="Model"
          placeholder="Model"
          v-model="part.model"
        )
        v-btn(@click="incrementStep()", color="primary") Continue
        v-btn(color="primary" @click="addPart()") Add part
        v-btn(@click="cancel") Cancel
      v-stepper-step(
        :completed="step > 3"
        step="3"
      ) Documents
      v-stepper-content(step="3")
        vue-dropzone(
          ref="myVueDropzone"
          id="dropzone"
          :options="dropzoneOptions"
        )
        br
        v-btn(@click="save" color="primary") Save
        v-btn(@click="cancel") Cancel
</template>

<script>

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import { mapActions } from 'vuex'

export default {
  name: 'newProductDialog',
  props: ['show'],
  components: {
    vueDropzone: vue2Dropzone
  },
  data () {
    return {
      step: 0,
      dropzoneOptions: {
        url: 'https://httpbin.org/post',
        thumbnailWidth: 50,
        maxFilesize: 10,
        createImageThumbnails: false
      },
      asset: {
        id: '3',
        name: '',
        manufacturer: '',
        parts: [],
        documents: []
      },
      part: {
        partName: '',
        website: '',
        model: '',
        manufacturer: ''
      }
    }
  },
  mounted () {
  },
  methods: {
    ...mapActions('collection', [
      'newAsset'
    ]),
    incrementStep () {
      this.step++
    },
    resetPart () {
      this.part.partName = ''
      this.part.website = ''
      this.part.model = ''
      this.part.manufacturer = ''
    },
    reset () {
      this.step = 1
      this.asset.id = ''
      this.asset.name = ''
      this.asset.manufacturer = ''
      this.asset.documents = []
      this.asset.parts = []
    },
    addPart () {
      this.asset.parts.push(JSON.parse(JSON.stringify(this.part)))
      this.resetPart()
    },
    save () {
      this.newAsset({ asset: JSON.parse(JSON.stringify(this.asset)) })
      this.$eventHub.$emit('dialog-closed')
      this.resetPart()
      this.reset()
    },
    cancel () {
      this.$eventHub.$emit('dialog-closed')
      this.reset()
      this.resetPart()
    }
  }
}
</script>

<style>
  #step-header {
    margin-bottom: 0px;
  }
  .content {
    padding: 20px;
  }
</style>
