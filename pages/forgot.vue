<template>
    <div>
        <v-container>
            <v-form @submit.prevent="changePwd">
                <v-row>
                    <v-col>
                        <v-text-field type="email" style="background-color: white;" placeholder="email"
                            v-model="change.email"></v-text-field>
                    </v-col>
                </v-row><br>
                <v-btn type="submit">Send Reset Link</v-btn>
            </v-form>
        </v-container>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
})
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const changeForm = ref({
    email: ''
});
const change = changeForm.value;
const changePwd = async () => {
    // email = changeForm.value.email;
    try {
        const { data, error } = await auth.resetPasswordForEmail(email = changeForm.value.email, {

            redirectTo: 'http://localhost:3000/update-password'
        })
    } catch (error) {
        console.log(error)
    }

};
</script>