<template>
  <v-app>
    <v-main>
      <HomeView/>
      <MainFooter/>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
  import HomeView from '@/views/HomeView.vue'
  import MainFooter from '@/components/MainFooter.vue'
</script>
