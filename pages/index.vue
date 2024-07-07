<template>
    <div class="home">
        <v-parallax src="/img/homeY.png" height="900">

            <div class="homeImg">
                <br>
              

                <div class="mx-auto ">
                    <v-container class="justify-content-center" style="width: 50%;">
                        <h1 class="mx-auto mt-16 pt-10 text-uppercase text-white text-center">


                            Together we can make transportation in GHANA safer and efficient
                        </h1><br>
                        <p class="mx-auto d-flex text-sentence text-center text-white">
                            Say goodbye to long queues and frustrating delays
                            at toll booths. With our state-of-the-art electronic toll system,
                            transactions are swift, seamless, and hassle-free. Enjoy the convenience of
                            uninterrupted journeys as you effortlessly breeze through toll plazas.
                        </p>
                        <v-row>
                            <v-col class="mx-auto" cols="auto" lg="3" sm="6">
                                <v-btn v-if="user == null" variant="flat" to="/login" color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                                <v-btn v-else variant="flat" to="/about" color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                            <!-- <v-col class="mx-auto" cols="auto" lg="6" md="6" sm="6">
                                <v-btn variant="outlined" href="https://forms.gle/tjAHEfCEQbUDmqXH8" color="white">APPLY FOR
                                    YOUR GHaVeT Tag
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col> -->

                            <v-col class="mx-auto" cols="auto" lg="6" md="6" sm="6">
                                <v-btn variant="outlined" color="white">
                                    <NuxtLink v-if="user == null" to="/login" class="nav-link text-white">
                                        APPLY FOR YOUR GHaVeT Tag
                                        <v-icon>mdi-arrow-right-thin-circle-outline</v-icon>
                                    </NuxtLink>
                                    <NuxtLink v-else to="/apply" class="nav-link text-white">
                                        APPLY FOR YOUR GHaVeT Tag
                                        <v-icon>mdi-arrow-right-thin-circle-outline</v-icon>
                                    </NuxtLink>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
            </div>
        </v-parallax>
        <br>
        <v-container>
            <v-row>
                <v-col cols="auto" lg="6" sm="6">
                    <v-container class="mt-15">
                        <h3 class="text-sentence">DRIVING INTO THE FUTURE WITH GHaVeT REVOLUTIONARY ElECTRONIC TOLL
                            COLLECTION SERVICES</h3> <br>
                        <p class="justify-content-start">In the fast-paced world of transportation,
                            efficiency is key. At GHAVeT's, we understand the importance of
                            smooth and hassle-free journeys, which is why we specialize in cutting-edge
                            Electronic Toll Collection (ETC) services.Our state-of-the-art ETC system is
                            designed to simplify your travel experience, eliminating the need for cash
                            transactions and minimizing traffic congestion at toll booths. Whether you're a
                            frequent commuter or a commercial fleet operator, our electronic toll collection
                            services ensure a seamless and time-saving journey on toll roads.
                        </p>
                        <v-row>
                            <v-col cols="auto" lg="4" sm="6">
                                <v-btn v-if="user == null" to="/login" color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                                <v-btn v-else to="/about" color="red-accent-2">Learn More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                            <v-col cols="auto" lg="5" sm="6">
                                <v-btn v-if="user==null" variant="outlined" to="/login" color="indigo-darken-2" flat>Find More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                                <v-btn v-else variant="outlined" to="/chapter" color="indigo-darken-2" flat>Find More
                                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-col>
                <v-col cols="auto" lg="6" sm="6">
                    <v-container><br><br>
                        <h3 class="text-sentence">We collaborate with All Stakeholders To Deliver the required Services.
                        </h3><br><br>
                        <v-row>
                            <p>
                                Our collaboration extends beyond day-to-day operations to
                                encompass broader initiatives that drive positive change within
                                the industry. By actively participating in discussions on regulatory
                                frameworks, sustainability practices, and industry standards, we strive to
                                contribute to a transportation landscape that benefits both drivers and the
                                industry as a whole.At GHaVeT, we believe that collaboration with driver unions
                                is not just a business strategy – it's a commitment to fostering a supportive
                                and progressive environment for everyone involved in the transportation ecosystem.
                                Together, we're paving the way for a future where drivers can thrive, supported
                                by innovative solutions and strong partnerships.
                            </p>
                                                    </v-row>

                    </v-container>
                </v-col>
            </v-row>
            <v-row>
                <v-col
                    v-for="(partner, index) in [{ id: 'STC' }, { id: 'D' }, { id: 'TROTRO' }, { id: 'LOG' }, { id: 'TANKER' }, { id: 'LOG2' }, { id: 'Police' }, { id: 'road safety' }, { id: 'GPRTU' }]"
                    :key="index" cols="" lg="2" sm="4">
                    <v-img height="70" aspect-ratio="1" :src="`/img/${partner.id}.png`"></v-img>
                </v-col>
            </v-row>
        </v-container>
       
    </div>
</template>
<script setup>
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();




// const emits = ['profilePhotoClick']; // Declare the emitted event

// const profilePhoto = ref('/img/hawa.png'); // Set the default profile photo path


</script>
<style>
.homeImg {
    background: rgba(8, 8, 99, 0.475);
    height: 100%;
}

body {
    background: #8da6da;
}


.profile-photo {
    width: 80px;

    height: 80px;

    border-radius: 100%;

    cursor: pointer;
}

.icon {
    border: 1px solid #ededed;
}
</style>