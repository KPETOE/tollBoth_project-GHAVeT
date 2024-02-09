<template>
    <div class="about">
        <v-parallax>
            <div>
                <v-container>
                    <h2 class="text-uppercase text-black text-center font-weight-bold  ">
                        Transaction history
                    </h2>

                </v-container>
                <p class="text-center font-weight-bold text-center " style=" color: rgb(43, 130, 104);  font-size: 1rem;">
                    Explore your transaction history and track your toll payments with ease. <br> Select a tag number,
                    choose the
                    date range, and view detailed information about your toll<br> transactions below.
                </p>
            </div>
        </v-parallax>
        <v-container>

            <div class="container">
                <div class="row justify-content-center" style="background-color:  rgb(127, 203, 203);">

                    <div class="col-md-6" style="text-align: center">

                        <br>
                        <br> <br>

                        <h1 class="mx-auto text-uppercase text-black text-start text-center  font-weight-bold"
                            style="font-size: 1.3em">
                            Choose Tag #
                        </h1>
                        <v-col cols="12">
                            <div style="background-color: rgb(254, 255, 255);" class="text-1">
                                <v-select label="Tag #" :items="tagItems" v-model="tagNo" variant="plain"></v-select>
                            </div>


                        </v-col>
                    </div>

                    <!--the -->
                    <!-- 
                    <v-row justify="center">
                        <v-col cols="12" sm="10" md="8" lg="6">
                          
                                <v-card-text>
                                  

                                 

                                    <v-autocomplete ref="   " v-model="country"
                                        :rules="[() => !!country || 'This field is required']" :items="countries"
                                        label="Country" placeholder="Select tag..." required></v-autocomplete>
                                </v-card-text>
                              
                               
                          
                        </v-col>
                    </v-row> -->

                    <!--the -->
                    <div class="col-md-6 text-center" style="background-color: rgb(127, 203, 203);">
                        <label for="textBox2" class="form-label mx-auto text-uppercase text-BLACK text-center"
                            style="font-size: 1.5rem; font-weight: bold">Balance</label>
                        <button class="btn btn-primary non-responsive-button">
                            <input type="text" class="form-control square-box" id="textBox2" placeholder="GHS 500.00" />
                        </button>
                    </div>
                </div>
            </div>
            <br> <br>

            <!-- <div style="display: flex; justify-content: space-between; width: 300px;">
                <div style="display: flex; flex-direction: column; align-items: center;">
                    <label for="fromDate">FROM</label>
                    <input type="date" id="fromDate" v-model="fromDate" class="underlined-input">
                </div>

                <div style="display: flex; flex-direction: column; align-items: center;">
                    <label for="toDate">TO</label>
                    <input type="date" id="toDate" v-model="toDate" class="underlined-input">
                </div>
            </div> -->
            <br>
            <div style="display: flex; flex-direction: row;">
                <div style="flex: 1; margin-right: 10px;">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <label for="fromDate" class="font-weight-bold">FROM</label>
                        <br>
                        <input type="date" id="fromDate" v-model="fromDate" class="underlined-input">
                    </div>
                </div>

                <div style="flex: 2;">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <label for="toDate" class="font-weight-bold">TO</label>

                        <br>
                        <input type="date" id="toDate" v-model="toDate" class="underlined-input">
                    </div>
                </div>

                <div style="flex: 1;">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <br>

                        <button class="btn btn-primary  custom-width">Search</button>

                    </div>
                </div>
            </div>
            <br><br><br>
            <v-container>
                <v-table height="300px" dense>
                    <thead class="b">
                        <tr>
                            <th class="text-center with-bordr">BILL DATE</th>
                            <th class="text-center with-border">BILL AMOUNT</th>
                            <th class="text-center with-border">LOCATION</th>


                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in desserts" :key="item.name" class="text-center">
                            <td>{{ item.ghavetTag }}</td>
                            <td>{{ item.account }}</td>
                            <td>{{ item.lastCheckpoint }}</td>
                        </tr>
                    </tbody>
                </v-table>





                <br> <br>

                <div style="flex: 1;" class="d-flex flex-column align-items-end flex-grow-1">
                    <div style="display: flex; flex-direction: column; align-items: center;">
                        <br>

                        <button class="btn btn-primary  custom-width">Download</button>
                        <br>

                        <h1 class="mx-auto text-uppercase text-black text-start text-center  font-weight-bold"
                            style="font-size: 2em">
                            statement
                        </h1>
                    </div>
                </div>


            </v-container>

            <v-row>
                <!-- <template v-for="event in events.data" :key="event.id">
                    <v-col>
                        <v-card width="300">
                            <nuxt-link style="text-decoration: none;" :to="'/events/' + event.id">




                            </nuxt-link>
                        </v-card>
                        <br>
                    </v-col>
                </template> -->
            </v-row>
        </v-container>
    </div>
</template>
<script setup>

//const tagItems = ref(['Num 1', 'Num 2',  'Num 3', 'Num 4'])
import { ref, watch } from 'vue';

const tagItems = ref(['Num 1', 'Num 2', 'Num 3', 'Num 4']);
const tagNo = ref(null);

watch(tagNo, (newValue) => {
    if (newValue === 'Num 1') {
        // You can set the select box value or perform any action here
        // For example, you can set it to a specific value or load additional data
        // tagNo.value = 'New Value';
        // Or perform any other actions as needed
        console.log('Num 1 selected');
    }
});

const desserts = ref([
    {
        ghavetTag: "29/03/2023",
        account: "GHs30",
        lastCheckpoint: "Achimota",

    },
    {
        ghavetTag: "29/01/2024",
        account: "GHs350",
        lastCheckpoint: "Tesano",

    },
    {
        ghavetTag: "09/01/2023",
        account: "GHs5.00",
        lastCheckpoint: "Sogakope",

    },
]);
</script>
<style>
.about {

    background-color: rgb(127, 203, 203);
}

.b {
    background-color: #105340ad;
}

.underlined-input {
    border: none;
    border-bottom: 1px solid #000;

    outline: none;
    padding: 4px;

    margin-bottom: 10px;

}


.with-bordr {
    border-right: 2px solid #000;
    border-left: 2px solid #000;
}

.text-1 {
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;

}
</style>