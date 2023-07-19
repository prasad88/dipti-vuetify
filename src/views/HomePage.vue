<template>
    <v-container class="home-container">
        <v-row class="home-container">
            <v-col class="text-center mt-4" cols="12">
                <v-img max-width="100" class="mx-auto" src="@/assets/logo2.png" />
                <v-text class="text-h4">Dr Dipti's Clinic</v-text>
            </v-col>
        </v-row>
    </v-container>
    <v-container class="py-8 px-6" fluid>
        <v-row>
            <v-col v-for="n in 16" :key="n" cols="4">
                <v-card height="200">
                    <v-card-title>Service {{ n }}</v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home-container {
    margin-top: 0;
    padding: 1;
    color: #0f4879;
}
.v-row{
    padding: 0;
}
</style>