<template>
    <div>
        <v-container>
            <v-form @submit.prevent="confirm">
                <h1 class="text-center text-white text-uppercase">please confirm your details</h1><br>
                <v-row>
                    <v-col cols="" lg="6" sm="6">
                        <v-label class="font-weight-bold text-white">First Name</v-label>
                        <v-text-field class="text-field  modify" v-model="profile.fName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="6">
                        <v-label class="font-weight-bold text-white">Other Names / Last Name</v-label>
                        <v-text-field class="text-field modify" v-model="profile.lName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">User Name</v-label>
                        <v-text-field class="text-field  modify" v-model="profile.uName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Gh Card No.</v-label>
                        <v-text-field class="text-field  modify" v-model="profile.ghCardNo" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Mobile Number</v-label>
                        <v-text-field class="text-field  modify" v-model="profile.mobileNo" type="number"></v-text-field>
                    </v-col>
                </v-row>
                <v-btn type="submit">Confirm</v-btn>
            </v-form>
        </v-container>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
});

const client = useSupabaseClient();
const user = useSupabaseUser();
const { auth } = useSupabaseClient();

const profile = ref({
    fName: '',
    lName: '',
    uName: '',
    ghCardNo: '',
    mobileNo: ''
})
const confirm = async () => {
    try {
        const { data, error } = await client.from('profile').insert([
            {
                first_name: profile.value.fName,
                last_name: profile.value.lName,
                Username: profile.value.uName,
                gh_card_no: profile.value.ghCardNo,
                Mobile_Number: profile.value.mobileNo
            }
        ]).single();
        return navigateTo('/')
    } catch (error) {
        console.log(error);
    }
};
</script>