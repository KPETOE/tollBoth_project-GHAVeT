<template>
    <div class="home">
        <v-parallax src="/img/homeY.png" height="900">

            <div class="homeImg">
                <br>
                <!-- <ul class="d-flex justify-content-end">
                    <li class="nav-item">
                        

                    </li>
                </ul> -->

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
        <!-- 
        <div style="background-color: rgb(255, 255, 255);">
            <v-container>
                <h6 class="text-left mt-16" style="color: #103778;">What's happening?</h6><br>
                <h2 class="mt-5">Upcoming Events</h2>
                <br>
                <v-row>
                    <v-col v-for="event in events.data.slice(0, 3).reverse()" :key="event.id">
                        <v-card width="300">
                            <nuxt-link style="text-decoration: none;" :to="'/events/' + event.id">
                                <v-img cover
                                    :src="'https://admin.gathstudents.com' + event.attributes.flyer.data.attributes.url"
                                    height="150"></v-img><br>
                                <v-container>

                                    <v-card-title>
                                        {{ event.attributes.Title }}
                                    </v-card-title><br>
                                    <p class="text-muted"><v-icon>mdi-calendar-range</v-icon> {{ event.attributes.Date }}
                                    </p>
                                    <p class="text-muted mt-1"><v-icon>mdi-map-marker</v-icon> {{ event.attributes.Location
                                    }}</p>
                                    <div>
                                        <div v-if="event.attributes.url === true">
                                            <v-icon>mdi-laptop-account</v-icon><nuxt-link
                                                :to="event.attributes.url"></nuxt-link>
                                        </div>
                                        <div v-else>
                                            <p class="text-muted"><v-icon>mdi-web-off</v-icon> Offline</p>
                                        </div>
                                    </div>
                                </v-container>
                            </nuxt-link>
                        </v-card><br>

                    </v-col>
                </v-row>
                <v-btn class="mx-auto d-flex" to="/events/" style="width: 15em;" variant="flat" color="red-accent-2">More
                    Events
                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
            </v-container><br>
        </div> -->
        <!-- <div style="background-color: #CEE1EA;">
            <v-container>
                <v-row>
                    <v-col cols="" sm="">
                        <v-img height="34em"
                            :src="'https://admin.gathstudents.com' + home.data.attributes.skillgapPic.data.attributes.url"></v-img>
                    </v-col>
                    <v-col cols="" sm="">
                        <v-container class="pt-16 mt-16">
                            <h4>{{ home.data.attributes.skillgapTitle }}</h4><br>
                            <p>{{ home.data.attributes.skillGapDescription }} <nuxt-link to="">{{ link }}</nuxt-link></p>
                            <br>
                            <v-btn to="/skillGap" color="#103778" variant="outlined">View Report
                                <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div> -->
        <!-- <div style="background:#F8F7F7;">
            <v-container class="mx-auto">
                <h3 class="text-center text-uppercase mt-10">{{ exeMem }}</h3><br>
                <p class="text-center">{{ memDes }}</p><br>
                <v-slide-group height="600">
                    <v-slide-group-item v-for="testimony in testimonies.data" :key="testimony.id">
                        {{ testimony }} 
                        <v-card width="400" color="#F8F7F7" elevation="0">

                            <v-img class="mt-4" :src="'https://admin.gathstudents.com' + testimony"
                                height="200"></v-img><br>

                            <h5 class="text-center">{{ testimony.attributes.Name }}</h5><br>
                            <h6 class="text-center">{{ testimony.attributes.Institution }}</h6><br>
                            <div>
                                <v-divider inset width="255" color="#E3371E"></v-divider><br>
                            </div>
                            <p class="text-justify"><v-container>{{ testimony.attributes.quote }}</v-container></p>
                        </v-card>

                    </v-slide-group-item>
                </v-slide-group>
            </v-container>
        </div> -->
        <!-- <div>
            <v-container>
                <h6 class="text-left mt-16" style="color: #103778;">{{ home.data.attributes.executiveyear }}</h6><br>
                <h3 class="text-left text-uppercase" style="color: #103778;">{{ home.data.attributes.executiveSectionTitle
                }}
                </h3><br>
                <v-row class="mb-10 d-flex">
                    <v-col cols="" lg="2" md="3" sm="3" v-for="rep in reps.data" :key="rep.id">

                        <v-card width="150" height="auto" variant="flat">
                            <v-card color="#103778" height="150" width="150">

                                <v-img height="200" round
                                    :src="'https://admin.gathstudents.com' + rep.attributes.ExecutivePic.data.attributes.url"
                                    cover style="border-radius: 50%;"></v-img>
                            </v-card><br>
                            <h5 class="text-center">{{ rep.attributes.Name }}</h5><br>
                            <h6 class="text-center">{{ rep.attributes.Position }}</h6>
                        </v-card>


                        <br>
                    </v-col>

                </v-row>
                <v-btn class="mx-auto d-flex" to="/executives" style="width: 15em;" variant="flat" color="red-accent-2">See
                    all reps
                    <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                <br>
            </v-container><br>
        </div> -->
        <!-- <div style="background: #DAEDF6;">
            <v-container>
                <v-row class="mt-16 mb-16">
                    <v-col cols="" lg="6" sm="">
                        <v-img height="350"
                            :src="'https://admin.gathstudents.com' + home.data.attributes.tourismFutureDes.data.attributes.url"></v-img>
                    </v-col>
                    <v-col cols="auto" lg="6" sm="8">
                        <v-container class="mt-10">
                            <h4 class="text-left">
                                {{ home.data.attributes.tourismFutureTitle }}
                            </h4><br>
                            <p class="text-justify">
                                {{ home.data.attributes.tourismFutureDescription }}
                            </p><br>
                            <v-btn to="/hospitality" color="#103778" variant="outlined">View Report
                                <v-icon>mdi-arrow-right-thin-circle-outline</v-icon></v-btn>
                        </v-container>
                    </v-col>
                </v-row>
            </v-container>
        </div> -->



        <!-- <v-container> -->
        <!-- <h3 class="text-left mt-5">{{ home.data.attributes.PartnerSection }}</h3> -->
        <!-- <v-row>
                <v-col cols="" sm="" v-for="partner in partners.data" :key="partner.id">
                    <v-img aspect-ratio="1" height="200"
                        :src="'https://admin.gathstudents.com' + partner.attributes.Logo.data.attributes.url"></v-img>
                </v-col>
            </v-row> -->
        <!-- <v-row>
                <v-col cols="" sm=""
                    v-for="(partner, index) in [{ id: 'M' }, { id: 'D' }, { id: 'highway' }, { id: 'Police' }, { id: 'road safety' },]"
                    :key="index">
                    <v-img aspect-ratio="1" height="200" :src="`/img/${partner.id}.png`"></v-img>
                </v-col>
            </v-row> -->

        <!-- </v-container> -->
    </div>
</template>
<script setup>
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

// import imgbg from '../assets/img/home.jpeg'

// const homeContent = await useFetch('https://admin.gathstudents.com/api/home-page?populate=*');
// const home = homeContent.data.value;
// // console.log(homeContent)
// const { data: uniLogos } = await useFetch('https://admin.gathstudents.com/api/uni-logos?populate=*')

// const link = 'Tourism Impact Report (2022).';

// const exeMem = 'From the University Tourism Community';
// const memDes = '5+ thousand tourism students have already joined the  university tourism community.';


// const { data: reps } = await useFetch('https://admin.gathstudents.com/api/executives?populate=*')
// const { data: testimonies } = await useFetch('https://admin.gathstudents.com/api/testimonies?populate=*');
// // console.log(testimonies.attributes)
// const { data: events } = await useFetch('https://admin.gathstudents.com/api/events?populate=*');
// const { data: partners } = await useFetch('https://admin.gathstudents.com/api/partners?populate=*');
// // console.log(partners)




const emits = ['profilePhotoClick']; // Declare the emitted event

const profilePhoto = ref('/img/hawa.png'); // Set the default profile photo path

// const showSubscriberDetails = () => {
//     // Emit the 'profilePhotoClick' event to be handled internally
//     emit('profilePhotoClick');
//     // Add logic to show subscriber details here
//     console.log('Show subscriber details');
// };

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