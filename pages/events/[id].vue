<template>
    <div>
        <v-parallax :src="'https://admin.gathstudents.com' + event.data.attributes.flyer.data.attributes.url" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">{{ event.data.attributes.Title
                    }}
                    </h2>

                </v-container>

            </div>
        </v-parallax>
        <v-container>
            <!-- <Markdown :source="event.data.attributes.Detail" /> -->
            <p class="text-center">{{ event.data.attributes.Description }}</p>
        </v-container>
        <!-- {{ route.blog.Title }} -->
        <!-- <h4>{{ route }}</h4> -->


    </div>
</template>
<script setup>
const route = useRoute();
const { data: event } = await useFetch('https://admin.gathstudents.com/api/events/' + route.params.id + '?populate=*');
</script>