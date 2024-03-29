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
                    <owner />
                </v-window-item>

                <!-- Begining of the  vehicle transfer tap -->

                <v-window-item value="veh">
                    <vehicle />
                </v-window-item>
            </v-window>






            <br> <br>
        </div>
    </div>
</template>



<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const tab = ref(null);

















// Validation rules for each text field

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
