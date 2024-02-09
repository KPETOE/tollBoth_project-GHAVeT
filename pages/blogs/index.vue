<template>
    <div>
        <v-parallax :src="blogPic" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">our stories</h2>
                </v-container>
            </div>
        </v-parallax>
        <div class="blogs">
            <v-container>
                <!-- <h1>{{ blogs }}</h1> -->
                <v-row>
                    <v-col cols="auto" lg="4" sm="6" v-for="blog in blogs.data" :key="blog.id">
                        <!-- <NuxtLink :to="'/blogs/${blog.[id]}'"> -->
                        <v-card>
                            <v-img :src="'https://admin.gathstudents.com' + blog.attributes.Image.data.attributes.url"
                                height="300" cover></v-img>
                            <v-card-item>
                                <!-- {{ blog }} -->
                                <!-- <h1>{{ data.blogs.id }}</h1> -->
                                <!-- <h1>{{ blog.id }}</h1> -->
                                <h4 class="text-center">{{ blog.attributes.Title }}</h4>
                                <v-divider></v-divider>
                                <p class="text-justify">{{ blog.attributes.Description }}</p>
                            </v-card-item>
                            <div class="ml-16 pl-16 " v-if="isSupported">
                                <v-btn size="medium" variant="flat" @click="copy(blogLink + blog.id)" class="mt-n10 ml-16">
                                    <span v-if='!copied'><v-icon>mdi-content-copy</v-icon></span>
                                    <span v-else>Copied!</span>
                                </v-btn>
                            </div>


                            <!-- <v-divider></v-divider> -->
                            <!-- <v-row>

                                <v-col cols="3">
                                    <client-only> -->
                            <div class="mt-n11">
                                <v-btn :to="'/blogs/' + blog.id" class="mx-4 mb-10" variant="outlined">Read More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>

                            </div>


                            <!-- </ShareNetwork> -->
                            <!-- </client-only>

                                </v-col>
                            </v-row> -->


                            <!-- <v-spacer></v-spacer> -->

                        </v-card>
                        <!-- </NuxtLink> -->
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>
<script setup>
// import useStrapiData from '~/composables/strapi';
import { useClipboard } from '@vueuse/core'
const config = useRuntimeConfig();
import blogPic from '/img/another.png';
const route = useRoute();

const { data: blogs } = await useFetch('https://admin.gathstudents.com/api/blogs?populate=*');
// const { data: blog } = await useFetch('https://admin.gathstudents.com/api/blogs/?populate=*')

// console.log(blogs)

const blogLink = ref('https://gathstudents.com/blogs/');
const { text, copy, copied, isSupported } = useClipboard({ blogLink });

</script>
<style>
.blog-title {
    background: rgba(8, 8, 99, 0.472);
}
</style>