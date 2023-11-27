<template>
  <v-footer class="bg-grey-lighten-1" color="site">
    <v-row justify="center" no-gutters>
      <v-btn v-for="link in links" :key="link.link" color="white" @click="redirectToUrl(link.url)" variant="text" class="mx-2" rounded="xl">
        {{ link.link }}
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>© Dr Dipti's Clinic</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script lang="ts">
import router from '@/plugins/router';

export default {
  data: () => ({
    links: [
      {link:'Home',url:'/'},
      {link:'About',url:'/about'},
      {link:'Pricing',url:'/pricing'},
      /* {link:'Services',url:'/services'},
      {link:'Blog',url:'/blog'}, */
      {link:'Contact Us',url:'/contactus'}
    ],
  }),
  methods: {
    redirectToUrl(url:string){
      router.push(url);
    }
  }
}
</script>

<style>
.v-footer {
  background-color: #880015;
}
</style>