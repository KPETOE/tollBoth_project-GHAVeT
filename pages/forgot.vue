<template>
    <div>
        <v-form @submit.prevent="">
            <v-container>
                <v-row>
                    
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>
<script setup>
definePageMeta({
    layout:'custom'
})
const changePwd = async () => {
    try {
        const { data, error } = await auth.resetPasswordForEmail({
            email: loginForm.userName,
            redirectTo: 'http://localhost:3000/update-password'
        })
    } catch (error) {
        console.log(error)
    }

};
</script>