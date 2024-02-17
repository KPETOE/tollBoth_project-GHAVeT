<template>
    <div>
        <v-container>
            <v-form @submit.prevent="changePwd">
                <v-row>
                    <v-col cols="" lg="12" sm="12" md="12">
                        <v-text-field placeholder="Email" v-model="forgetPwd.email" type="email"
                            style="background-color: white;"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12" md="12">
                        <v-text-field placeholder="New Password" v-model="forgetPwd.newPassword" type="password"
                            style="background-color: white;"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12" md="12">
                        <v-text-field placeholder="Confirm New Password" type="password"
                            v-model="forgetPwd.confirmPassword" style="background-color: white;"></v-text-field>
                    </v-col>
                </v-row><br>
                <v-btn type="submit">Change Password</v-btn>
            </v-form>
        </v-container>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
});
const { auth } = useSupabaseClient();
const user = useSupabaseUser();

const forgetPwdForm = ref({
    email: '',
    newPassword: '',
    confirmPassword: ''
});
const forgetPwd = forgetPwdForm.value;

const changePwd = async () => {
    if (forgetPwdForm.value.newPassword !== forgetPwdForm.value.confirmPassword) {
        alert('Your password does not match!');
    }

    // if (user.value.email === forgetPwdForm.value.email) {
        try {
            const { data, error } = await auth.updateUser({
                password: forgetPwdForm.value.newPassword
            })
            navigateTo('/login')
            console.log("Successful!")
        } catch (error) {
            console.log(error)
            alert("An Error Occured!")
        }
    // }
};
</script>