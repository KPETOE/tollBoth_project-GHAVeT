<template>
    <div class="home">
        <v-parallax :src="imgbg" height="300">
            <div class="plxcvr">
                <div class="pt-16"></div>
                <h1 class="text-center text-white pt-16">
                    Finding Your Local Chapter

                </h1>
            </div>
        </v-parallax>
        <v-container fluid>
            <!-- <v-card class="mx-auto" max-width="500"> -->
                <!-- <v-container> -->
                    <v-row dense>
                        <v-col cols="4" v-for="localChapter in localChapters.data" :key="localChapter.id">
                            <!-- <nuxt-link to="/chapter_executive"> -->
                                <v-card>
                                    <v-img class="align-end" gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)" height="200px" cover=""
                                        :src="'https://admin.gathstudents.com' + localChapter.attributes.ChapterImgProfile.data.attributes.url">
                                        <v-container>
                                            <h3 class="text-white">{{ localChapter.attributes.ChaterName }}</h3>
                                            <v-divider class="text-white"></v-divider>
                                            <p class="text-muted text-white">{{ localChapter.attributes.ChapterDescription }}</p>
                                        </v-container>
                                    </v-img>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn size="medium" :to="localChapter.attributes.FaceBook" color="surface-variant" variant="text" icon="mdi-facebook"></v-btn>
                                        <v-btn size="medium" :to="localChapter.attributes.Instagram" color="surface-variant" variant="text" icon="mdi-instagram"></v-btn>
                                        <v-btn size="medium" :to="localChapter.attributes.Twitter" color="surface-variant" variant="text" icon="mdi-twitter"></v-btn>
                                        <!-- <v-btn size="medium" @click="overlay = !overlay" color="surface-variant" variant="text"><v-icon>mdi-account-circle-outline</v-icon>
                                            <v-overlay activator="parent" location-strategy="connected" scroll-strategy="close" v-model="overlay">
                                                <v-sheet elevation="1">

                                                </v-sheet>
                                            </v-overlay>
                                        </v-btn> -->
                                        <!-- <v-btn size="medium" @click="overlay = !overlay" color="surface-variant" variant="text" icon="mdi-account-circle-outline"> -->
                                            <!-- <v-overlay v-model="overlay" activator="child" location-strategy="connected" scroll-strategy="close">
                                                <v-sheet>
                                                    hello!
                                                </v-sheet>
                                            </v-overlay> -->
                                        <!-- </v-btn> -->
                                    </v-card-actions>
                                </v-card>
                            <!-- </nuxt-link> -->
                        </v-col>
                    </v-row>
                <!-- </v-container> -->
            <!-- </v-card> -->
        </v-container>

    </div>
</template>
<script setup>
import imgbg from '../assets/img/img-bg.jpg'

const { data: localChapters } = await useFetch('https://admin.gathstudents.com/api/local-chapters?populate=*');
console.log(localChapters)
</script>
<style>
.plxcvr {
    background: rgba(8, 8, 99, 0.472);
    height: 100%;
}
</style>