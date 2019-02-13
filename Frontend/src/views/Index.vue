<template lang="pug">
  #index
    h1 Home

</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      stats: [
        {
          title: 'Products',
          stats: [
            {key: 'Amount', value: 250}
          ]
        }
      ]
    }
  }
}
</script>

<style>

</style>
