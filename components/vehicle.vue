<template>
    <div class="Card-veh mx-auto" style="max-width: 80rem;">
        <v-container>
            <v-form @submit.prevent="submitVehicle">
                <v-row class="d-flex justify-center align-center">
                    <v-col cols="" lg="12" md="6" class="d-flex align-center">
                        <v-row>
                            <v-col cols="" lg="6" md="6" sm="6">
                                <label class="font-weight-bold ">GHAVeTTag #</label>
                            </v-col>
                            <v-col cols="" lg="6" md="6" sm="6">
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol-V">
                                    <v-text-field v-model="vehicle.vettag" label="GHAVeTTag  #" outlined color="white"
                                        class="mx-auto" style="box-shadow: none;    width: auto;"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol-V">

                                    <v-text-field v-model="vehicle.prevTag" label="VeH Reg #" outlined color="white"
                                        class="mx-auto" :rules="input2Rules" style="box-shadow: none;  width: auto;"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol-V">
                                    <v-text-field v-model="vehicle.newTag" label="Date of Transaction" outlined
                                        color="white" class="mx-auto" :rules="input9Rules"
                                        style="box-shadow: none; width: auto;" variant="plain"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol-V">
                                    <v-text-field v-model="vehicle.accountHolder" label="New  Owner Account Name"
                                        outlined color="white" class="mx-auto  BckCol" :rules="input6Rules"
                                        style="box-shadow: none; width: auto;" variant="plain"></v-text-field>
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol-V">
                                    <v-text-field v-model="vehicle.mileage" label="Odometer Reading" outlined
                                        color="white" class="mx-auto" :rules="odometerReadingRules"
                                        style="box-shadow: none; width: auto;" variant="plain"
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
                        <v-btn @click="clearForm" prepend-icon="mdi-alert-circle" class="B-clear text-red">Clear
                            <template v-slot:append>
                                <v-icon color="warning"></v-icon>
                            </template>

                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </div>
</template>
<script setup>

// Function to generate random number within a range
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const client = useSupabaseClient();
const user = useSupabaseUser();
const checked = ref('');

// const props = defineProps(['ownForm']);


const vehicle = ref({
    vettag: '',
    prevTag: '',
    newTag: '',
    accountHolder: '',
    mileage: '',
});


// Variables for reference numbers
let ref1 = 100;
let ref2 = 10;
let ref3 = 200;


const submitVehicle = async () => {
    try {


        // Generate random reference numbers
        let ref1 = generateRandomNumber(1, 100);
        let ref2 = generateRandomNumber(1, 100);
        let ref3 = generateRandomNumber(1, 200);

        let reference = 'G' + ref1 + 'V' + ref2 + 'T' + ref3;


        const { data, error } = await client.from('vehicle').insert({
            vettag: vehicle.value.vettag,
            VeH_Reg: vehicle.value.prevTag,
            Date: vehicle.value.newTag,
            accountHolder: vehicle.value.accountHolder,
            mileage: vehicle.value.mileage,

            Status: 'Pending',
            Reference_No: reference,
        });
    } catch (error) {
        console.log(error)
    }
};
</script>

<style>
.Card-veh {
    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1rem;

    margin-top: 1rem;
}


.BckCol-V {

    border-width: 1px;
    border-style: solid;
    border-color: black;

    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
}
</style>