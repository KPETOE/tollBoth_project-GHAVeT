<template>
    <div>
        <v-parallax>
            <div>
                <v-container>
                    <h2 class="text-uppercase text-black text-center font-weight-bold text-teal-darken-3 ">
                        Transaction history
                    </h2>

                </v-container>
                <p class="text-center font-weight-bold text-center text-teal-darken-3"
                    style=" color: rgb(43, 130, 104);  font-size: 1rem;">
                    Explore your transaction history and track your toll payments with <br>
                    ease. .
                </p>
            </div>
        </v-parallax>
        <v-container>
            <v-col class="container">
                <div class="">
                    <div class="row justify-content-center" style="background-color:  rgb(127, 203, 203);">

                        <!-- <div class="col-md-6" style="text-align: center">

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
                    </div> -->






                        <div class="col-md-6 text-center bg-white" style="">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center "
                                style="font-size: 1.5rem; font-weight: bold">Balance</label>
                            <div class="con mx-auto  d-flex justify-content-center align-items-center" style="margin-top: 20px;  
                        border-width: 1px; border-style: solid; border-color: black;  
                        background-color: rgba(0, 0, 0, 0.1) !important; ">
                                <h4 class="text-center">GHS {{ bal.data.amountEnt }}</h4>
                            </div>
                        </div>

                        <div class="col-md-6 text-center  bg-white" style="">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                                style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                            <v-col class="bawa mx-auto d-flex justify-content-center align-items-center" style="margin-top: 20px; border-width: 1px; border-style: solid; border-color: black; 
                             background-color: rgba(0, 0, 0, 0.1) !important;">
                                <h4 class="text-center">GHS 500.00</h4>
                            </v-col>
                        </div>
                    </div>
                </div>

                <br> <br>

                <div class=" d-flex justify-content-center align-items-center">
                    <div class="col-md-6 text-center" style="width: 35em;">
                        <label for="textBox3" class="form-label mx-auto text-uppercase text-black text-center"
                            style="font-size: 1.5rem; font-weight: bold">LAST DEPOSIT</label>
                        <div class="lastDep mx-auto d-flex justify-content-center align-items-center" style="margin-top: 10px;  border-width: 1px; border-style: solid; border-color: black;  
                            background-color: rgba(0, 0, 0, 0.1) !important;">
                            <v-container>
                                
                                <v-row>
                                    <v-col cols="" sm="12" lg="6">
                                        <h3 class="text-center">GHS {{ bal.data.amountEntered }}</h3>
                                    </v-col>
                                    <v-col cols="" sm="12" lg="6">
                                        <h3 class="text-center">{{ useDateFormat(bal.data.created_at, 'MMMM D, YYYY') }}
                                        </h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </div>
                    </div>
                </div>
            </v-col>



            <br>
            <v-row>
                <v-col col="auto" lg="4" sm="12">
                    <div class="d-flex justify-center">
                        <label for="fromDate" class="font-weight-bold text-black mx-5">FROM</label>
                        <input type="date" id="fromDate" v-model="fromDate" class="underlined-input">
                    </div>
                </v-col>

                <v-col col="auto" lg="4" sm="12">
                    <div class="d-flex justify-center">
                        <label for="toDate" class="font-weight-bold text-black mx-5">TO</label>

                        <input type="date" id="toDate" v-model="toDate" class="underlined-input">
                    </div>
                </v-col>

                <v-col col="auto" lg="4" sm="12">
                    <div class="d-flex justify-center">

                        <button class="search font-weight-bold ">Search</button>

                    </div>
                </v-col>
            </v-row>

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
                        <tr v-for="transaction in transactions.data" :key="transaction.id" class="text-center">
                            <td>{{ useDateFormat(transaction.created_at, 'MMMM D, YYYY') }}</td>
                            <td>{{ transaction.amountEnt }}</td>
                            <td>{{ transaction.location }}</td>
                        </tr>
                    </tbody>
                </v-table>





                <br> <br>


                <v-row>

                    <v-col col="auto" sm="12" lg="6" md="4">
                        <v-btn to="/Payment" class="search font-weight-bold">Deposit Funds</v-btn>
                    </v-col>

                    <v-col col="auto" sm="12" lg="6" md="4">
                        <v-btn class="search font-weight-bold">Download</v-btn>
                    </v-col>

                    <br>

                </v-row>
                <!-- <h1 class="mx-auto text-uppercase text-lime-darken-4 text-start text-center  font-weight-bold"
                            style="font-size: 2em">
                            statement
                        </h1> -->



            </v-container>

        </v-container>
    </div>
</template>
<script setup>
import { useDateFormat, useNow } from '@vueuse/core'
const user = useSupabaseUser();
const client = useSupabaseClient();

const transactions = await client.from('transactions').select('*').eq('user_id', user.value.id);
console.log(transactions)
const bal = await client.from('transactions').select('amountEnt, amountEntered, created_at').eq('user_id', user.value.id).order('created_at', { ascending: false }).limit(1).single();
console.log(bal)

</script>


<style>
.middle {

    width: 100rem;
    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1px;
    text-align: center;
    margin-top: 2rem;


    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.container {

    width: 100rem;
    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1px;
    text-align: center;
    margin-top: 1px;


    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

.bawa {


    width: 50%;
    height: 10em;
    background-color: rgba(228, 238, 237, 0.384) !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;
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

.con {
    margin-right: 2em;
    align-items: center;
    width: 50%;
    height: 10em;
    background-color: rgba(228, 238, 237, 0.384);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;

}


.balance {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

    height: 35%;
    width: 40%;

}



.lastDep {
    margin-top: 20px;
    height: 4em;
    height: 9em;
    width: 50%;
    margin: 0 auto;
    border-top-left-radius: 5px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 6px;
    background-color: rgba(228, 238, 237, 0.384) !important;
}


input:focus {
    border-color: #e1dada00 !important;
}

.search {
    /* width: 7em; */
    background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 6px;

}
</style>