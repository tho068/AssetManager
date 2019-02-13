<template lang="pug">
  v-app
    side-menu
    top
    v-content
      v-container(fluid)
          router-view
    v-footer(app)
</template>

<script>

import top from '@/components/Top'
import sideMenu from '@/components/Menu'

export default {
  name: 'App',
  components: {top, sideMenu}
}
</script>

<style>
  #button-group {
    margin-bottom: 20px;
    text-align: right;
  }
</style>
