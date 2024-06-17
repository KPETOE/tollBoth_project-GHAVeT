<template>
    <div class="">
        <v-parallax style=" " class="container-fluid full-height d-flex justify-content-center align-items-center">
            <v-form @submit.prevent="submitApplication">


                <br />


                <v-row>
                    <v-col cols="12">
                        <h2 class="text-center mb-10  Ella">New Application </h2>
                    </v-col>
                </v-row>

                <p class="text-center font-weight-bold text-center "
                    style=" color: rgb(219, 54, 54);  font-size: 1rem;">
                    Please
                    complete
                    the following form for your new RFID tag for your Vehicle. <br> Ensure all information is accurate
                    and
                    complete
                    to expedite the processing of your application. <br> Thank you for choosing our tolling services.
                </p>
                <div class="card-Apply">
                    <v-container>
                        <v-row class="align-items-center">
                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    Vehicle type
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width: 34.5em;" class=" corners">
                                                <v-text-field v-model="applyForm.veh_type"
                                                    label="Vehicle make and Modle" outlined color="white"
                                                    class="mx-auto corners" :rules="vehicleMakeModelRules"
                                                    style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>

                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    residence
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width: 34.5em;" class=" corners">
                                                <v-text-field v-model="applyForm.residence" label="Home or Work Address"
                                                    outlined color="white" class="mx-auto corners" :rules="addressRules"
                                                    style="box-shadow: none; width: 550px; "
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>


                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    Gh Card #
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width: 34.5em;" class=" corners">
                                                <v-text-field v-model="applyForm.ghCard" label="GH Card Number" outlined
                                                    color="white" class="mx-auto corners" :rules="ghCardNumberRules"
                                                    style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>


                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    License plate
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width: 34.5em;" class=" corners">
                                                <v-text-field v-model="applyForm.license" label="Plate Number" outlined
                                                    color="white" class="mx-auto  corners" :rules="plateNumberRules"
                                                    style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>



                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
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
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    Road Worthy #
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width: 34.5em;" class=" corners">
                                                <v-text-field v-model="applyForm.roadWorthy" label="Road Worhty"
                                                    outlined color="white" class="mx-auto corners"
                                                    :rules="roadWorthyRules"
                                                    style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>


                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    Insurance
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">


                                            <div style="background-color: azure; width: 34.5em;  " class=" corners">
                                                <v-text-field v-model="applyForm.insurance" label="Serial #" outlined
                                                    color="white" class="mx-auto  corners"
                                                    :rules="insuranceSerialNumberRules"
                                                    style="box-shadow: none; width: 550px; background-color: rgba(170, 170, 221, 0.489);"
                                                    variant="outlined"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>


                            <br> <br>


                            <v-col cols="12" md="6">
                                <h3 class="mx-auto text-uppercase text-black text-start text-center"
                                    style="font-size: 1.3em">
                                    Pickup Location
                                </h3>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <div style="background-color: azure; width:34.5em;" class=" corners">

                                                <v-combobox clearable
                                                    :items="['California', 'ACCRA', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                                    item-text="name" v-model="applyForm.pickup_loc" outlined
                                                    hide-details="auto" class="custom-background corners"
                                                    style="box-shadow: none; width: 550px;  height: 4em;  "
                                                    variant="plain"
                                                    placeholder="Select the Nearest DVLA Office"></v-combobox>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                </div>
                <br>

                <v-col class="  container-fluid full-height d-flex justify-content-center align-items-center">
                    <v-row class="form-below">

                        <v-container style="text-align: center;">

                            <h1 class="mx-auto text-uppercase text-red text-center" style="font-size: 1.2em">
                                Verify that the data provided is Correct.
                            </h1>


                            <v-row align="center" cols="" lg="12" md="6" class="d-flex ">

                                <v-col cols="" lg="6" md="6" sm="6">
                                    <v-checkbox v-model="checkbox" :rules="[v => !!v || 'You must agree to continue!']"
                                        required label="I Have Read And Agree With Terms And Conditions
                                   Of Used."></v-checkbox>
                                </v-col>

                                <v-col align="right" cols="" lg="6" md="6" sm="6">
                                    <v-btn @click="setTimeout(handleSubmit(), 6000)" type="submit"
                                        prepend-icon="mdi-check-circle" class="B-clear">
                                        <template v-slot:prepend>
                                            <v-icon color="success"></v-icon>
                                        </template>
                                        Submit

                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>
                                    </v-btn>
                                    <v-dialog v-model="Alert" :type="type" width="20em">
                                        <v-alert width="600" height="400" closable variant="flat" color="blue"
                                            title="Application Success" text="You've submited Successfully!"></v-alert>
                                    </v-dialog>
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-row>

                </v-col>
            </v-form>


        </v-parallax>
    </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
// Function to generate random number within a range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



const profile = await client.from('profile').select('Username, first_name, last_name, gh_card_no').eq('id', user.value.id).single()
let Alert = ref(false);
let type = ref('success');
const applyForm = ref({
    vettag: '',
    license: '',
    newTag: '',
    ghCard: profile.data.gh_card_no,
    residence: '',
    veh_type: '',
    insurance: '',
    pickup_loc: '',
    roadWorthy: '',
    user_id: '',
    // id:''
    // checkbox: false
})



const checkbox = ref(false);



let count = 1000;

// Variables for reference numbers
let ref1 = 100;
let ref2 = 10;
let ref3 = 200;


// const applDate = await client.from('application').select('AppointmentDate').eq('id', user.value.id).single();
const currentDate = new Date();
const setMins = new Date(currentDate.getTime() + (3 * 60000));


const submitApplication = async () => {

    if (!checkbox.value) {
        alert('You Have Not Agreed To Terms  & Conditons!')
        return
    }

    let serial = applyForm.value.ghCard + '-' + count++;
    applyForm.value.vettag = serial;

    // Generate random reference numbers
    let ref1 = generateRandomNumber(1, 100);
    let ref2 = generateRandomNumber(1, 100);
    let ref3 = generateRandomNumber(1, 200);

    let reference = 'G' + ref1 + 'V' + ref2 + 'T' + ref3;

    if (applyForm.value.ghCard === '' || applyForm.value.license === '' || applyForm.value.residence === '' || applyForm.value.veh_type === '' || applyForm.value.insurance === '' || applyForm.value.pickup_loc === '' || applyForm.value.roadWorthy === '') {
        alert('Please  Ensure All You Fields Are Completely Filled!')
        return
    }
    // let x = 0;

    try {


        Alert.value = true

        // if (applDate == currentDate) {
        //     const { data, error } = await client.from('application').update({
        //         Status: 'Approved',
        //     });
        // }

        const { data, error } = await client.from('application').insert([
            {
                GHAVeTag: applyForm.value.ghCard + '-' + count++,
                // GHAVeTag: applyForm.value.ghCard + '-' + x++,
                Licenced_plate: applyForm.value.license,
                Gh_card: applyForm.value.ghCard,
                residence: applyForm.value.residence,
                veh_type: applyForm.value.veh_type,
                Insurance: applyForm.value.insurance,
                Pickup_loc: applyForm.value.pickup_loc,
                road_worthy: applyForm.value.roadWorthy,
                Refrence_No: reference,
                // AppointmentDate: '',
                Status: 'Pending'
            }
        ]).select();




        // Clear form fields after successful submission
        applyForm.value.ghCard = '';
        applyForm.value.license = '';
        applyForm.value.residence = '';
        applyForm.value.veh_type = '';
        applyForm.value.insurance = '';
        applyForm.value.pickup_loc = '';
        applyForm.value.roadWorthy = '';


        const dialog = true






    } catch (error) {
        console.log(error);

    }


    count += Math.floor(Math.random() * 1000);
    ref1 += Math.floor(Math.random() * 100);
    ref2 += Math.floor(Math.random() * 10);
    ref3 += Math.floor(Math.random() * 200);


};


// Validation rules for Vehicle Make and Model
const vehicleMakeModelRules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 70) || 'Max 70 characters allowed',
];

// Validation rules for Home or Work Address
const addressRules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 100) || 'Max 100 characters allowed',
];

/// Validation rules for GH Card Number
// const ghCardNumberRules = [
//     value => !!value || 'Field is required',
//     value => (value && value.length === 15) || 'GH Card Number should be 15 characters long',
//     value => /^GHA-\d{9}-\d$/.test(value) || 'Invalid GH Card Number format. Format should be GHA-xxxxxxxxx-x where x is a digit.',
// ];






// Validation rules for License Plate Number
const plateNumberRules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 15) || 'Max 15 characters allowed',

];

// Validation rules for Road Worthy
const roadWorthyRules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 30) || 'Max 30 characters allowed',
    // Add more specific rules for roadworthy format if needed
];

// Validation rules for Insurance Serial Number
const insuranceSerialNumberRules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 25) || 'Max 25 characters allowed',
    // Add more specific rules for insurance serial number format if needed
];

</script>


<style>
.corners {
    background: linear-gradient(to right, rgba(135, 235, 222, 0.082), #abc8d831, #bee0f38a) !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;

    border-width: 0.5px;
    border-style: solid;
    border-color: rgb(102, 92, 92);

}

.Ella {

    text-decoration: underline;
}



.form-below {
    background-color: rgba(213, 244, 200, 0.575);
    
    margin-bottom: 1rem;
    box-shadow: 0 0 10px rgba(19, 15, 15, 0.562);
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

.card-Apply {

    border: none;
    box-shadow: 0 0 15px rgba(19, 15, 15, 0.562);
    margin-bottom: 1rem;

    margin-top: 1px;
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
