<template>
    <div>
        <v-container class="home-container">
            <v-row class="home-container">
                <v-col class="text-center mt-4 bg " cols="12">
                    <!-- <v-img max-width="100" class="mx-auto" src="@/assets/logo2.png" /> -->
                    <div class="text-main">
                        <v-text class="text-h3" color="#853844">Dr Dipti's Clinic</v-text>
                        <p class="">Welcome to our Dr Dipti's Clinic, where we specialize in comprehensive healthcare tailored to your
                            unique needs. We are here to provide exceptional care in various specialties, including infertility treatment to fulfill your
                            dream of parenthood, homeopathic remedies that promote natural healing, rejuvenating skin care solutions, compassionate
                            pediatric
                            care for your little ones, expert gynecological services catering to women's health, and effective solutions for chronic
                            health
                            challenges. At our clinic, we blend the time-tested wisdom of homeopathy with modern medical expertise to offer you holistic
                            and
                            personalized care.</p>
                        <p> Your journey to better health starts here, where we prioritize your well-being above all else.</p>
                    </div>
                    <v-btn size="x-large" color="site">Book your appointment now</v-btn>
                </v-col>

            </v-row>
        </v-container>
        <v-container class="py-8 px-6" fluid>
            <v-row dense>
                <v-col cols="6">
                    <v-card color="#853844" theme="dark">
                        <div class="d-flex flex-no-wrap justify-space-between card-bg2">
                            <div>
                                <v-card-title class="text-h5 text-card1">
                                    Homeopathy
                                </v-card-title>
                                <v-card-text class="text-card1">
                                    <div>Homeopathy offers a gentle and holistic approach to healing, aiming to address the root causes of ailments rather
                                        than just their symptoms. It harnesses the body's innate ability to heal itself, making it a safe and natural
                                        choice for many health concerns. Many individuals find relief and improved well-being through the individualized
                                        and non-invasive treatments that homeopathy provides</div>
                                </v-card-text>

                                <v-card-actions class="text-card1">
                                    <v-btn class="ms-2" variant="outlined" size="small">
                                        START NOW
                                    </v-btn>
                                </v-card-actions>
                            </div>

                            <!-- <v-avatar class="ma-3" size="125" rounded="0">
                                <v-img src="../assets/pink_med.jpg"></v-img>
                            </v-avatar> -->
                        </div>
                    </v-card>
                </v-col>

                <v-col cols="6">
                    <v-card color="#e68a96" theme="dark">
                        <div class="d-flex flex-no-wrap justify-space-between card-bg1">
                            <div>
                                <v-card-title class="text-h5 text-card2">
                                    Gynecology
                                </v-card-title>
                                <v-card-text class="text-card2">
                                    <div>Homeopathy offers a gentle and holistic approach to healing, aiming to address the root causes of ailments rather
                                        than just their symptoms. It harnesses the body's innate ability to heal itself, making it a safe and natural
                                        choice for many health concerns. Many individuals find relief and improved well-being through the individualized
                                        and non-invasive treatments that homeopathy provides</div>
                                </v-card-text>
                                <v-card-actions class="text-card2">
                                    <v-btn class="ms-2" variant="outlined" size="small">
                                        START NOW
                                    </v-btn>
                                </v-card-actions>
                            </div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <!-- <v-row>
                <v-col v-for="n in 9" :key="n" cols="4">
                    <v-card height="200">
                        <v-card-title>Service {{ n }}</v-card-title>
                    </v-card>
                </v-col>
            </v-row> -->
        </v-container>
    </div>
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
}

.v-row {
    padding: 0;
}

.bg {
    padding-top: 30%;
    background: url('@/assets/background.png') center center;
    background-size: cover;
    color: #FFFFFF;
    background-position-y: 80%;
}

.text-main {
    background-color: #FFFFFF;
    background: rgba(136, 0, 21, .2);
    text-shadow: 0 0 1px #000, 0 0 1px #000;
}

@media only screen and (max-width: 1026px) {
    #fadeshow1 {
        display: none;
    }
}
.text-card1{
    background: rgba(87, 125, 186, .4);
    text-shadow: 0 0 1px #000, 0 0 1px #000;
}

.text-card2{
    background: rgba(87, 171, 72, .6);
    text-shadow: 0 0 1px #000, 0 0 1px #000;
}
img {
    filter: blur(8px);
}

.card-bg1 {
    background: url('@/assets/green_med.jpg') center center;
    background-size: cover;
}

.card-bg2 {
    background: url('@/assets/blue_med.jpg') center center;
    background-size: cover;
}</style>