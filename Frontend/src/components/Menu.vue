<template lang="pug">
  v-navigation-drawer(app clipped).menu
    v-list
      v-list-group(
        v-for="(item, index) in menu"
        :key="index"
        :prepend-icon="item.icon"
      )
        v-list-tile(
          slot="activator"
          :to="item.path"
          )
          v-list-tile-content
            v-list-tile-title {{ item.title }}
        v-list-tile(
          v-for="(subItem, subIndex) in item.sub"
          :key="subIndex"
          :to="subItem.path"
        )
          v-list-tile-content
            v-list-tile-title {{ subItem.title }}
</template>

<script>
export default {
  name: 'sideMenu',
  data () {
    return {
      menu: [
        {title: 'Home', path: '/', icon: 'home', sub: []},
        {
          title: 'Assets',
          path: '/assets/assets',
          icon: 'favorite',
          sub: [
            {title: 'Assets', path: '/assets/assets'},
            {title: 'Collection', path: '/assets/configuration'}
          ]
        },
        {title: 'Service', path: '/service', icon: 'settings', sub: []}
      ]
    }
  }
}
</script>

<style>
.menu {
  margin-top: 60px !important;
}
</style>
