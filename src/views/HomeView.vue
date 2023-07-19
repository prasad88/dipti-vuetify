<template>
    <v-card  class="main-navbar">
        <v-layout>
            <!-- <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

            <v-app-bar class="main-navbar" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-img max-height="40px" max-width="40px" class="mx-auto" src="@/assets/logo2.png" />
                <v-toolbar-title @click="$router.push('/')">
                    
                    Dr Dipti's Clinic
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <!--  <v-btn variant="text" icon="mdi-magnify"></v-btn>

                <v-btn variant="text" icon="mdi-filter"></v-btn> -->

                <v-btn variant="text" alt="Login">
                    <v-icon icon="mdi-login"></v-icon>
                    <v-tooltip activator="parent" location="bottom">Login</v-tooltip>
                </v-btn>
            </v-app-bar>
            <v-navigation-drawer v-model="drawer" temporary>
                <!-- <v-list-item prepend-avatar="@/assets/dipti.jpg" title="John Leider"></v-list-item>

                <v-divider></v-divider> -->

                <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="Home" @click="$router.push('/')"></v-list-item>
                    <v-list-item prepend-icon="mdi-information-outline" title="About" value="About" @click="$router.push('/about')"></v-list-item>
                    <v-list-item prepend-icon="mdi-pill" title="Services" value="Services" @click="$router.push('/services')"></v-list-item>
                    <v-list-item prepend-icon="mdi-forum" title="Blog" value="Blog" @click="$router.push('/blog')"></v-list-item>
                    <v-list-item prepend-icon="mdi-cellphone-marker" title="Contact us" value="Contact us"
                        @click="$router.push('/contactus')"></v-list-item>
                </v-list>
            </v-navigation-drawer>

            <v-main>
                <router-view></router-view>
            </v-main>
        </v-layout>
    </v-card>
</template>

<script lang="ts">
export default {
    name: 'HomeView',
    data: () => ({
        return: {
            drawer: null,
        },
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>

<style scoped>
.main-navbar{
    background-color: #F7F7F5;
}
</style>