<template>
    <div>
        <v-parallax :src="'https://admin.gathstudents.com' + blog.data.attributes.Image.data.attributes.url" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">{{ blog.data.attributes.Title
                    }}
                    </h2>

                </v-container>

            </div>
        </v-parallax>
        <v-container>
            <Markdown :source="blog.data.attributes.Detail" />
            <p class="text-muted">Date Created: {{ useDateFormat(blog.data.attributes.publishedAt, 'MMMM D, YYYY') }}</p>
        </v-container>
        <!-- {{ route.blog.Title }} -->
        <!-- <h4>{{ route }}</h4> -->


    </div>
</template>
<script setup>
import Markdown from 'vue3-markdown-it'
import { useDateFormat } from '@vueuse/core'
const route = useRoute();
const { data: blog } = await useFetch('https://admin.gathstudents.com/api/blogs/' + route.params.id + '?populate=*');

</script>