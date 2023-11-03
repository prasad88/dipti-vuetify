<template>
    <v-card :loading="loading" class="mx-auto my-12" max-width="700">
        <template v-slot:loader="{ isActive }">
            <v-progress-linear :active="isActive" color="deep-purple" height="4" indeterminate></v-progress-linear>
        </template>

        <div class="mapouter">
            <div class="gmap_canvas"><iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=pink city wakad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
            </div>
        </div>
        <v-card-item>
            <v-card-title>Dr Dipti's Clinic</v-card-title>

            <v-card-subtitle>
                <span class="me-1">Harmony for Skin and Soul: Rediscover the Natural Balance</span>

                <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
            </v-card-subtitle>
        </v-card-item>

        <v-card-text>
            <v-row align="center" class="mx-0">
                <v-rating :model-value="4.5" color="amber" density="compact" half-increments readonly size="small"></v-rating>

                <div class="text-grey ms-4">
                    4.5 (413)
                </div>
            </v-row>
            <div class="my-4 text-subtitle-1">
                <div class="text-h5"><v-icon icon="mdi-phone" color="light-blue-accent-3"></v-icon><a class="text-h5" href="tel:+917977492264">797 749 2264</a></div>
            </div>

            <div class="my-4 text-subtitle-1">
                Address:
            </div>

            <div>Shop no. 104, Pink City Complex 2, Kaspate wasti, Wakad, Pune - 411057</div>
        </v-card-text>

        <v-divider class="mx-4 mb-1"></v-divider>

        <v-card-title>Today's availability</v-card-title>

        <div class="px-4">
            <v-chip-group v-model="selection">
                <v-chip>11:30AM</v-chip>
                <v-chip>12:30PM</v-chip>
                <v-chip>1:30PM</v-chip>
                <v-chip>2:30PM</v-chip>
                <v-chip>5:30PM</v-chip>
                <v-chip>7:30PM</v-chip>
                <v-chip>8:00PM</v-chip>
                <v-chip>9:00PM</v-chip>
            </v-chip-group>
        </div>

        <v-card-actions>
            <v-btn color="light-blue-accent-3" variant="text" @click="reserve">
                Book appointment
            </v-btn>
        </v-card-actions>

    </v-card>
</template>

<script lang="ts">
export default {
    data: () => ({
        loading: false,
        selection: 1,
    }),

    methods: {
        reserve() {
            this.loading = true

            setTimeout(() => (this.loading = false), 2000)
        },
    },
}
</script>

<style>
.mapouter {
    position: relative;
    text-align: right;
    width: 100%;
    
}

.gmap_canvas {
    overflow: hidden;
    background: none !important;
    width: 100%;
   
}

.gmap_iframe {
    height: 300px !important;
}

a {
    text-decoration: none;
    font-weight: bold;
    color: #00B0FF;
}
</style>