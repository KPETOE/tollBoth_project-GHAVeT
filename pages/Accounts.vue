<template>
    <div>
        <v-parallax style="">
            <div class="accountimg">
                <br />

                <ul class="d-flex justify-content-end">
                    <li class="nav-item">
                      
                    </li>
                </ul>

                <div>
                    <v-container>
                        <v-row class="align-items-center">
                            <v-col cols="12" md="6">
                                <h1 class="mx-auto text-uppercase text-white text-start text-center" style="font-size: 2em">
                                    my account
                                </h1>
                            </v-col>
                            <v-col cols="12" md="6">
                                <div class="container">
                                    <v-row class="d-flex justify-center" style="text-align: center">
                                        <v-col cols="12">
                                            <!-- <button 
                                            class="btn btn-primary goods">
                                                <input type="text" class="form-control textbox" id="textBox1"
                                                    placeholder="GHS 500.00" />
                                            </button> -->

                                            <div style="background-color: rgb(130, 206, 206); width: 20em;  height: 3em;   display: flex; justify-content: center; align-items: center;"
                                                class="AccField ">
                                                <v-text-field v-model="input6" label="GHS 500.00" outlined color="white"
                                                    class="mx-auto AccField" :rules="input6Rules"
                                                    style="box-shadow: none; width: 50%; margin: 50%; background-color: azure;"
                                                    variant="plain"></v-text-field>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
                    <br>
                        
                </div>


                <v-parallax src="/img/Registration.jpg">
                    <v-container>
                        <v-table height="300px" dense>
                            <thead class="bg">
                                <tr>
                                    <th class="text-center with-border">GHAVeT Tag</th>
                                    <th class="text-center with-border">Account</th>
                                    <th class="text-center with-border">Last Checkpoint</th>
                                    <th class="text-center with-border">Balance</th>
                                    <th class="text-center">Deposit</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in desserts" :key="item.name" class="text-center">
                                    <td>{{ item.ghavetTag }}</td>
                                    <td>{{ item.account }}</td>
                                    <td>{{ item.lastCheckpoint }}</td>
                                    <td>{{ item.balance }}</td>
                                    <td>
                                        <a :href="getLink(item.deposit)" class="underline-link">{{
                                            item.deposit
                                        }}</a>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-container>

                    <br /><br />
                    <v-container>
                        <v-table height="300px" dense>
                            <thead class="bg">
                                <tr>
                                    <th v-for="column in tableColumns" :key="column.key"
                                        :class="{ 'with-border': column.withBorder }">
                                        {{ column.label }}
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="row in tableData" :key="row.id" class="text-center">
                                    <td v-for="column in tableColumns" :key="column.key">
                                        <template v-if="column.key === 'deposit'">
                                            {{ row[column.key] }}
                                        </template>
                                        <template v-else>
                                            <a :href="getLink(row[column.key])">{{
                                                row[column.key]
                                            }}</a>
                                        </template>
                                    </td>
                                </tr>
                            </tbody>
                        </v-table>
                    </v-container>
                </v-parallax>

                <v-container>
                    <h3 class="mx-auto text-uppercase text-black text-center block-text" style="font-size: 1em">
                        ALL Deposited Funds Are Subject to <br />Financial Management And
                        Money<br />
                        Laundering REGUALATIONS <br />
                        ACT 921 2016
                    </h3>
                </v-container>
            </div>
        </v-parallax>
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

onMounted(async () => {
    // Fetch data from your database
    // Replace the URL with your API endpoint
    const response = await fetch("https://example.com/api/data");
    const data = await response.json();

    //   // Assign the fetched data to tableData
    tableData.value = data;
});

// Function to generate a link based on the input text
//const getLink = (text) => {
// Assuming a basic link structure here, modify as needed
// return `https://example.com/${text}`;
//};

//END OF THE CODE FOR FETCHING FROM DATABASE

const desserts = ref([
    {
        ghavetTag: "GH-2545627-2",
        account: "GT-6347-2024",
        lastCheckpoint: "Tesano",
        balance: "GH 400.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "ACHIMOTA",
        balance: "GH 100.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "Tema Motorway",
        balance: "GH 100.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "Yapei",
        balance: "GH 100.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "Pwalugu",
        balance: "GH 100.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "Juapong",
        balance: "GH 100.00",
        deposit: "Deposit",
    },

    {
        ghavetTag: "GH-1500077-2",
        account: "GE-670-24",
        lastCheckpoint: "ACHIMOTA",
        balance: "GH 100.00",
        deposit: "Deposit",
    },
    // Add more dessert objects as needed
]);

// Function to add a new item to the table
const addItemToTable = () => {
    desserts.value.push({
        ghavetTag: "GH-5627-8",
        account: "GT-917-20",
        lastCheckpoint: "Bupei",
        balance: "GH 450.00e",
        deposit: "Deposit",
    });
};

const getLink = (text) => {
    // Assuming a basic link structure here, modify as needed
    return `https://example.com/deposit/${text}`;
};
// Example: add a new item to the table on component mount
onMounted(() => {
    addItemToTable();
});
// import imgbg from '../assets/img/home.jpeg'


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
