<template>
    <div class="AccountsDetails">
        <v-parallax style="">
            <div class="accountimg">
                <br />
                <!-- <ul class="d-flex justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link text-white" @click="showSubscriberDetails">
                            <img :src="profilePhoto" class="profile-photo" alt="Profile Photo">
                        </a>
                    </li>
                </ul> -->
                <ul class="d-flex justify-content-end">
                    <li class="nav-item">
                        <avatar />
                    </li>
                </ul>
                <v-container>
                    <h1 class="mx-auto text-uppercase text-white text-center" style="font-size: 1.8em">
                        WELCOME TO YOUR FINANCED PLATFORM ALL NECESSARY MEASURES ARE IN
                        PLACE
                    </h1>
                    <p class="text-center font-weight-bold  text-white" style="   font-size: 1.5rem;"> To protect your information.</p>
                <br>
                </v-container>
                <v-container>
                    <h1 class="mx-auto text-uppercase text-BLACK text-center" style="font-size: 1.5em">
                        ACCOUNT DETAILS
                    </h1>
                </v-container>
                <br />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6" style="text-align: center">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-BLACK text-center"
                                style="font-size: 1.5rem; font-weight: bold">BALANCE</label>
                            <button class="btn btn-primary non-responsive-button">
                                <input type="text" class="form-control square-box" id="textBox1" placeholder="GHS 500.00" />
                            </button>
                        </div>

                        <div class="col-md-6 text-center" style="">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-BLACK text-center"
                                style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                            <button class="btn btn-primary non-responsive-button">
                                <input type="text" class="form-control square-box" id="textBox2" placeholder="GHS 500.00" />
                            </button>
                        </div>
                    </div>
                </div>
                <br /><br />
                <br /><br />

                <div class="container d-flex justify-content-center align-items-center">
                    <div class="col-md-6 text-center" style="">
                        <label for="textBox3" class="form-label mx-auto text-uppercase text-BLACK text-center"
                            style="font-size: 1.5rem; font-weight: bold">LAST DEPOSIT</label>
                        <button class="btn btn-primary host">
                            <div class="mb-3 d-flex">
                                <input type="text" style="
                    height: 40px;
                    width: 65%;
                    margin: 0 auto;
                    border-top-left-radius: 0px;
                    border-top-right-radius: 3px;
                    border-bottom-left-radius: 0px;
                    border-bottom-right-radius: 3px;
                  " class="form-control table" id="textBox3" placeholder="GHS 500.00" />

                                &nbsp;
                                <input type="text" style="
                    height: 40px;
                    width: 65%;
                    margin: 0 auto;
                    border-top-left-radius: 3px;
                    border-top-right-radius: 0px;
                    border-bottom-left-radius: 3px;
                    border-bottom-right-radius: 0px;
                  " class="form-control table" id="textBox4" placeholder="01/01/2024" />
                            </div>
                        </button>
                    </div>
                </div>

                <br><br>
                <!-- <div class="container">
                    <v-row class="d-flex justify-center  " style="text-align: center;">

                        <v-col cols="" md="12">
                            <button @click="handleButtonClick" class="btn btn-primary  custom-width  ">DEPOSIT FUNDS</button>

                        </v-col>
                        <v-col cols="" md="12">
                            <button @click="handleButtonClick" class="btn btn-primary  custom-width">STATEMENT</button>
                        </v-col>
                    </v-row>
                    
                </div> -->

                
                <div class="container">
                    <v-row justify="space-between" style="text-align: center;">
                        <v-col cols="12" md="6">
                            <button 
                             class="btn btn-primary custom-width">DEPOSIT FUNDS</button>
                        </v-col>
                        <v-col cols="12" md="6">
                            <button  class="btn btn-primary custom-width">STATEMENT</button>
                        </v-col>
                    </v-row>
                </div>

                <!-- <div class="row justify-content-center">
                    </div>
                    <div class="col-md-12">


                        <div class="col-md-12" style="text-align: center;">

                        </div>
                    </div> -->
                <br /><br />
                <v-container>
                    <h3 class="mx-auto text-uppercase text-black text-center block-text" style="font-size: 1em">
                        ALL Funds Are Subject to <br />Financial Management And Money<br />
                        Laundering REGUALATIONS <br />
                        ACT 921 2016
                    </h3>
                </v-container>
            </div>
        </v-parallax>
    </div>
</template>
<script setup>
// import imgbg from '../assets/img/home.jpeg'

const homeContent = await useFetch(
    "https://admin.gathstudents.com/api/home-page?populate=*"
);
const home = homeContent.data.value;
// console.log(homeContent)
const { data: uniLogos } = await useFetch(
    "https://admin.gathstudents.com/api/uni-logos?populate=*"
);

const link = "Tourism Impact Report (2022).";

const exeMem = "From the University Tourism Community";
const memDes =
    "5+ thousand tourism students have already joined the  university tourism community.";

const { data: reps } = await useFetch(
    "https://admin.gathstudents.com/api/executives?populate=*"
);
const { data: testimonies } = await useFetch(
    "https://admin.gathstudents.com/api/testimonies?populate=*"
);
// console.log(testimonies.attributes)
const { data: events } = await useFetch(
    "https://admin.gathstudents.com/api/events?populate=*"
);
const { data: partners } = await useFetch(
    "https://admin.gathstudents.com/api/partners?populate=*"
);
// console.log(partners)

const emits = ["profilePhotoClick"]; // Declare the emitted event

const profilePhoto = ref("/img/hawa.png"); // Set the default profile photo path

const showSubscriberDetails = () => {
    // Emit the 'profilePhotoClick' event to be handled internally
    emit("profilePhotoClick");
    // Add logic to show subscriber details here
    console.log("Show subscriber details");
};


</script>
<style>
.non-responsive-button {
    width: 250px;
    height: 150px;
    background-color: rgb(24, 132, 114);
}

.non-responsive-button:hover {
    border-color: rgb(24, 132, 114);
    background-color: rgb(24, 132, 114);
}

.host {
    width: 300px;
    height: 100px;
    background-color: rgb(40, 195, 169);
}

.square-box {
    height: 80px;
    width: 70%;
    margin: 0 auto;

    border-top-left-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 15px;
}

.accountimg {
    background: rgb(127, 203, 203);
    height: 100%;
}

body {
    background: #b4bfc1;
}

.profile-photo {
    width: 80px;

    height: 80px;

    border-radius: 100%;

    cursor: pointer;
}

.form-label {
    display: block;
    /* Make the label a block element to position it above the button */
    margin-bottom: 5px;
    /* Add some margin between the label and the button */
}

.custom-width {
    width: 150px;
    transition: background-color 0.3s ease;
    /* Add a smooth transition effect */

    /* Additional styling for the normal state */
    background-color: #105340f5;
    color: #fff;
    border: 1px solid #040a11;
}

.custom-width:hover {
    background-color: #249385;
    /* Change background color on hover */
    color: #fff;
    /* Change text color on hover */
    border: 1px solid #ededed;
    /* Change border color on hover */
}

.block-text {
    display: block;
}


.btn-primary.host {
    background-color: rgb(24, 132, 114);
    border-color: rgb(24, 132, 114);
}

.btn-primary.host:hover {
    background-color: rgb(24, 132, 114);
}
</style>
