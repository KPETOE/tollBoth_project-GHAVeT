<template>
    <div class="apply">
        <v-parallax style=" background-color: rgb(213, 244, 244);">


            <br />

            <ul class="d-flex justify-content-end">
                <li class="nav-item">
                    <avatar />
                </li>
            </ul>
            <v-row>
                <v-col cols="12">
                    <h2 class="text-center mb-10  Ella">New Application </h2>
                </v-col>
            </v-row>

            <p class="text-center font-weight-bold text-center " style=" color: rgb(219, 54, 54);  font-size: 1rem;"> Please
                complete
                the following form for your new RFID tag for tolling. <br> Ensure all information is accurate and complete
                to expedite the processing of your application. <br> Thank you for choosing our tolling services.</p>
            <div>
                <v-container>
                    <v-row class="align-items-center">
                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                Vehicle type
                            </h1>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <div style="background-color: azure; width: 34.5em;" class=" corners">
                                            <v-text-field v-model="input6" label="New  Owner Account Name" outlined
                                                color="white" class="mx-auto  corners" :rules="input6Rules"
                                                style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain"></v-text-field>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>

                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                residence
                            </h1>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <div style="background-color: azure; width: 34.5em;" class=" corners">
                                            <v-text-field v-model="input6" label="New  Owner Account Name" outlined
                                                color="white" class="mx-auto corners" :rules="input6Rules"
                                                style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain"></v-text-field>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>




                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                Any previous Tags
                            </h1>
                        </v-col>


                        <v-col cols="12" md="6">
                            <div class="d-flex justify-center">
                                <div class="radio-wrapper text-align left ">
                                    <input type="radio" id="yesRadio" name="previousTags" v-model="selectedOption"
                                        value="yes" />
                                    <label for="yesRadio">Yes</label>
                                </div>

                                <div class="ml-3 radio-wrapper">
                                    <input type="radio" id="noRadio" name="previousTags" v-model="selectedOption"
                                        value="no" />
                                    <label for="noRadio">No</label>
                                </div>
                            </div>
                        </v-col>



                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                License plate
                            </h1>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <div style="background-color: azure; width: 34.5em;" class=" corners">
                                            <v-text-field v-model="input6" label="New  Owner Account Name" outlined
                                                color="white" class="mx-auto  corners" :rules="input6Rules"
                                                style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain"></v-text-field>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>



                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                Road Worthy #
                            </h1>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <div style="background-color: azure; width: 34.5em;" class=" corners">
                                            <v-text-field v-model="input6" label="New  Owner Account Name" outlined
                                                color="white" class="mx-auto corners" :rules="input6Rules"
                                                style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain"></v-text-field>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>


                        <v-col cols="12" md="6">
                            <h1 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                Insurance
                            </h1>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <!-- <button @click="handleButtonClick" class=" app ">
                                            <input type="text" class="form-control textbox" id="textBox1"
                                                placeholder="GHS 500.00" />
                                        </button> -->

                                        <div style="background-color: azure; width: 34.5em;  " class=" corners">
                                            <v-text-field v-model="input6" label="New  Owner Account Name" outlined
                                                color="white" class="mx-auto  corners" :rules="input6Rules"
                                                style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain"></v-text-field>
                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>


                        <br> <br>


                        <v-col cols="12" md="6">
                            <h3 class="mx-auto text-uppercase text-black text-start text-center" style="font-size: 1.3em">
                                Pickup Location
                            </h3>
                        </v-col>
                        <v-col cols="12" md="6">
                            <div class="container">
                                <v-row class="d-flex justify-center" style="text-align: center">
                                    <v-col cols="12">
                                        <div style="background-color: azure; width:34.5em;" class=" corners">

                                            <v-combobox clearable
                                                :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                                item-text="name" v-model="selectedItem" outlined hide-details="auto"
                                                class="custom-background"
                                                style="box-shadow: none; width: 550px;  height: 4em;  background-color: rgba(170, 170, 221, 0.489);"
                                                variant="plain" placeholder="Select the Nearest Office"></v-combobox>

                                        </div>
                                    </v-col>
                                </v-row>
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </div>
            <br><br>

            <v-container style="text-align: center;">

                <h1 class="mx-auto text-uppercase text-red text-center" style="font-size: 1.2em">
                    Verify that the data provided is Correct.
                </h1>


              <v-row align="center"   cols="" lg="12" md="6" class="d-flex ">

                <v-col  cols="" lg="6" md="6" sm="6">
                    <v-checkbox label="I Have Read And Agree With Terms And Conditions
                 Of Used."></v-checkbox>
                </v-col>

                <v-col align="right"   cols="" lg="6" md="6" sm="6">
                    <v-btn @click="handleSubmit" type="submit" prepend-icon="mdi-check-circle" class="B-clear">
                        <template v-slot:prepend>
                            <v-icon color="success"></v-icon>
                        </template>
                        Submit
                        <template v-slot:append>
                            <v-icon color="warning"></v-icon>
                        </template>
                    </v-btn>
                </v-col>

            </v-row>
            </v-container>



        </v-parallax>
    </div>
</template>
<script setup>
// import imgbg from '../assets/img/home.jpeg'

const yesChecked = ref(false);
const noChecked = ref(false);

</script>
<style>
.corners {

    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;

}

.Ella {

    text-decoration: underline;
}


.app:hover {
    border-color: rgb(24, 132, 114);
    background-color: rgb(24, 132, 114);
}


.textbox {
    height: 30px;
    width: 96%;
    margin: 0 auto;

    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
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




.radio-wrapper {
    font-size: 1.5em;
    margin-right: 30px;
}




.custom-background {
    background-color: #e9e8e6;
    /* Set your desired background color */



    height: 30px;
    width: 96%;
    margin: 0 auto;

    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 0px;
}
</style>
