<template>
    <div>
        <v-parallax>
            <div>
                <v-container>
                    <h2 class="text-uppercase text-black text-center font-weight-bold text-teal-darken-3">
                        Transaction history
                    </h2>
                </v-container>
                <p class="text-center font-weight-bold text-teal-darken-3"
                   style="color: rgb(43, 130, 104); font-size: 1rem;">
                    Explore your transaction history and track your toll payments with ease.
                </p>
            </div>
        </v-parallax>

        <v-container>
            <v-col class="container">
                <div class="row justify-content-center" style="background-color: rgb(127, 203, 203);">
                    <div class="col-md-6 text-center bg-white">
                        <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                               style="font-size: 1.5rem; font-weight: bold">Balance</label>
                        <div class="con mx-auto d-flex justify-content-center align-items-center"
                             style="margin-top: 20px; border-width: 1px; border-style: solid; border-color: black; background-color: rgba(0, 0, 0, 0.1) !important;">
                            <h4 class="text-center">GHS {{ bal.data.amountEnt }}</h4>
                        </div>
                    </div>

                    <div class="col-md-6 text-center bg-white">
                        <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                               style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                        <v-col class="bawa mx-auto d-flex justify-content-center align-items-center"
                               style="margin-top: 20px; border-width: 1px; border-style: solid; border-color: black; background-color: rgba(0, 0, 0, 0.1) !important;">
                            <h4 class="text-center">GHS {{ bal.data.deduction }}</h4>
                        </v-col>
                    </div>
                </div>
            </v-col>

            <br><br>

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
                        <v-btn @click="search" class="search font-weight-bold">Search</v-btn>
                    </div>
                </v-col>
            </v-row>

            <br><br>

            <!-- Table displaying transactions -->
            <v-container>
                <v-table height="300px" dense>
                    <thead>
                        <tr>
                            <th class="text-center with-bordr">BILL DATE</th>
                            <th class="text-center with-border">BILL AMOUNT</th>
                            <th class="text-center with-border">LOCATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in transactions" :key="transaction.id" class="text-center">
                            <td>{{ useDateFormat(transaction.created_at, 'MMMM D, YYYY') }}</td>
                            <td>{{ transaction.amountEnt }}</td>
                            <td>{{ transaction.location }}</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-container>

            <br><br>

            <v-row>
                <v-col col="auto" sm="12" lg="6" md="4">
                    <v-btn to="/Payment" class="search font-weight-bold">Deposit Funds</v-btn>
                </v-col>
                <v-col col="auto" sm="12" lg="6" md="4">
                    <v-btn @click="downloadCSVFile" class="search font-weight-bold">Download</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useDateFormat } from '@vueuse/core';
const user = useSupabaseUser();
const client = useSupabaseClient();

let transactions = ref([]); // Reactive variable for transactions data
let fromDate = ref(''); // Reactive variable for from date
let toDate = ref(''); // Reactive variable for to date

// Fetch balance data
const bal = await client
  .from('transactions')
  .select('amountEnt, amountEntered, created_at, deduction')
  .eq('user_id', user.value.id)
  .order('created_at', { ascending: false })
  .limit(1)
  .single();

/**
 * Function to fetch all transactions when the page is loaded
 */
const fetchTransactions = async () => {
  const { data, error } = await client
    .from('transactions')
    .select('*')
    .eq('user_id', user.value.id);

  if (error) {
    console.error(error);
    return;
  }
  transactions.value = data; // Update the reactive transactions variable
};

// Call `fetchTransactions` when the component is mounted
onMounted(fetchTransactions);

/**
 * Search function to filter transactions by date range
 */
const search = async () => {
  if (fromDate.value && toDate.value) {
    // Filter transactions within the selected date range
    const { data, error } = await client
      .from('transactions')
      .select('*')
      .eq('user_id', user.value.id)
      .gte('created_at', fromDate.value) // Greater than or equal to the "from" date
      .lte('created_at', toDate.value) // Less than or equal to the "to" date
      .order('created_at', { ascending: true });

    if (error) {
      console.error(error);
      return;
    }
    transactions.value = data; // Update the reactive transactions variable with filtered data
  } else {
    alert('Please select both FROM and TO dates.');
  }
};

/**
 * Function to download transactions as CSV
 */
const downloadCSVFile = () => {
  const headers = ['Bill Date', 'Bill Amount', 'Location'];
  const rows = transactions.value.map(transaction => [
    useDateFormat(transaction.created_at, 'MMMM D, YYYY'),
    transaction.amountEnt,
    transaction.location
  ]);

  let csvContent = 'data:text/csv;charset=utf-8,';
  csvContent += headers.join(',') + '\n';

  rows.forEach(row => {
    csvContent += row.join(',') + '\n';
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'transaction-history.csv');
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
};
</script>

<style>
.middle {
    width: 100rem;
    border: none;
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

.search {
    background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
    border-top-left-radius: 5px;
    border-top-right-radius: 6px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 6px;
}
</style>
