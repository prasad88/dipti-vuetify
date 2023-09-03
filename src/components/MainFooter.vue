<template>
  <v-footer class="d-flex flex-column" color="site"  app>
    <div class="d-flex w-100 align-center px-4">
      <!-- <strong>Get connected with us on social networks!</strong> -->

      <v-spacer></v-spacer>

      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="plain"
        size="small"
      ></v-btn>
    </div>

    <div class="px-4 text-center w-100">
      {{ new Date().getFullYear() }} — <strong>© Dr Dipti's Clinic</strong>
    </div>
  </v-footer>
</template>
<script lang="ts">
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>

<style>
.v-footer{
    background-color: #880015;
}
</style>