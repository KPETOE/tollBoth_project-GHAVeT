<template>
  <div class="text-center mt-5">
    <h1 class="fw-bold text-teal-darken-3">Ghana Vehicle Electronic Tolling System</h1>
  </div>
  <div class="text-center  fs-3">
    <v-label class="fw-bold">
      PAYMENT MADE SIMPLE AND SECURE
    </v-label>
  </div>


  <!-- Form Container -->
  <div class="mt-2">
    <div class="card mx-auto" style="max-width: 42rem;">
      <div class="card-body">
        <v-form @submit.prevent="" class="mt-10 mb-10">
          <v-label class="fw-bold">Full Name</v-label>
          <v-text-field variant="outlined" v-model="fullname" disabled style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">Email</v-label>
          <v-text-field variant="outlined" v-model="email" disabled style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">AMOUNT</v-label>
          <v-text-field v-model="amount" placeholder="GHS 5.00" variant="outlined" style="width: 100%;"></v-text-field>

          <div class="  d-flex justify-content-between align-items-center mt-4 ">
            <paystack buttonClass="button-class btn btn-primary ml-5" buttonText="Deposit" :amount="amount * 100"
              :email="email" :publicKey="publickey" type="submit" :reference="reference" :callback="processPayment"
              :onSuccess="onSuccessfulPayment" currency="GHS" :onCancel="onCancelledPayment"></paystack>


            <v-col class="d-flex justify-content-end">
              <v-btn to="/transac" class="search font-weight-bold ml-30">Back</v-btn>
            </v-col>
          </div>
        </v-form>

       
      </div>
    </div>
  </div>
</template>


<script setup>
import paystack from 'vue3-paystack';
import { id } from 'vuetify/locale';

// const nuxtapp = useNuxtApp();
const router = useRouter();
// const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const client = useSupabaseClient();
const config = useRuntimeConfig();
// const router = useRouter();

// const user_id = user.value.id;

const profile = await client.from('profile').select('Username, first_name, last_name, gh_card_no').eq('id', user.value.id).single()
const publickey = config.public.PAYSTACK_PUBLIC_KEY;

const fullname = ref(profile.data.first_name + " " + profile.data.last_name);
const email = ref(user.value.email);
const amount = ref(0);
const reference = ref("");
// const idNum = await client.from('transactions').select('id').eq('user_id', user.value.id).single();
const transactions = await client.from('transactions').select('amountEnt').eq('user_id', user.value.id).order('created_at', { ascending: false }).limit(1).single();
// const amountVal = await client.from('transaction').select('amountEnt').in('amountEnt', ).eq('user_id', user.value.id);
console.log(transactions.data);
// console.log(idNum.data.id);
// let amountFloat = parseFloat(amount);



const onSuccessfulPayment = async () => {
  // const {data, error} = await client.from()
  if (transactions.data == 0) {
    try {
      const { data, error } = await client.from('transactions').insert({ amountEnt: amount.value }).eq('user_id', user.value.id);
    } catch (error) {
      console.log(error)
    }
  } else if (user.value.id = ! null && transactions.data != 0) {
    const addBal = parseInt(transactions.data.amountEnt) + parseInt(amount.value);
    try {
      const { data, error } = await client.from('transactions').insert({ amountEnt: addBal }).eq('user_id', user.value.id).select();
    } catch (error) {
      console.log(error)
    }
  }
  router.push('/transac');
  console.log(response)
};

const onCancelledPayment = function (response) {
  router.push('/Payment')
  alert('Failed Transaction!');
  console.log(response)
};
</script>


<style scoped>
h1 {
  margin-bottom: 20px;
}

.card {
  border: none;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.219);
  margin-bottom: 1rem;
}

.card-body {
  padding: 2rem;
}


.button-class {
  background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
  color: black;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;

}

.button-class:hover {
  background-color: #00b3aa !important;

  color: white;
}
</style>