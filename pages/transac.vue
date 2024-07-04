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
                                <input type="text" class="balance bg-white  text-center" id="textBox2"
                                    placeholder="GHS 500.00" readonly />
                            </div>
                        </div>

                        <div class="col-md-6 text-center  bg-white" style="">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                                style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                            <v-col class="bawa mx-auto d-flex justify-content-center align-items-center" style="margin-top: 20px; border-width: 1px; border-style: solid; border-color: black; 
                             background-color: rgba(0, 0, 0, 0.1) !important;">
                                <input type="text" class="form-control square-box" id="textBox1"
                                    placeholder="GHS 500.00" />
                            </v-col>
                        </div>
                    </div>
                </div>

                <br> <br>

                <div class=" d-flex justify-content-center align-items-center">
                    <div class="col-md-6 text-center" style="">
                        <label for="textBox3" class="form-label mx-auto text-uppercase text-black text-center"
                            style="font-size: 1.5rem; font-weight: bold">LAST DEPOSIT</label>
                        <div class="lastDep mx-auto d-flex justify-content-center align-items-center" style="margin-top: 10px;  border-width: 1px; border-style: solid; border-color: black;  
                            background-color: rgba(0, 0, 0, 0.1) !important;">
                            <div class="mb-3 d-flex">
                                <input type="text" readonly class="form-control table" id="textBox3"
                                    value="GHS 500.00" />

                                &nbsp;
                                <input type="text" readonly class="form-control table" id="textBox4"
                                    value="01/01/2024" />
                            </div>
                        </div>
                    </div>
                </div>
            </v-col>


            <v-col class="middle">
                <br>
                <div style="display: flex; flex-direction: row;">
                    <div style="flex: 1; margin-right: 10px;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <label for="fromDate" class="font-weight-bold text-black">FROM</label>
                            <br>
                            <input type="date" id="fromDate" v-model="fromDate" class="underlined-input">
                        </div>
                    </div>

                    <div style="flex: 2;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <label for="toDate" class="font-weight-bold text-black">TO</label>

                            <br>
                            <input type="date" id="toDate" v-model="toDate" class="underlined-input">
                        </div>
                    </div>

                    <div style="flex: 1;">
                        <div style="display: flex; flex-direction: column; align-items: center;">
                            <br>

                            <button class="search font-weight-bold ">Search</button>

                        </div>
                    </div>
                </div>
            </v-col>


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
                    <div class="w-100" style="display: flex; justify-content: space-between; align-items: center;">
                        <v-btn to="/Payment" class="search font-weight-bold ml-5">Deposit Funds</v-btn>
                        <button class="search font-weight-bold mr-5">Download</button>
                    </div>
                    <br>
                    <h1 class="text-uppercase text-lime-darken-4 font-weight-bold"
                        style="font-size: 2em; align-self: flex-end;">
                        statement
                    </h1>
                </div>


            </v-container>

        </v-container>
    </div>
</template>
<script setup>




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
.middle {

    width: 100rem;
    border: none;
    box-shadow: 0 0 15px rgba(19, 15, 15, 0.562);
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
    box-shadow: 0 0 15px rgba(19, 15, 15, 0.562);
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
    height: 7em;
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
    width: 6em;
    background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
}
</style>