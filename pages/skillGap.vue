<template>
    <div class="home">
        <v-parallax :src="'https://admin.gathstudents.com'+ skill.data.attributes.coverImg.data.attributes.url" height="300">
            <div class="plxcvr">
                <div class="pt-16"></div>
                <h1 class="text-center text-white pt-16">
                    {{skill.data.attributes.skillGapTitle}}
                </h1>
            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="skill.data.attributes.body"/>
           
        </v-container>

    </div>
</template>
<script setup>
import imgbg from '../assets/img/img-bg.jpg'
import Markdown from 'vue3-markdown-it'
const skillGap = await useFetch('https://admin.gathstudents.com/api/skillgap-report?populate=*');
const skill = skillGap.data.value;
// console.log(localChapters)
</script>
<style>
.plxcvr {
    background: rgba(8, 8, 99, 0.472);
    height: 100%;
}
</style>