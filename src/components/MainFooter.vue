<template>
    <v-footer class="bg-light-blue-accent-3" app>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>© Dr Dipti's Clinic</strong>
        </v-col>
      </v-row>
    </v-footer>
  </template>

<script lang="ts">
export default {
    name: 'MainFooter',
    data: () => ({
      links: [
        'Home',
        'About Us',
        'Services',
        'Blog',
        'Contact Us',
      ],
    }),
  }
</script>

<style>
v-footer{
    background-color: #00acee;
}
</style>