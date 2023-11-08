<template>
    <v-container class="about-container">
        <v-row>
            <v-col class="text-center mt-4 " cols="12">
                <!-- <v-img max-width="100" class="mx-auto" src="@/assets/logo2.png" /> -->
                <div class="text-main">
                    <v-text class="text-h3 logo-header">Dr Dipti's Clinic</v-text>
                    <p class="text-h6">Welcome to Dr Dipti's Clinic</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-img src="@/assets/doctor.jpg"></v-img>
                <v-card text="At Dr Dipti's Clinic, we are dedicated to providing exceptional healthcare services in the fields of
                                    homeopathy, skin care, infertility, pediatric care, gynecology, and chronic cases. Our team of experienced and
                                    compassionate practitioners strives to deliver holistic and personalized treatments that address the unique needs of
                                    each individual." variant="tonal"></v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-expansion-panels>
                    <v-expansion-panel title="Homeopathy" text="With our expertise in homeopathy, we offer natural and safe remedies to promote healing and
                                            restore balance within the body. Our homeopathic treatments focus on stimulating the body's inherent healing capabilities to
                                            alleviate a wide range of acute and chronic conditions.">
                    </v-expansion-panel>
                    <v-expansion-panel title="Skin Care" text="We understand the importance of healthy and radiant skin. Our skin care specialists are skilled
                                            in
                                            diagnosing
                                            and
                                            treating various skin conditions, ranging from acne and eczema to signs of aging. Using advanced
                                            techniques
                                            and
                                            high-quality products, we aim to rejuvenate and revitalize your skin, leaving you with a vibrant and
                                            youthful
                                            appearance.">
                    </v-expansion-panel>
                    <v-expansion-panel title="Infertility" text="Our clinic provides comprehensive support for couples struggling with infertility. Our team of
                                            fertility experts offers
                                            specialized treatments and therapies tailored to enhance reproductive health and increase the chances of
                                            successful
                                            conception. We are committed to assisting you on your journey towards parenthood.">
                    </v-expansion-panel>
                    <v-expansion-panel title="Pediatric Care" text="We believe that every child deserves the best possible care. Our pediatric services encompass a
                                            wide
                                            range of
                                            treatments, including holistic remedies, nutrition guidance, and preventive care. Our skilled
                                            pediatricians
                                            are
                                            dedicated to ensuring the well-being and optimal growth of your child, from infancy through
                                            adolescence.">
                    </v-expansion-panel>
                    <v-expansion-panel title="Gynecology" text="We offer comprehensive gynecological services that cater to the unique needs of women at every
                                            stage
                                            of life. Our
                                            gynecologists provide expert care, conducting thorough examinations, screenings, and addressing concerns
                                            related to
                                            reproductive health, hormonal imbalances, and more. We prioritize your comfort, privacy, and overall
                                            well-being.">
                    </v-expansion-panel>
                    <v-expansion-panel title="Chronic Cases" text="For individuals suffering from chronic conditions, our clinic offers specialized care and
                                            management
                                            strategies. We
                                            approach chronic cases with a holistic perspective, considering the physical, mental, and emotional
                                            aspects of
                                            the
                                            individual. Our experienced practitioners work closely with you to develop personalized treatment plans
                                            aimed
                                            at
                                            improving your quality of life.">
                    </v-expansion-panel>
                </v-expansion-panels>
                <v-img src="@/assets/about_image.jpg"></v-img>
                <v-card text="At Dr Dipti's Clinic, we are committed to providing a warm and welcoming environment where you can feel
                                    confident in receiving the highest standard of care. Our focus is not only on treating symptoms but also on
                                    identifying and addressing the root causes of your health concerns. We believe in empowering our patients with
                                    knowledge and collaborating with them to achieve optimal health and well-being." variant="tonal"></v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
export default {
    name: 'AboutView'
}
</script>

<style>
.logo-header {
    color: #880015;
    text-align: center;
}

.v-row {
    padding: 0;
}

.about-container {
    margin-top: 0;
    padding-top: 0;
}
</style>