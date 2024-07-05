<template>
    <div class="Ownership" style="">
        <div>

            <h2 class="text-uppercase text-teal-darken-3 text-center font-weight-bold  ">
                Transfer of Ownership
            </h2>
            <p class="text-center font-weight-bold " style=" color: rgb(219, 54, 54);  font-size: 1rem;"> Data Provided
                will be Verified And Approved</p>



            <v-row align="center" justify="center">
                <v-col cols="auto">
                    <v-img src="@/assets/img/th.jpeg" max-width="100"></v-img>
                </v-col>
                <v-col cols="auto" class="text-center">
                    <p class="font-weight-bold" style="color: rgb(219, 54, 54); font-size: 1rem;">
                        Data Provided will be Verified And Approved
                    </p>
                </v-col>
                <v-col cols="auto">
                    <v-img src="@/assets/img/th.jpeg" max-width="100"></v-img>
                </v-col>
            </v-row>



            <v-tabs class=" TabOwner tab" v-model="tab" align-tabs="center" bg-color="white"
                style=" border-width: 0.1px;  border-color: black;">

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
                    <owner />
                </v-window-item>

                <v-window-item value="veh">
                    <vehicle />
                </v-window-item>
            </v-window>



            <br> <br>
        </div>


    </div>
</template>



<script setup>
const tab = ref(null);



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
.TabOwner {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

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

.tab {


    border: none;
    /* box-shadow: 0 0 5px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1rem;

    margin-top: 1rem;

}
</style>
