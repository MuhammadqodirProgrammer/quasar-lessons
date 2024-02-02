<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>




    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>

</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';

const linksList = [
  {
    title: 'Lesson1',
    icon: 'code',
    link: '/',
    description:'QCard'
  },
  {
    title: 'Lesson2',
    icon: 'code',
    link: 'lesson2',
    description:'QToolbar'
  },
  {
    title: 'Lesson3',
    icon: 'code',
    link: 'lesson3',
    description:'QImg'
  },
  {
    title: 'Lesson4',
    icon: 'code',
    link: 'lesson4',
    description:'QRating'
  },
  {
    title: 'Lesson5',
    icon: 'code',
    link: 'lesson5',
    description:'QBanner'
  },
  {
    title: 'Lesson6',
    icon: 'code',
    link: 'lesson6',
    description:'QAjaxBar'
  },
  {
    title: 'Lesson7',
    icon: 'code',
    link: 'lesson7',
    description:'QBar'
  },
  {
    title: 'Lesson8',
    icon: 'code',
    link: 'lesson8',
    description:'QBreadcrumbs'
  },
  {
    title: 'Lesson9',
    icon: 'code',
    link: 'lesson9',
    description:'QChat'
  },
  {
    title: 'Lesson10',
    icon: 'code',
    link: 'lesson10',
    description:'QChip'
  },
  {
    title: 'Lesson11',
    icon: 'code',
    link: 'lesson11',
    description:'QTable'
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
 
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
});
</script>
