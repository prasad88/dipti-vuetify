<template>
    <div>
        <v-container class="home-container">
            <v-row class="home-container">
                <v-col class="text-center mt-4 " cols="12">
                    <!-- <v-img max-width="100" class="mx-auto" src="@/assets/logo2.png" /> -->
                    <div class="text-main">
                        <v-text class="text-h3 logo-header">Dr Dipti's Clinic</v-text>
                        <p class="text-h5">Multispeciality Homeopathy Clinic</p>
                        <p class="text-body-1">We offer tailored healthcare, including infertility treatments, homeopathy for natural healing, skin care, pediatric care,
                            women's health, and chronic solutions, blending tradition with modern expertise for holistic care.</p>
                        <v-row style="padding-bottom: 10px;">
                            <v-col> <v-img :width="1000" :height="250" aspect-ratio="16/9" cover src="@/assets/pink_med.jpg"></v-img></v-col>
                            <!-- <v-col> <v-img aspect-ratio="16/9" cover src="@/assets/green_med.jpg"></v-img></v-col> -->
                        </v-row>
                        <a href="https://forms.gle/8pMjwKXcz1tN1Gvr5"><v-btn width="100%" size="x-large" color="site">Book your appointment now</v-btn></a>
                        <!-- <p class="text-h6"> Your journey to better health starts here, where we prioritize your well-being above all else.</p> -->
                    </div>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="landing-bottom" fluid>
            <v-row dense>
                <v-col cols="6">
                    <v-flex d-flex child-flex class="fill-height">
                        <v-img :width="1000" :height="250" aspect-ratio="16/9" cover src="@/assets/family.jpg"></v-img>
                        <v-card height="100%">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <v-card-title class="text-h5">
                                        Homeopathy
                                    </v-card-title>
                                    <v-card-text class="text-body-1">
                                        <div>Opt for homeopathy for chronic cases and experience holistic healing. It delves into the underlying causes,
                                            offering safe and natural solutions that promote long-term well-being, making it an excellent choice for
                                            lasting relief.</div>
                                    </v-card-text>

                                    <v-card-actions class="text-card">
                                        <v-btn href="https://forms.gle/8pMjwKXcz1tN1Gvr5" class="ms-2" variant="outlined" size="small">
                                            START NOW
                                        </v-btn>
                                    </v-card-actions>
                                </div>

                                <!-- <v-avatar class="ma-3" size="125" rounded="0">
                                <v-img src="../assets/pink_med.jpg"></v-img>
                            </v-avatar> -->
                            </div>
                        </v-card>
                    </v-flex>
                </v-col>

                <v-col cols="6">
                    <v-flex d-flex child-flex class="fill-height">
                        <v-img :width="1000" :height="250" aspect-ratio="16/9" cover src="@/assets/happy_girl.jpg"></v-img>
                        <v-card height="100%">
                            <div class="d-flex flex-no-wrap justify-space-between">
                                <div>
                                    <v-card-title class="text-h5">
                                        Gynecology
                                    </v-card-title>
                                    <v-card-text class="text-body-1">
                                        <div>Choose homeopathy for gynecology to embrace a holistic and non-invasive approach. It addresses the root
                                            causes of female health concerns, harnessing the body's natural healing ability for personalized, safe, and
                                            effective well-being.</div>
                                    </v-card-text>
                                    <v-card-actions class="text-card">
                                        <v-btn href="https://forms.gle/8pMjwKXcz1tN1Gvr5" class="ms-2" variant="outlined" size="small">
                                            START NOW
                                        </v-btn>
                                    </v-card-actions>
                                </div>
                            </div>
                        </v-card>
                    </v-flex>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts">
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.v-row {
    padding: 0;
}


@media only screen and (max-width: 1026px) {
    #fadeshow1 {
        display: none;
    }
}

.logo-header {
    color: #880015;
}

.landing-bottom {
    padding-top: 0;
    margin-top: 0;
}
</style>