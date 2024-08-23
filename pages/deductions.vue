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
const transactions = await client.from('transactions').select('amountEnt').eq('user_id', user.value.id).order('created_at', { ascending: false }).limit(1).single();
const booth = ref(['Tema', 'Takoradi', 'Amasaman', 'Koforidua']);
const boothForm = ref({
    booth: ''
});

const payToll = async () => {
    if (transactions.data != null && transactions.data < 0) {
        try {
            const deduct = parseInt(transactions.data.amountEnt) - 50;
            console.log(deduct)
            const { data, error } = await client.from('transactions').insert({ deduction: deduct, location: boothForm.booth, amountEnt: deduct });
            // alert('Passed Successfully!');
            Alert.value = true;
            // router.push('/')
        } catch {
            console.log(error)
        }
    } else {
        alert('Please Deposite fund before passing the Toll Booth!');
        router.push('/Deposit')
    }

};  
</script>