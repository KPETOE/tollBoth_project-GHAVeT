<template>
    <div style="background-color:  rgb(213, 244, 244);">
        <v-container>

            <div class="">
                <v-parallax>
                    <div>
                        <v-container>
                            <h2 class="text-uppercase text-black text-center font-weight-bold   text-decoration-underline">
                                MY APPLICATIONS
                            </h2>

                        </v-container>
                        <p class="text-center font-weight-bold text-center "
                            style=" color: rgb(43, 130, 104);  font-size: 1rem;">
                            Manage your applications and stay updated with your transaction history. <br>
                            Explore detailed information about your transactions below.
                        </p>
                    </div>
                </v-parallax>
                <v-container>

                    <div class="container">
                        <div class="row justify-content-left" style="background-color:  rgba(127, 203, 203, 0.105);">

                            <div class="col-md-6" style="text-align: center">


                                <h1 class="mx-auto text-uppercase text-black text-start text-center  font-weight-bold"
                                    style="font-size: 1.3em">
                                    Choose Tag #
                                </h1>
                                <!-- <v-col cols="12">
                                    <div style="background-color: rgb(254, 255, 255);" class="text-1">
                                        <v-select label="Tag #" :items="tagItems" v-model="tagNo"
                                            variant="plain"></v-select>
                                    </div>


                                </v-col> -->

                                <v-col cols="12">
                                    <div style="background-color: rgb(254, 255, 255);" class="text-1">
                                        <v-select label="Tag #" :items="tagItems" v-model="tagNo"
                                            variant="plain"></v-select>
                                    </div>
                                </v-col>
                            </div>


                        </div>
                    </div>
                    <br> <br>

                    <br>
                    <div style="display: flex; flex-direction: row;">
                        <div style="flex: 1; ">
                            <div style="display: flex; flex-direction: column; align-items: center;"><br>
                                <h3 class="mx-auto text-uppercase font-weight-bold text-black text-start text-center"
                                    style="font-size: 1.3em  ">
                                    &nbsp;&nbsp;&nbsp; Reference &nbsp;&nbsp;&nbsp; #
                                </h3>

                            </div>
                        </div>
                        <!-- 
                        <div style="flex: 1;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <v-text-field class="ref" label="Enter Number" outlined color="plain" variant="plain"
                                    style="  width: 10em;"></v-text-field>
                                <br>

                            </div>
                        </div> -->

                        <div style="flex: 1;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <v-text-field v-model="referenceNumber" class="ref" label="Enter Number" outlined
                                    color="plain" variant="plain" style="width: 10em;"></v-text-field>
                                <br>
                            </div>
                        </div>
                        <div style="flex: 1;">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <br>
                                <button @click="search" class="search">Search</button>
                            </div>
                        </div>
                    </div>



                    <v-container>
                        <!-- <v-table height="300px" dense>
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
                        </v-table> -->

                        <!-- Button for refreshing -->
                        <div class="d-flex justify-end mb-4" style="flex: 1; ">
                            <v-btn @click="refresh" class="mr-4  RefrehBut">Refresh</v-btn>
                            <div style="width: 3.8%;"></div>
                        </div>

                        <!-- Table -->
                        <v-table height="300px" dense>
                            <thead class="b">
                                <tr>
                                    <!-- Dynamically generate table headers based on the selected option -->
                                    <th v-for="(header, index) in tableHeaders" :key="index" class="text-center with-bordr">
                                        {{ header }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in filteredData" :key="item.id" class="text-center">
                                    <!-- Bind table data dynamically based on the selected option -->
                                    <td v-for="(field, index) in itemFields" :key="index">{{ item[field] }}</td>
                                </tr>
                            </tbody>
                        </v-table>
                        <br> <br>

                        <div style="flex: 1;" class="d-flex flex-column align-items-end flex-grow-1">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <br>

                                <button class="reference  text-black font-weight-bold">BACK</button>
                                <br>

                                
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

        </v-container>
    </div>
</template>


<script setup>
// Sample data
const newAppData = ref([
    { id: 1, field1: 'Data 1', field2: 'Data 2', field3: 'Data 3', field4: 'Data 3', field5: 'Data 3' },

    { id: 2, field1: 'Data 2', field2: 'Data 2', field3: 'Data 3', field4: 'Data 3', field5: 'Data 3' },

    { id: 3, field1: 'Data 3', field2: 'Data 2', field3: 'Data 3', field4: 'Data 3', field5: 'Data 3' },

    { id: 4, field1: 'Data 4', field2: 'Data 2', field3: 'Data 3', field4: 'Data 3', field5: 'Data 3' },
    // Add more data as needed
]);

const changeOwnershipData = ref([
    { id: 1, field1: 'TT6', field2: 'Data 2', field3: 'Data 3' },

    { id: 2, field1: 'TT7', field2: 'Data 2', field3: 'Data 3' },
    { id: 3, field1: 'TT8', field2: 'Data 2', field3: 'Data 3' },
    // Add more data as needed
]);

const tagItems = ref(['New Application', 'Change of Ownership']);
const tagNo = ref('New Application');
const referenceNumber = ref('');
const filteredData = ref([]);
const tableHeaders = ref([]);
const itemFields = ref([]);

watch(tagNo, (newValue) => {
    // Update table structure and data binding based on the selected option
    if (newValue === 'New Application') {
        tableHeaders.value = ['Reference  #', 'VeH Reg #', 'Status', 'Appointment Date', 'LOCATION'];
        itemFields.value = ['field1', 'field2', 'field3', 'field4', 'field5'];
        filteredData.value = newAppData.value;
    } else if (newValue === 'Change of Ownership') {
        tableHeaders.value = ['Reference  #', 'VeH Reg #', 'Status'];
        itemFields.value = ['field1', 'field2', 'field3',];
        filteredData.value = changeOwnershipData.value;
    }
});

const search = () => {
    if (tagNo.value === 'New Application') {
        filteredData.value = newAppData.value.filter(item => item.field1 === referenceNumber.value);
    } else if (tagNo.value === 'Change of Ownership') {
        filteredData.value = changeOwnershipData.value.filter(item => item.field1 === referenceNumber.value);
    }
};



const refresh = () => {
    // Reset the text field and the filtered data back to their initial states
    referenceNumber.value = '';
    if (tagNo.value === 'New Application') {
        filteredData.value = newAppData.value;
    } else if (tagNo.value === 'Change of Ownership') {
        filteredData.value = changeOwnershipData.value;
    }
};

</script>



<style>
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

.ref {

    border: 2px solid #000;
    border-top: none;
    border-left: none;
    border-right: none;
    height: 60px;
    padding: 8px;
    box-sizing: border-box;
    width: 100%;
}

.reference {

    height: 2em;
    background-color: #ffffff;
    width: 11em;


    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;

}


.reference:hover {
    color: white;
    /* Change text color to white */
    background-color: #249385;
    border: 1px solid #ededed;
}


.RefrehBut {

    height: 2em;
    background-color: none;
    width: 11em;


    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.RefrehBut:hover {
    color: white;
    /* Change text color to white */
    background-color: #249385;
    border: 1px solid #ededed;
}


.search {

    height: 2.3em;
    background-color: #ffffff;
    width: 9.5em;

    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
}

.search:hover {


    color: white;
    /* Change text color to white */
    background-color: #249385;
    border: 1px solid #ededed;
}
</style>
