<template>
    <div>
        <v-container>

            <div class="">
                <!-- <v-parallax> -->
                <div class="card-Myapp">
                    <v-container>
                        <h2 class="text-uppercase text-black text-center font-weight-bold   text-decoration-underline">
                            MY APPLICATIONS
                        </h2>

                    </v-container>
                    <p class="text-center font-weight-bold text-center "
                        style=" color: rgb(43, 130, 104);  font-size: 1rem;">
                        Manage your applications and stay updated with your transaction history. <br />
                        Explore detailed information about your transactions below.
                    </p>
                </div>
                <!-- </v-parallax> -->
                <v-container>

                    <v-container>
                        <div class="row justify-content-left"
                            style=" background: linear-gradient(to right, #182831, rgba(72, 113, 129, 0.813), #18252c) !important;">

                            <!-- <div class="" style="text-align: center; "> -->


                            <h1 class="mx-auto text-uppercase text-white text-start text-center  font-weight-bold"
                                style="font-size: 1.3em">
                                Choose Tag #
                            </h1><br>




                            <div style=" height: auto;" class="text-white">
                                <v-select label="Tag #" :items="tagItems" v-model="tagNo" variant="outlined"></v-select>
                            </div>





                            <!-- </div> -->


                        </div>
                    </v-container>
                    <br> <br>

                    <br>
                    <div class="card-Myapp"
                        style=" background: linear-gradient(to right, #182831, rgba(72, 113, 129, 0.813), #18252c) !important; height: auto">
                        <v-row class="mx-auto py-auto">
                            <v-col cols="" lg="3" sm="12">
                                <div>
                                    <div><br>
                                        <h3 class="mx-auto text-uppercase font-weight-bold text-white text-start text-center"
                                            style="font-size: 1.3em  ">
                                            &nbsp;&nbsp;&nbsp; Reference &nbsp;&nbsp;&nbsp; #
                                        </h3>

                                    </div>
                                </div>
                            </v-col>

                            <v-col cols="" lg="6" sm="12">
                                <div>
                                    <div>
                                        <v-text-field v-model="referenceNumber" @input="search" class="ref text-white"
                                            label="Enter Number" outlined color="plain" variant="plain"
                                            style="width: 100%;"></v-text-field>
                                        <br>
                                    </div>
                                </div>
                            </v-col>
                            <v-col cols="" lg="3" sm="12">
                                <div class="d-flex justify-center  text-black" style="">
                                    <!-- <button @click="search" class="search"
                                        style=" background: white !important;">Search</button> -->
                                    <br>
                                </div>
                            </v-col>

                        </v-row>





                    </div>



                    <v-container class="card-Myapp"
                        style=" background: linear-gradient(to right, #182831, rgba(72, 113, 129, 0.813), #18252c) !important;">

                        <!-- Button for refreshing -->
                        <div class="d-flex justify-end mb-4" style="flex: 1; ">
                            <v-btn @click="refresh" class="mr-4  search "
                                style="background: white !important;">Refresh</v-btn>
                            <div style="width: 3.8%;"></div>
                        </div>

                        <!-- Table -->
                        <div v-if="filteredData.length >= 0">
                            <v-table height="300px" dense>
                                <thead class="b">
                                    <tr>
                                        <!-- Dynamically generate table headers based on the selected option -->
                                        <th v-for="(header, index) in tableHeaders" :key="index"
                                            class="text-center with-bordr">
                                            {{ header }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in filteredData" :key="item" ref="table" class="text-center">
                                        <!-- Bind table data dynamically based on the selected option -->
                                        <td v-for="(field, index) in itemFields" :key="index">{{ item[field] }}</td>
                                    </tr>
                                </tbody>
                            </v-table>
                        </div>
                        <br> <br>

                        <div style="flex: 1;" class="d-flex flex-column align-items-end flex-grow-1">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <br>

                                <button class="search   text-black font-weight-bold"
                                    style="background: white !important; " @click="scrollToTop">BACK</button>
                                <br>


                            </div>
                        </div>


                    </v-container>

                    <v-row>

                    </v-row>
                </v-container>
            </div>

        </v-container>
    </div>
</template>


<script setup>
// Sample data

const client = useSupabaseClient()
const user = useSupabaseUser()

//getting data from application table specific
const application = await client.from('application').select('Refrence_No, veh_type, Status, AppointmentDate, Pickup_loc').eq('user_id', user.value.id)
const ownerShip = await client.from('vehicle').select('Reference_No, vettag, Status').eq('user_id', user.value.id)
// const changeOwnershipData = ref([



// console.log(myApplication)
const vehicle = await client.from('vehicle').select('*').eq('user_id', user.value.id)
const tagItems = ref(['New Application', 'Change of Ownership']);
const tagNo = ref('New Application');
const referenceNumber = ref('');
const filteredData = ref([]);
const tableHeaders = ref([]);
const itemFields = ref([]);


const applicationReference = application.data.Refrence_No;
// const searchQuery = ref('')

watch(tagNo, (newValue) => {
    // Update table structure and data binding based on the selected option
    if (newValue === 'New Application') {
        tableHeaders.value = ['Reference  #', 'VeH Reg #', 'Status', 'Appointment Date', 'LOCATION'];
        itemFields.value = ['Refrence_No', 'veh_type', 'Status', 'AppointmentDate', 'Pickup_loc'];
        filteredData.value = application.data;
    } else if (newValue === 'Change of Ownership') {
        tableHeaders.value = ['Reference  #', 'VeH Reg #', 'GHAVeTTag', 'Status'];
        itemFields.value = ['Reference_No', 'VeH_Reg', 'vettag', 'Status'];
        filteredData.value = ownerShip.data;
    }
});

const search = async () => {
    if (tagNo.value === 'New Application') {
        if (referenceNumber.value.length > 2) {
            const { data, error } = await client.from('application').select().ilike('Refrence_No', referenceNumber)
            if (error) {
                console.log(error)
            } else {
                filteredData.value = data
            }
        } else {
            filteredData.value = []
        }

    } else if (tagNo.value === 'Change of Ownership') {
        if (ownerShip.value) { // Check if ownerShip is not undefined
            filteredData.value = ownerShip.value.filter(item => item.Reference_No === referenceNumber.value);
        }
    }
};



const refresh = () => {
    // Reset the text field and the filtered data back to their initial states
    referenceNumber.value = '';
    if (tagNo.value === 'New Application') {
        filteredData.value = application.value;
    } else if (tagNo.value === 'Change of Ownership') {
        filteredData.value = ownerShip.value;
    }
};



function scrollToTop() {
    window.scrollTo({ top: 1, behavior: 'smooth' });
}

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

/* .text-1 {
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;

} */

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

    /*background-color:  rgb(213, 244, 244);   this color may be the alternative for all background*/
    color: white;
    /* Change text color to white */
    background-color: #249385;
    border: 1px solid #ededed;
}


.card-Myapp {

    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1rem;

    margin-top: 1px;
}

.card-Myapp-Body {
    padding: 2rem;
}
</style>
