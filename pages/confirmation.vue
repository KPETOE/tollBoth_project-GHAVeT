<template>
    <div>
        <v-form @submit.prevent="submitConfirm">
            <h1 class="text-center text-white text-capitalize">check your email for verification code.</h1>
            <v-text-field type="number" v-model="confirm.token"></v-text-field>
            <v-btn type="submit">Submit</v-btn>
        </v-form>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
})
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const confirmForm = ref({
    token: ''
});

const confirm = confirmForm.value;

const submitConfirm = async () => {
    try {
        const { data, error } = await auth.verifyOtp({ tokenhash: confirm.token, type: 'email' });
        if (auth.verifyOtp == true) {
            navigateTo('/')
        }
    } catch (error) {
        console.log(error)
    }
};

// watchEffect(() => {
//     if (!user.value) {
//         return navigateTo('/confirmForm')
//     };
// });
</script>