<template>
    <div class="home">
        <v-parallax :src="'https://admin.gathstudents.com' + hospitality.data.attributes.coverImg.data.attributes.url" height="300">
            <div class="plxcvr">
                <div class="pt-16"></div>
                <h1 class="text-center text-white pt-16">
                    {{ hospitality.data.attributes.Title }}
                </h1>
            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="hospitality.data.attributes.body"/>
        </v-container>

    </div>
</template>
<script setup>
// import imgbg from '../assets/img/img-bg.jpg'
import Markdown from 'vue3-markdown-it'
const hospitalityReport = await useFetch('https://admin.gathstudents.com/api/hospitality-report?populate=*');
const hospitality = hospitalityReport.data.value;
// console.log(localChapters)
</script>
<style>
.plxcvr {
    background: rgba(8, 8, 99, 0.472);
    height: 100%;
}
</style>