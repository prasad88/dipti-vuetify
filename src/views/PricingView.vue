<template>
  <v-container class="about-container">
    <v-row>
            <v-col class="text-center mt-4 " cols="12">
                <!-- <v-img max-width="100" class="mx-auto" src="@/assets/logo2.png" /> -->
                <div class="text-main">
                    <v-text class="text-h3 logo-header">Dr Dipti's Clinic</v-text>
                </div>
            </v-col>
        </v-row>
    <v-row>
      <v-col>
        <v-card>
          <template v-slot:title>
            First Consultaion
          </template>

          <template v-slot:subtitle>
            Including medicines and basic check-up
          </template>

          <template v-slot:text>
            ₹ 1000
          </template>
        </v-card>
        <v-card>
          <template v-slot:title>
            Repeat Consultaion
          </template>

          <template v-slot:subtitle>
            Including medicines and basic check-up
          </template>

          <template v-slot:text>
            ₹ 800
          </template>
        </v-card>
        <v-card>
          <template v-slot:title>
            Skin Consultaion
          </template>

          <template v-slot:subtitle>
            Including medicines and basic check-up
          </template>

          <template v-slot:text>
            ₹ 1000
          </template>
        </v-card>
        <v-card>
          <template v-slot:title>
            Laser Clensing
          </template>

          <template v-slot:subtitle>
            Including medicines and basic check-up
          </template>

          <template v-slot:text>
            ₹ 1000
          </template>
        </v-card>
        <v-card>
          <template v-slot:title>
            Tatoo Removal
          </template>

          <template v-slot:subtitle>
            Including medicines and basic check-up
          </template>

          <template v-slot:text>
            * As per size
          </template>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <a href="https://forms.gle/8pMjwKXcz1tN1Gvr5"><v-btn width="100%" size="x-large" color="site">Book your appointment now</v-btn></a>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img src="@/assets/blue_med.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
const variants = ['elevated', 'flat', 'tonal', 'outlined']
</script>

<style></style>