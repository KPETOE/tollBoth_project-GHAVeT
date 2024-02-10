<template>
    <div>
        <v-container>
            <v-form @submit.prevent="singUp">
                <v-row>
                    <v-col cols="" lg="12" sm="6">
                        <v-label>First Name</v-label>
                        <v-text-field type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="6">
                        <v-label>Other Names / Last Name</v-label>
                        <v-text-field type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>User Name</v-label>
                        <v-text-field type=""></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>Gh Card No.</v-label>
                        <v-text-field type=""></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>Mobile Number</v-label>
                        <v-text-field type="number"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>Email</v-label>
                        <v-text-field type="email"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>Password</v-label>
                        <v-text-field type="password"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="12" sm="12">
                        <v-label>Confirm Password</v-label>
                        <v-text-field type="password"></v-text-field>
                    </v-col>
                </v-row>
                <v-btn type="submit">Sign Up</v-btn>
            </v-form>
            <v-divider>Or Sign up with social media</v-divider>
            <v-row>
                <v-col>
                    <v-btn icon="mdi-google"></v-btn>
                </v-col>
                <v-col>
                    <v-btn icon="mdi-facebook"></v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
});

const signUpForm = ref({
    fName: '',
    lName: '',
    uName: '',
    ghCardNo: '',
    mobileNo: '',
    email: '',
    pwd1: '',
    pwd2: ''
});

const signupForm = signUpForm.value;
</script>