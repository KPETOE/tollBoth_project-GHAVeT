<template>
    <div>
        <div class="accountimg">
            <br />



            <v-container class="bg-black d-flex align-center justify-center ">
                <v-row class="align-items-center justify-center">
                    <v-col cols="12" md="6" class="text-center">
                        <h1 class="mx-auto text-uppercase text-white" style="font-size: 2em">
                            Deposit Funds
                        </h1>
                    </v-col>
                </v-row>
            </v-container>

            <br>




            <v-tabs v-model="tab" align-tabs="center" bg-color="light-green-lighten-5">

                <v-tab value="MobileMon" class="mr-12">
                    <div class="d-flex flex-column align-items-center">
                      
                        <span class="text-center">Mobile Money</span>
                    </div>
                </v-tab>



                <v-tab value="Carded">
                    <div class="d-flex flex-column align-items-center">
                    
                        <span class="text-center">Card</span>
                    </div>
                </v-tab>


            </v-tabs>

            <v-window v-model="tab">
                <v-window-item value="MobileMon">
                    <MobileMoney />
                </v-window-item>

                <!-- Begining of the  vehicle transfer tap -->

                <v-window-item value="Carded">
                    <Card />
                </v-window-item>
            </v-window>



            <!-- ` <v-parallax src="/img/Registration.jpg">
               


            </v-parallax> -->
            `
            <v-container>
                <h3 class="mx-auto text-uppercase text-black text-center block-text" style="font-size: 1em">
                    ALL Deposited Funds Are Subject to <br />Financial Management And
                    Money<br />
                    Laundering REGUALATIONS <br />
                    ACT 921 2016
                </h3>
            </v-container>
        </div>
        <!-- </v-parallax> -->
    </div>
</template>
<script setup>
//  THE BEGINING  OF THE FETCH DATA FROM A DATABASE

import { ref, onMounted } from "vue";

const tableColumns = ref([
    { key: "ghavetTag", label: "GHAVeT Tag", withBorder: true },
    { key: "account", label: "Account", withBorder: true },
    { key: "lastCheckpoint", label: "Last Checkpoint", withBorder: true },
    { key: "balance", label: "Balance", withBorder: true },
    { key: "deposit", label: "Deposit", withBorder: false },
]);

const tableData = ref([]);

// onMounted(async () => {
//     // Fetch data from your database
//     // Replace the URL with your API endpoint
//     const response = await fetch("https://example.com/api/data");
//     const data = await response.json();

//     //   // Assign the fetched data to tableData
//     tableData.value = data;
// });





</script>

<style>
.AccField {


    border-top-left-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 15px;

}


.textbox {
    height: 40px;
    width: 96%;
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

.goods {
    width: 350px;
    background-color: #20b0b0;
}

.block-text {
    display: block;
}

.bg {
    background-color: #105340ad;
}

.with-border {
    border-right: 2px solid #000;
    /* Adjusting the color and thickness as needed */
}

underline-link {
    text-decoration: underline;
    /* You can customize the underline style further if needed */
}
</style>
