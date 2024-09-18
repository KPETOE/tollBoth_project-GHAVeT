<template>
    <div>

        <v-parallax height="">
            <div style="position: relative;">

                <div style="position: absolute; bottom: 10px; right: 10px; cursor: pointer;" @click="toggleMute">
                    <v-icon :color="isMuted ? 'grey' : 'red'">mdi-volume-{{ isMuted ? 'off' : 'high' }}</v-icon>
                </div>
            </div>
            <div class="aboutImg" style="background: linear-gradient(to right, rgba(252, 252, 252, 0.331), rgba(135, 207, 235, 0.486), #31759ab4, #153445b4) !important;
">
                <v-container>
                    <h2 class="text-uppercase blue-text text-center ">
                        Welcome to Ghana vehicle Electronic toll collection
                    </h2>
                </v-container>
            </div>
        </v-parallax>
        <div class="about">
            <v-container>
                <v-row>
                    <v-col cols="" lg="5" md="6" sm="12">
                        <v-container class="mt-10 mb-10">
                            <h4 class="text-justify"> At GHAVet, we're on a mission to redefine the way you experience
                                tolls. Our vision
                                is simple: to make your journey smoother, faster, and hassle-free. By harnessing the
                                power
                                of cutting-edge technology, we're transforming toll collection into a seamless process
                                that
                                enhances mobility and connectivity on the road.</h4>

                            <h4 class="underline text-">What Sets Us Apart</h4>
                            <p class="text-justify">
                                At SmartToll, innovation is at the heart of everything we do. We've combined advanced
                                RFID
                                and wireless communication technologies to create a next-generation toll collection
                                system
                                that's not only efficient but also incredibly convenient. No more fumbling for loose
                                change
                                or waiting in long queues – with SmartToll, you can breeze through toll plazas with
                                ease.
                            </p>
                            <p class="text-muted text-italize"> Experience the Future of Toll Collection

                                us as we pave the way for a smarter, more connected transportation ecosystem. With
                                SmartToll, the journey is just as important as the destination. Welcome to a world where
                                tolls are no longer a roadblock but a seamless part of your travel experience.</p>
                        </v-container>
                    </v-col>
                    <v-col cols="" lg="" md="" sm="">
                        <v-img class="mt-10 mb-10" aspect-ratio="1" height="350" src="/img/ETC1.jpg"></v-img>
                        <h5 class="text-uppercase blue-text text-center ">
                            Akosumbo TOLL BOOTH view
                        </h5>
                        <v-img class="mt-10 mb-10  text-center" aspect-ratio="1" height="300"
                            src="/img/Akosumbo.jpg"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <v-divider></v-divider>
        <div class="values">
            <h3 class=" mt-10 text-center  text-success">Core Values</h3><br>
            <v-container class="mt-10 d-flex justify-space-evenly">
                <br>
                <v-row dense>
                    <v-col v-for="(value, index) in values" :key="index" cols="auto" sm="">
                        <v-container>
                            <v-card class="ma-2 pa-2" style="width: 20em;">
                                <v-container fluid>
                                    <v-icon class="d-flex justify-center mt-5 mx-auto" style="font-size: 60px;">{{
                                        value.icon }}</v-icon>
                                    <v-card-item>
                                        <h4 class="text-center">{{ value.title }}</h4><br>
                                        <p class="text-justify">{{ value.description }}</p>
                                    </v-card-item>
                                </v-container>
                            </v-card>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>

        <div>
            <v-container>
                <h2 class="text-center text-uppercase"></h2>
                <p class="text-justify"></p>
                <v-btn class="mx-auto d-flex" to="/history" style="width: 15em;" variant="flat"
                    color="red-accent-2">Read
                    More
                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
            </v-container>
        </div>
        <div class="mission-statement">
            <v-container>
                <v-row>
                    <v-col cols="" sm="" lg="">
                        <v-img></v-img>
                    </v-col>
                    <v-col cols="auto" lg="">
                        <v-container class="mt-10 pt-10">
                            <h4 class="text-left"></h4>
                            <p class="text-left"></p>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <iframe width="100%" height="500em" src="https://www.youtube.com/embed/USG0exgFTzI"
            title="Tag Installation  AT GHAVeT" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
    </div>
</template>





<script setup>


const values = [
    {
        icon: 'mdi-lightbulb-on-outline',
        title: 'Innovation',
        description: 'We embrace cutting-edge technology and strive to continually innovate to improve the toll collection process.'
    },
    {
        icon: 'mdi-account-group-outline',
        title: 'Customer Focus',
        description: 'Our customers are at the heart of everything we do. We are dedicated to providing exceptional service and a seamless experience.'
    },
    {
        icon: 'mdi-earth',
        title: 'Sustainability',
        description: 'We are committed to sustainable practices that minimize environmental impact and promote a greener future.'
    },
    {
        icon: 'mdi-shield-check-outline',
        title: 'Integrity',
        description: 'We uphold the highest standards of integrity and transparency in all our operations.'
    },
    {
        icon: 'mdi-speedometer',
        title: 'Efficiency',
        description: 'Our systems are designed to provide fast, reliable, and efficient toll collection, reducing travel time and congestion.'
    }
];

</script>



<style>
.mission-statement {
    background: rgba(0, 0, 0, .1);
}



.underline {

    text-decoration: underline;
}

.blue-text {

    color: #06211d;
}
</style>
