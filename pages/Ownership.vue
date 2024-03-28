<template>
    <div class="Ownership" style="background-color:  rgb(213, 244, 244);">
        <div>

            <h2 class="text-uppercase text-black text-center font-weight-bold  ">
                Transfer of Ownership


            </h2>
            <p class="text-center font-weight-bold " style=" color: rgb(219, 54, 54);  font-size: 1rem;"> Data Provided
                will be Verified And Approved</p>



            <v-tabs v-model="tab" align-tabs="center" bg-color="light-green-lighten-5">

                <v-tab value="tag" class="mr-12">
                    <div class="d-flex flex-column align-items-center">
                        <v-icon>mdi-credit-card</v-icon>
                        <span class="text-center">GHAVeTTag</span>
                    </div>
                </v-tab>



                <v-tab value="veh">
                    <div class="d-flex flex-column align-items-center">
                        <v-icon>mdi-car</v-icon>
                        <span class="text-center">Vehicle</span>
                    </div>
                </v-tab>


            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="tag">
                    <v-container>

                        <v-form @submit.prevent="submitOwnership">
                            <v-row class="d-flex justify-center align-center">
                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">GHAVeTTag #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.vettag" label="GHAVeTTag  #" outlined
                                                    color="white" class="mx-auto" :rules="input1Rules"
                                                    style="box-shadow: none;    width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold">Previous VeH Reg #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">

                                                <v-text-field v-model="ownForm.prevTag" label="Previous VeH Reg #"
                                                    outlined color="white" class="mx-auto" :rules="input2Rules"
                                                    style="box-shadow: none;  width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">New VeH Reg #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.newTag" label="New VeH Reg #" outlined
                                                    color="white" class="mx-auto" :rules="input3Rules"
                                                    style="box-shadow: none; width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>

                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">New VeH Road Worthy #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.road_worthy"
                                                    label="New VeH Road Worthy #" outlined color="white" class="mx-auto"
                                                    :rules="input4Rules" style="box-shadow: none;  width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>



                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="mr-2  font-weight-bold ">New VeH Insurance #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">

                                                <v-text-field v-model="ownForm.newVeh_Reg" label="New VeH Insurance #"
                                                    outlined color="white" class="mx-auto" :rules="input5Rules"
                                                    style="box-shadow: none;width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">DATE</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.newTag" label="Date of Transaction"
                                                    outlined color="white" class="mx-auto" :rules="input10Rules"
                                                    style="box-shadow: none; width: 500px;" variant="plain"
                                                    type="date"></v-text-field>

                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>


                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="mr-2  font-weight-bold ">New Owner Account Name</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.accountHolder"
                                                    label="New  Owner Account Name" outlined color="white"
                                                    class="mx-auto  BckCol" :rules="input6Rules"
                                                    style="box-shadow: none; width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <br> <br>
                            <br>
                            <input value="checked" type="checkbox">
                            <label for="checked" class="ml-5 text-red">I Have Read And Agree With All Terms And
                                Conditions
                                Of Used.</label>
                            <br> <br>



                            <v-row class="d-flex justify-center align-center">
                                <v-col cols="12" lg="6" md="6">
                                    <!-- <v-btn @click="handleSubmit" type="submit" color="success">Submit</v-btn> -->

                                    <v-btn type="submit" prepend-icon="mdi-check-circle" class="B-clear">
                                        <template v-slot:prepend>
                                            <v-icon color="success"></v-icon>
                                        </template>
                                        Submit
                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>
                                    </v-btn>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-btn @click="clearForm" prepend-icon="mdi-alert-circle"
                                        class="B-clear text-red">Clear
                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>

                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-window-item>

                <!-- Begining of the  vehicle transfer tap -->

                <v-window-item value="veh">
                    <v-container>
                        <v-form @submit.prevent="submitVehicle">
                            <v-row class="d-flex justify-center align-center">
                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">GHAVeTTag #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.vettag" label="GHAVeTTag  #" outlined
                                                    color="white" class="mx-auto" :rules="input1Rules"
                                                    style="box-shadow: none;    width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold"> VeH Reg #</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">

                                                <v-text-field v-model="ownForm.prevTag" label="Previous VeH Reg #"
                                                    outlined color="white" class="mx-auto" :rules="input2Rules"
                                                    style="box-shadow: none;  width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>

                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="font-weight-bold ">DATE</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.newTag" label="Date of Transaction"
                                                    outlined color="white" class="mx-auto" :rules="input9Rules"
                                                    style="box-shadow: none; width: 500px;" variant="plain"
                                                    type="date"></v-text-field>

                                            </div>
                                        </v-col>
                                    </v-row>

                                </v-col>


                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="mr-2  font-weight-bold ">New Owner Account Name</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.accountHolder"
                                                    label="New  Owner Account Name" outlined color="white"
                                                    class="mx-auto  BckCol" :rules="input6Rules"
                                                    style="box-shadow: none; width: 500px;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col cols="" lg="12" md="6" class="d-flex align-center">
                                    <v-row>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <label class="mr-2  font-weight-bold ">MILLAGE</label>
                                        </v-col>
                                        <v-col cols="" lg="6" md="6" sm="6">
                                            <div style="background-color: azure; width: 30em;" class="mx-auto BckCol">
                                                <v-text-field v-model="ownForm.odometerReading" label="Odometer Reading"
                                                    outlined color="white" class="mx-auto" :rules="odometerReadingRules"
                                                    style="box-shadow: none; width: 500px;" variant="plain"
                                                    type="number"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                            </v-row>
                            <br> <br>
                            <br>
                            <input value="checked" type="checkbox">
                            <label for="checked" class="ml-5 text-red">I Have Read And Agree With All Terms And
                                Conditions
                                Of Used.</label>
                            <br> <br>



                            <v-row class="d-flex justify-center align-center">
                                <v-col cols="12" lg="6" md="6">
                                    <!-- <v-btn @click="handleSubmit" type="submit" color="success">Submit</v-btn> -->

                                    <v-btn type="submit" prepend-icon="mdi-check-circle" class="B-clear">
                                        <template v-slot:prepend>
                                            <v-icon color="success"></v-icon>
                                        </template>
                                        Submit
                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>
                                    </v-btn>
                                </v-col>

                                <v-col cols="12" lg="6" md="6">
                                    <v-btn @click="clearForm" prepend-icon="mdi-alert-circle"
                                        class="B-clear text-red">Clear
                                        <template v-slot:append>
                                            <v-icon color="warning"></v-icon>
                                        </template>

                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-form>
                    </v-container>
                </v-window-item>
            </v-window>






            <br> <br>
        </div>















    </div>
</template>



<script setup>
const tab = ref(null);


const submitOwnership = () => {
    // Logic for submitting ownership form
};

const submitVehicle = () => {
    // Logic for submitting vehicle form
};

// Define ownForm object
const ownForm = {
    vettag: '',
    prevTag: '',
    newTag: '',
    road_worthy: '',
    newVeh_Reg: '',
    accountHolder: ''
};

const client = useSupabaseClient();
const user = useSupabaseUser();


const checked = ref('');






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

const input9Rules = [
    value => !!value || 'Field is required',
    value => {
        const isValidDate = !isNaN(Date.parse(value));
        return isValidDate || 'Invalid date format';
    }
];



const input10Rules = [
    value => !!value || 'Field is required',
    value => {
        const isValidDate = !isNaN(Date.parse(value));
        return isValidDate || 'Invalid date format';
    }
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
.BckCol {

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}


.B-clear {

    background: linear-gradient(to right, rgba(36, 71, 37, 0.331), rgba(135, 235, 173, 0), #31759ab4, #153445b4) !important;


}

.B-clear:hover {
    transition: all 0.9s ease;
    font-weight: bold;
    opacity: 0.8;
    color: #000000;
    border: 2px solid #ffffff;
}
</style>
