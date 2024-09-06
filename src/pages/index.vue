<template>
  <v-layout>
    <v-app-bar color="teal-lighten-3" comfortable>
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>My ABC</v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="$vuetify.display.mdAndUp">
        <v-btn icon="mdi-magnify" variant="text"></v-btn>
        <v-btn icon="mdi-filter" variant="text"></v-btn>
      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
    >
      <v-list :items="items"></v-list>
    </v-navigation-drawer>

    <v-main style="height: 800px;">
      <v-card-text>
        中华人民共和国
        <v-btn variant="outlined">Button</v-btn>
      </v-card-text>
    </v-main>

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        sum: 666,
        value: 'foo'
      },
      {
        title: 'Bar',
        sum: 888,
        value: 'bar'
      },
      {
        title: 'Fizz',
        sum: 999,
        value: 'fizz'
      },
      {
        title: 'Buzz',
        sum: 444,
        value: 'buzz'
      }
    ]
  }),

  watch: {
    group() {
      this.drawer = false
    }
  }
}
</script>
