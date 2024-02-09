<template>
    <div>
        <v-parallax :src="blogPic" height="320">
            <div class="blog-title">
                <v-container>
                    <h2 class="text-uppercase text-white text-center pt-16 mt-16 mb-16 pb-16">meet our executives</h2>
                </v-container>
            </div>
        </v-parallax>
        <v-container>

            <div class="d-flex">
                <v-row>
                    <v-col v-for="executive in executives.data" :key="executive.id">
                        <div>

                            <v-card width="150" height="auto" variant="flat">
                                <!-- <v-container style="width: 11em;"> -->
                                <v-card color="#103778" height="150" width="150">
                                    <!-- <v-img
                                    v-if="'https://admin.gathstudents.com' + rep.attributes.ExecutivePic.data.attributes.url == true"
                                    height="200" cover src="/img/profile.png"></v-img> -->
                                    <v-img height="200" round
                                        :src="'https://admin.gathstudents.com' + executive.attributes.Picture.data.attributes.url"
                                        cover style="border-radius: 50%;"></v-img>

                                </v-card><br>
                                <h5 class="text-center">{{ executive.attributes.Name }}</h5><br>
                                <h6 class="text-center">{{ executive.attributes.Title }}</h6><br>
                                <h6 class="text-center">{{ executive.attributes.institution }}</h6>
                                <!-- <h6 class="text-start">{{  }}</h6> -->
                                <!-- </v-container> -->
                            </v-card>
                        </div>
                    </v-col>
                    
                </v-row>
                

            </div>

        </v-container>
    </div>
</template>
<script setup>
import blogPic from '/img/another.png';
const { data: executives } = await useFetch('https://admin.gathstudents.com/api/chapter-executives?populate=*');
// const chapters  = await useFetch('https://admin.gathstudents.com/api/chapter-executives?populate=*');
// const chapter = chapters.data.value;
</script>
<style>
.blog-title {
    background: rgba(8, 8, 99, 0.472);
}
</style>