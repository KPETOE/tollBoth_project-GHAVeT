<template>
    <div>

        <v-footer class="bg-indigo-darken-1 text-center">


            <v-container>
                <v-row>
                    <v-col cols="auto" lg="7" sm="12" class="mt-5">
                        <v-row>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(34, 173, 127);">Membership</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to="">  <v-icon color="yale-blue">mdi-star</v-icon>Membership Benefits</nuxt-link></li>
                                    <!-- <li><nuxt-link to="">Registration</nuxt-link> </li> -->
                                    <li><nuxt-link to=""><v-icon color="yale-blue">mdi-star</v-icon>Partner With Us</nuxt-link> </li>
                                    <li><nuxt-link to=""> <v-icon color="yale-blue">mdi-star</v-icon>Become a Member</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color:  rgb(34, 173, 127);">ADDRESS</h5>
                                <ul class="text-left ml-n8">
                                    <!-- <li><nuxt-link class="link" to="/blogs/"> <v-icon color="yale-blue">mdi-star</v-icon> OSU American Embassy</nuxt-link> </li> -->
                                    <li><nuxt-link to="">P. O. Box 521 Accra, </nuxt-link> </li>
                                    <!-- <li><nuxt-link to="">Legacy Advocacy</nuxt-link> </li> -->
                                    <li><nuxt-link class="link" to="/about">GhanaGA-145-7445,</nuxt-link> </li>
                                    <label >Accra</label>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(34, 173, 127);">Events</h5>
                                <ul class="text-left ml-n8">
                                    <!-- <li><nuxt-link class="link" to="/events/"></nuxt-link> Event Calandar</li> -->
                                    <li><nuxt-link to="">Out Reaches</nuxt-link> </li>
                                    <li><nuxt-link to="">Partner With Us</nuxt-link> </li>
                                    <li><nuxt-link to="">Become a Member</nuxt-link> </li>
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(34, 173, 127);">Organization</h5>
                                <ul class="text-left ml-n8">
                                    <!-- <li><nuxt-link class="link" to="/events/">Event Calandar</nuxt-link> </li> -->
                                    <!-- <li><nuxt-link to="">Out Reaches</nuxt-link> </li> -->
                                    <li><nuxt-link to="">Partner With Us</nuxt-link> </li>
                                    <!-- <li><nuxt-link class="link" to="/gallery">Gallery</nuxt-link> </li> -->
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="5" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(34, 173, 127);">Partners</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to=""><v-icon color="yale-blue">mdi-star</v-icon> Ministry of Roads</nuxt-link> </li>
                                    <li><nuxt-link to=""><v-icon color="yale-blue">mdi-star</v-icon> Ghana  Highways Authority</nuxt-link> </li>
                                    <li><nuxt-link to=""> <v-icon color="yale-blue">mdi-star</v-icon> Driver's & Vehicle Lencis Authority </nuxt-link></li>
                                    <li><nuxt-link to=""> <v-icon color="yale-blue">mdi-star</v-icon> Ghana Police Service </nuxt-link></li>
                                    <!-- <li>Become a Member</li> -->
                                </ul>
                            </v-col>
                            <v-col cols="auto" lg="3" sm="12" md="6">
                                <h5 class="text-left" style="color: rgb(34, 173, 127);">Legal</h5>
                                <ul class="text-left ml-n8">
                                    <li><nuxt-link to="">Terms & Conditions</nuxt-link></li>
                                    <li><nuxt-link to="">Privacy Policy</nuxt-link></li>
                                    <li><nuxt-link to="">Cookie Policy</nuxt-link></li>
                                    <li><nuxt-link to="">Website Accessibility Statement</nuxt-link></li>
                                </ul>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="auto" lg="5" sm="12">
                        <img :src="logoIcon" width="325" alt="">
                        <!-- <div class="pt-0 text-justify">
                            Join the Ghana Association of Tourism and Hospitality Students today and unlock exclusive
                            opportunities to
                            learn from industry experts, network with. network with professionals, and make a t industry.
                        </div> -->

                        <div class="pt-0 text-justify">{{ dynamicMessage }}</div>

                        <v-form class="mt-7">
                            <v-text-field variant="outlined"
                                placeholder="Tell Us Your Experience On the Road, You can Report Fellow Comuters."></v-text-field>
                            <v-btn style="height: 55px;">Submit To Us </v-btn>
                        </v-form>
                    </v-col>
                </v-row>

                <v-divider></v-divider>

                <div>
                    <v-btn v-for="sm in sms" :key="sm" :icon="sm.icons" :href="sms.src" class="mx-4"
                        variant="text"><v-icon>{{ sm.icons }}</v-icon></v-btn>
                </div>
            </v-container>  
        </v-footer>
    </div>
</template>
<script setup>
import logoIcon from '../assets/img/A-transformed.png'
const sms = ref([
    { icons: 'mdi-facebook', src: '' },
    { icons: 'mdi-twitter', src: 'https://twitter.com/GATHSofficial1?t=-MNnLOAY6ohVcCFWtirSQg&s=09' },
    { icons: 'mdi-linkedin', src: 'https://www.linkedin.com/company/ghana-association-of-tourism-and-hospitality-students-gaths/?originalSubdomain=gh' },
    { icons: 'mdi-instagram', src: 'https://instagram.com/gaths.official?igshid=OGQ5ZDc2ODk2ZA==' }
]);

const dynamicMessage = ref("Join the Ghana Association of Tourism and Hospitality Students today and unlock exclusive opportunities to learn from industry experts, network with professionals, and make a t industry.");
const messages = [
  "Say goodbye to long queues and frustrating delays at toll booths. With our state-of-the-art electronic toll system, transactions are swift, seamless, and hassle-free. Enjoy the convenience of uninterrupted journeys as you effortlessly breeze through toll plazas.",
  "GHaVeT System is dedicated to sustainability. Embrace eco-friendly commuting with reduced emissions, as our system promotes the use of electronic and hybrid vehicles. Join us in making a positive impact on the environment with every journey.",
  "Your safety and data security are our top priorities. Rest assured that our electronic toll system employs robust encryption and authentication measures, guaranteeing a secure and reliable experience for every user.",
  "Introducing GHaVeT System – Pioneering Innovation in Your Commute At GHaVeT Electronic Vehicles Toll System, we are redefining the landscape of toll collection, ushering in a new era of efficiency, sustainability, and convenience for our valued patrons. Our commitment to innovation is steering us toward a greener, smarter, and more connected future in the realm of electronic toll systems."
  // Add more messages as needed
];

let currentMessageIndex = 0;

const changeMessage = () => {
  dynamicMessage.value = messages[currentMessageIndex];
  currentMessageIndex = (currentMessageIndex + 1) % messages.length;
};

// Change the message every 5 seconds
onMounted(() => {
  setInterval(changeMessage, 5000);
});

// Initial message change
changeMessage();

</script>
<style>
ul {
    list-style-type: none;

}

.link {
    text-decoration: none;
    color: white;
}

</style>