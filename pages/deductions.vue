<template>
    <div>
        <v-card>
            <v-container>
                <v-form @submit.prevent="payToll">
                    <v-label class="fw-bold">Toll Booth</v-label>
                    <v-select style="width: 100%;" :items="booth" v-model="boothForm.booth"></v-select>

                    <v-btn type="submit" class="search font-weight-bold ml-30">Pay</v-btn>
                    <v-dialog v-model="Alert" :type="type" width="20em">
                        <v-alert width="600" height="400" closable variant="flat" color="blue"
                            title="Passed Successfylly" :text="'You passed' + ' ' + boothForm.booth + '!'"></v-alert>
                    </v-dialog>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>

<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const Alert = ref(false);
const booth = ref(['Tema', 'Takoradi', 'Amasaman', 'Koforidua','Jomoro','Salaga','Bawjiase','Asankragwa','Ayensuano ','Elmina ','Pokuase ','Cape Coast','Bibiani ',
'Fijai','Sefwi Wiawso','Anwiankwanta-Takoradi','Agona Swedru','Aburi-Adenta ','Sogakope-Sege','Aflao-Denu', 'Bolgatanga-Navrongo','Wa-Tumu','Techiman-Kintampo','Bole-Bamboi',
'Accra-Winneba','Nkawkaw-Atibie','Kumasi-Barekese','Nsawam-Kumasi']);
const boothForm = ref({
    booth: ''
});

// Fetch the latest transaction for the user to get their current balance
const transactions = await client.from('transactions')
    .select('amountEnt')
    .eq('user_id', user.value.id)
    .order('created_at', { ascending: false })
    .limit(1)
    .single();

    const payToll = async () => {
    const balance = transactions.data?.amountEnt;  // Get the user's current balance

    // Check if balance exists and is enough to deduct
    if (balance !== null && balance >= 50) {
        try {
            const deduct = balance - 50;  // Deduct 50 from the balance
            console.log(`New balance: ${deduct}`);

            // Ensure the selected booth is passed correctly
            const { data, error } = await client
                .from('transactions')
                .insert({
                    user_id: user.value.id,  // Insert user ID
                    deduction: 50,  // Amount deducted
                    location: boothForm.value.booth,  // Ensure the booth value is passed here
                    amountEnt: deduct  // Updated balance
                });

            if (error) throw error;

            Alert.value = true;  // Show success dialog
        } catch (error) {
            console.log("Error processing transaction: ", error);
        }
    } else {
        // If the user has insufficient funds
        alert('Please deposit funds before passing the Toll Booth!');
        router.push('/transac');  // Redirect to the transaction page to deposit
    }
};

</script>