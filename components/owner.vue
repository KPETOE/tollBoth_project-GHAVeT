<template>
    <div class="card mx-auto"  style="max-width: 75rem;">
        <v-container   class="card-body">
            <v-form @submit.prevent="submitOwnership">
                <v-row class="d-flex justify-center align-center">
                    <v-col cols="" lg="12" md="6" class="d-flex align-center">
                        <v-row>
                            <v-col cols="" lg="6" md="6" sm="6">
                                <label class="font-weight-bold ">GHAVeTTag #</label>
                            </v-col>
                            <v-col cols="" lg="6" md="6" sm="6">
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">
                                    <v-text-field v-model="ownForm.vettag" label="GHAVeTTag  #" outlined color="white"
                                        class="mx-auto" style="box-shadow: none;    width: auto;"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">

                                    <v-text-field v-model="ownForm.prevTag" label="Previous VeH Reg #" outlined
                                        color="white" class="mx-auto" :rules="input2Rules"
                                        style="box-shadow: none;  width: auto; " variant="plain"></v-text-field>
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">
                                    <v-text-field v-model="ownForm.newTag" label="New VeH Reg #" outlined color="white"
                                        class="mx-auto" :rules="input3Rules" style="box-shadow: none; width: auto;"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">
                                    <v-text-field v-model="ownForm.road_worthy" label="New VeH Road Worthy #" outlined
                                        color="white" class="mx-auto" :rules="input4Rules"
                                        style="box-shadow: none;  width: auto;" variant="plain"></v-text-field>
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">

                                    <v-text-field v-model="ownForm.insurance" label="New VeH Insurance #" outlined
                                        color="white" class="mx-auto" :rules="input5Rules"
                                        style="box-shadow: none;width: auto;" variant="plain"></v-text-field>
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">
                                    <v-text-field v-model="ownForm.date" label="Date of Transaction" outlined
                                        color="white" class="mx-auto" :rules="input10Rules"
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
                                <div style="background-color: azure; width: auto;" class="mx-auto BckCol">
                                    <v-text-field v-model="ownForm.accountHolder" label="New  Owner Account Name"
                                        outlined color="white" class="mx-auto  " :rules="input6Rules"
                                        style="box-shadow: none; width: auto;" variant="plain"></v-text-field>
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
const client = useSupabaseClient();
const user = useSupabaseUser();


const ownForm = ref({
    vettag: '',
    prevTag: '',
    road_worthy: '',
    //newVeh_Reg: '',
    accountHolder: '',
    date: '',
    insurance: '',
});

const submitOwnership = async () => {
    try {
        const { data, error } = await client.from('Change_owner').insert({
            GhaveTTag: ownForm.value.vettag,
            Prev_Veh_Reg: ownForm.value.prevTag,
            //New_Veh_Reg: ownForm.value.newVeh_Reg,
            New_Road_Worhty: ownForm.value.road_worthy,
            New_Veh_Insurance: ownForm.value.insurance,
            Transaction_date: ownForm.value.date,
            New_Owner_Acc_Name: ownForm.value.accountHolder
        });
    } catch (error) {
        console.log(error)
    }
};



</script>


<style scoped>

.BckCol {
    border-width: 1px; border-style: solid; border-color: black;
border-top-left-radius: 15px;
border-top-right-radius: 15px;
border-bottom-left-radius: 15px;
border-bottom-right-radius: 15px;
}

.card {
    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1rem;

    margin-top: 1rem;
  }


  .card-body {
    padding: 2rem;
  }

</style>