<template>
    <div>
        <v-container>
            <v-form @submit.prevent="signUp">
                <v-row>
                    <v-col cols="" lg="6" sm="6">
                        <v-label>First Name</v-label>
                        <v-text-field v-model="signupForm.fName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="6">
                        <v-label>Other Names / Last Name</v-label>
                        <v-text-field v-model="signupForm.lName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>User Name</v-label>
                        <v-text-field v-model="signupForm.uName" type=""></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>Gh Card No.</v-label>
                        <v-text-field v-model="signupForm.ghCardNo" type=""></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>Mobile Number</v-label>
                        <v-text-field v-model="signupForm.mobileNo" type="number"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>Email</v-label>
                        <v-text-field v-model="signupForm.email" type="email"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>Password</v-label>
                        <v-text-field v-model="signupForm.pwd1" type="password"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label>Confirm Password</v-label>
                        <v-text-field v-model="signupForm.pwd2" type="password"></v-text-field>
                    </v-col>
                </v-row>
                <span v-if="pwdErr == true">
                    <p>{{ pwdErr }}</p>
                </span>
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
const { auth } = useSupabaseClient()
const user = useSupabaseUser()


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

const signUp = async () => {
    if (signupForm.pwd1 !== signupForm.pwd2) {
        pwdErr = 'Passwords do not match';
        signupForm.pwd1 = '';
        signupForm.pwd2 = '';
        setTimeout(() => {
            pwdErr = '';
        }, 3000);
        return;
    }

    try {
        const { data, error } = await auth.signUp(signupForm.email, signupForm.pwd1);
        signupForm.fName = '';
    } catch (error) {

    }
};
</script>