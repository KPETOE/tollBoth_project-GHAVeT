<template>
    <div class="body">

       
    <p class="text-center justify-text text-white ">Join the fast lane to convenience! Sign up now for effortless <br>
            electronic toll collection on your journeys.</p>
        <br>

        <!-- <v-row align="center" justify="center">
            <v-col cols="auto">
                <img  alt="Left Logo" class="logo">
            </v-col>
            <v-col cols="auto">
                <p class="text-center justify-text text-white">
                    Join the fast lane to convenience! Sign up now for effortless electronic toll collection on your
                    journeys.
                </p>
            </v-col>
            <v-col cols="auto"  >
                <img  src="/img/SignupLog.png" alt="Right Logo" class="logo"  >
            </v-col>
        </v-row> -->

        <v-parallax style="background-color: aliceblue;">
            <v-img src="/img/ETC2.jpg" height="30em"></v-img>

        </v-parallax>
        <v-container>
            <v-form @submit.prevent="signUp">
                <v-row>
                    <v-col cols="" lg="6" sm="6">
                        <v-label class="font-weight-bold">First Name</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.fName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="6">
                        <v-label>Other Names / Last Name</v-label>
                        <v-text-field class="text-field modify" v-model="signupForm.lName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">User Name</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.uName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">Gh Card No.</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.ghCardNo" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">Mobile Number</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.mobileNo" type="number"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">Email</v-label>
                        <v-text-field class="text-field modify" v-model="signupForm.email" type="email"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">Password</v-label>
                        <v-text-field class="text-field modify " v-model="signupForm.pwd1" type="password"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold">Confirm Password</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.pwd2" type="password"></v-text-field>
                    </v-col>
                </v-row>
                <br> <br>
                <!-- <span v-if="pwdErr == true">
                    <p>{{ pwdErr }}</p>
                </span>
                <v-btn type="submit">Sign Up</v-btn> -->
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
        <br>
        <v-divider class="social-divider">Or Sign up with social media</v-divider>

        <br>
    </div>
</template>
<script setup>
const { auth } = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

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
            pwdErr;
        }, 3000);
        return;
    }

    try {
        const { data, error } = await auth.signUp(
            email = signupForm.email,
            password = signupForm.pwd1,
        );
        
    } catch (error) {
        console.log(error)
    }
};
</script>

<style scoped>
.body {

    background-color: #2E424D !important;
}

.modify {
    background: linear-gradient(to right, rgba(252, 252, 252, 0.331), rgba(135, 207, 235, 0.486), #31759ab4, #153445b4) !important;


    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

}

.social-divider {
    color: rgb(243, 242, 242);

}
</style>