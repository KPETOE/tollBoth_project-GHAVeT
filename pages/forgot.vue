<template>
    <div   style="height:45em;">
        <v-container class="row justify-content-center" style="height: 500em;">
            <v-form @submit.prevent="changePwd" class="text-center">
                <v-row>
                    <v-col class="text-center">
                        <v-text-field class="forgot" type="email" placeholder="email" v-model="change.email"></v-text-field>
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

<style>
.forgot {

    width: 40em;
    margin: 0 auto;
    background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
    border-top-left-radius: 10px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 15px;
}


.center-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 0 auto;
}
</style>