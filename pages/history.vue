<template>
    <div>
        <v-parallax :src="aboutImgBg" height="320">
            <div class="aboutImg">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">
                        {{ history.data.attributes.Title }}
                    </h2>
                </v-container>
            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="history.data.attributes.body" />
        </v-container>
    </div>
</template>
<script setup>
import Markdown from 'vue3-markdown-it'
import aboutImgBg from '/img/about.png'
const histories = await useFetch('https://admin.gathstudents.com/api/history-of-gath?populate=*');
const history = histories.data.value;
</script>