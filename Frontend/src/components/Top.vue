<template lang="pug">
  v-toolbar(clipped-left color="primary" dark)
    //v-toolbar-side-icon
    v-toolbar-title Asset manager

    v-spacer

    v-toolbar-items.hidden-sm-and-down
      v-btn(flat to="/")
        v-icon(left) home
        | Home
      v-btn(flat to="/assets/assets")
        v-icon(left) favorite
        | Products
      v-btn(flat to="/service")
        v-icon(left) settings
        | Service
</template>

<script>
export default {
  name: 'top'
}
</script>

<style>

</style>
