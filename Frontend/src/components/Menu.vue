<template lang="pug">
  v-navigation-drawer(app clipped).menu
    v-list
      template(
        v-for="(item, index) in menu"
      )
        v-list-tile(:key="index" :to="item.path")
          v-list-tile-action
            v-icon {{ item.icon }}
          v-list-tile-content
            v-list-tile-title {{ item.title }}
</template>

<script>
export default {
  name: 'sideMenu',
  data () {
    return {
      menu: [
        {title: 'Home', path: '/', icon: 'home', sub: []},
        {title: 'Assets', path: '/assets/assets', icon: 'loyalty'},
        {title: 'Collection', path: '/assets/configuration', icon: 'settings'},
        {title: 'Service', path: '/service', icon: 'timeline'}
      ]
    }
  }
}
</script>

<style>
.menu {
  margin-top: 55px !important;
  border: 0 !important;
}
.subList {
}
</style>
