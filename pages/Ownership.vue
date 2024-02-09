<template>
    <div class="Ownership" style="background-color:  rgb(213, 244, 244);">
        <div>
            <v-container>
                <h2 class="text-uppercase text-black text-center font-weight-bold  ">
                    Transfer of OWwnership


                </h2>
                <p class="text-center font-weight-bold " style=" color: rgb(219, 54, 54);  font-size: 1rem;"> Data Provide
                    will be Verified And Approved</p>
                <br> <br>
                <div class="form">


                    <form id="myForm" style="text-align: center; ">
                        <!-- Text inputs -->


                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold ">GHAVeTTag #</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">
                                    <v-text-field v-model="input1" label="GHAVeTTag  #" outlined color="white"
                                        class="mx-auto" :rules="input1Rules" style="box-shadow: none;    width: 500px;"
                                        variant="plain"></v-text-field>
                                </div>

                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold">Previous VeH Reg #</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">

                                    <v-text-field v-model="input2" label="Previous VeH Reg #" outlined color="white"
                                        class="mx-auto" :rules="input2Rules" style="box-shadow: none;  width: 500px;"
                                        variant="plain"></v-text-field>


                                </div>

                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold ">New VeH Reg #</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">
                                    <v-text-field v-model="input3" label="New VeH Reg #" outlined color="white"
                                        class="mx-auto" :rules="input3Rules" style="box-shadow: none; width: 500px;"
                                        variant="plain"></v-text-field>


                                </div>

                            </v-col>
                        </v-row>


                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold ">New VeH Road Worthy #</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">
                                    <v-text-field v-model="input4" label="New VeH Road Worthy #" outlined color="white"
                                        class="mx-auto" :rules="input4Rules" style="box-shadow: none;  width: 500px;"
                                        variant="plain"></v-text-field>
                                </div>

                            </v-col>
                        </v-row>

                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold ">New VeH Insurance #</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">

                                    <v-text-field v-model="input5" label="New VeH Insurance #" outlined color="white"
                                        class="mx-auto" :rules="input5Rules" style="box-shadow: none;width: 500px;"
                                        variant="plain"></v-text-field>
                                </div>

                            </v-col>
                        </v-row>


                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6" class="d-flex align-center">
                                <label class="mr-2  font-weight-bold ">New Owner Account Name</label>
                                <div style="background-color: azure; width: 30em;" class=" BckCol">
                                    <v-text-field v-model="input6" label="New  Owner Account Name" outlined color="white"
                                        class="mx-auto  BckCol" :rules="input6Rules" style="box-shadow: none; width: 500px;"
                                        variant="plain"></v-text-field>
                                </div>
                            </v-col>
                        </v-row>
                        <br> <br>
                       <br>
                        <input value="checked" type="checkbox">
                        <label for="checked" class="ml-5 text-red">I Have Read And Agree With All Terms And Conditions
                            Of Used.</label>
                        <br> <br>


                        <!-- Buttons-->


                        <!-- <v-row>
                            <v-col>
                                <v-btn @click="handleSubmit" type="submit" color="success">Submit</v-btn>
                            </v-col>
                            <v-col>
                                <v-btn @click="clearForm" color="error">Clear</v-btn>
                            </v-col>
                        </v-row> -->
                        <v-row class="d-flex justify-center align-center">
                            <v-col cols="12" lg="6" md="6">
                                <v-btn @click="handleSubmit" type="submit" color="success">Submit</v-btn>
                            </v-col>
                            <v-col cols="12" lg="6" md="6">
                                <v-btn @click="clearForm" color="error">Clear</v-btn>
                            </v-col>
                        </v-row>
                    </form>


                    <!-- <v-checkbox
      v-model="state.checkbox"
      :error-messages="v$.checkbox.$errors.map(e => e.$message)"
      label="Do you agree?"
      required
      @change="v$.checkbox.$touch"
      @blur="v$.checkbox.$touch"
    ></v-checkbox> -->
                    <!--    caution for sbmit ing DATA-->
                    <!-- <v-dialog v-model="confirmDialog" max-width="400">
                        <v-card>
                            <v-card-title>Confirmation</v-card-title>
                            <v-card-text>
                                Are you sure you want to submit the form?
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="primary" @click="submitForm">Yes</v-btn>
                                <v-btn color="error" @click="cancelSubmit">No</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog> -->
                    <br> <br>
                </div>




            </v-container>
        </div>









    </div>
</template>

<script setup>

import { ref } from 'vue';

// Define reactive variables for form inputs
const input1 = ref('');
const input2 = ref('');
const input3 = ref('');
const input4 = ref('');
const input5 = ref('');
const input6 = ref('');

const checked = ref('');

// // Function to clear the form
const clearForm = () => {
    input1.value = '';
    input2.value = '';
    input3.value = '';
    input4.value = '';
    input5.value = '';
    input6.value = '';
};


const handleSubmit = () => {
    // Handle form submission logic
    // You can perform additional validation or submit data to the server
    if (checked == ! true) {
        alert('You have not agreed!')
    }
};


// Validation rules for each text field
const input1Rules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 70) || 'Max 10 characters',
];



const input2Rules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 20) || 'Max 20 characters',
    value => /^[a-zA-Z0-9]+$/.test(value) || 'Only alphanumeric characters are allowed',
];


const input3Rules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 20) || 'Max 20 characters',
    value => /^\d+$/.test(value) || 'Only numbers are allowed',
];


const input4Rules = [

    value => !!value || 'Field is required',
    value => (value && value.length <= 20) || 'Max 20 characters',
    value => /^\d+$/.test(value) || 'Only numbers are allowed',
];


const input5Rules = [
    value => !!value || 'Field is required',
    value => (value && value.length <= 20) || 'Max 20 characters',
    value => /^\d+$/.test(value) || 'Only numbers are allowed',
];


const input6Rules = [

    value => !!value || 'Field is required',
    value => (value && value.length <= 20) || 'Max 20 characters',
    value => /^[a-zA-Z0-9]+$/.test(value) || 'Only alphanumeric characters are allowed',
];
</script>





<style>
.form {
    text-align: center;
}


.align-center {
    align-items: center;
}



/* . {
    background-color: aliceblue;

} */
</style>
