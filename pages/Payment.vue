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
  <div class="container mt-2">
    <div class="card mx-auto" style="max-width: 45rem;">
      <div class="card-body">
        <v-form @submit.prevent="" class="mt-10 mb-10">
          <v-label class="fw-bold">Full Name</v-label>
          <v-text-field variant="outlined" v-model="fullname" disabled style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">Email</v-label>
          <v-text-field variant="outlined" v-model="email" disabled style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">Ammount</v-label>
          <v-text-field v-model="amount" placeholder="GHS 5.00" variant="outlined" style="width: 100%;"></v-text-field>

          <div class="text-center mt-4">
            <paystack buttonClass="'button-class btn btn-primary'" buttonText="Deposite" :amount="amount * 100"
              :email="email" :publicKey="publickey" type="submit" :reference="reference" :callback="processPayment"
              :onSuccess="onSuccessfulPayment" currency="GHS" :onCancel="onCancelledPayment"></paystack>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>


<script setup>
import paystack from 'vue3-paystack';

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
const transactions = await client.from('transactions').select('amountEnt');
// console.log(publickey);
// const dispForm = ref({
//   fName: profile.data.first_name + " " + profile.data.last_name,
//   ammount: "",
//   email: user.value.email,
// });


const onSuccessfulPayment = async () => {
  // const {data, error} = await client.from()
  if (transactions.data == null) {
    const { data, error } = await client.from('transactions').insert({ amount: amount });
  }else if(transactions.data != null){
    const amountEnt = await client.from('transactions').select('amountEnt');
    const addBal = amountEnt + amount;
    const {data, error} = await client.from('transactions').insert({amount: current_bal})
  }
  router.push('/transac');
  console.log(response)
};

const onCancelledPayment = function (response) {
  router.push('/Payment')
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

.btn-primary {
  background-color: white;
  border-color: black;
  border-width: 1.5px;
}

.btn-primary:hover {
  color: rgb(23, 77, 63);
  border-color: black;
  background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(169, 215, 233, 0.486), #4ca4d348, #1534459b) !important;
}
</style>