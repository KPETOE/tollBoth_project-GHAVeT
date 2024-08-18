<template>
    <div>
        <v-card>
            <v-container>
                <v-form @submit.prevent="payToll">
                    <v-label class="fw-bold">Toll Booth</v-label>
                    <v-select style="width: 100%;" :items="booth" v-model="boothForm.booth"></v-select>

                    <v-btn type="submit" class="search font-weight-bold ml-30">Pay</v-btn>
                </v-form>
            </v-container>
        </v-card>
    </div>
</template>
<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

const transactions = await client.from('transactions').select('amountEnt').eq('user_id', user.value.id).order('created_at', { ascending: false }).limit(1).single();
const booth = ref(['Tema', 'Takoradi', 'Amasaman', 'Koforidua']);
const boothForm = ref({
    booth: ''
});

const payToll = async () => {
    const deduct = parseInt(transactions.data.amountEnt) - 50;
    console.log(deduct)
    const { data, error } = await client.from('transactions').insert({ deduction: deduct, location: boothForm.booth }).eq('user_id', user.value.id).select();
    alert('Passed Successfully!');
    // router.push('/')
};  
</script>