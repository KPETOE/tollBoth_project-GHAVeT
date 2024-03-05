<template>
    <div class="body">


        <p class="text-center justify-text text-white ">Join the fast lane to convenience! Sign up now for effortless
            <br>
            electronic toll collection on your journeys.
        </p>
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

        <!-- <v-parallax style="">
            <v-img src="/img/ETC2.jpg" height="30em"></v-img>

        </v-parallax> -->
        <v-container>


            <v-dialog v-model="dialog" max-width="400">
                <v-card>
                    <v-card-title class="headline">Error</v-card-title>
                    <v-card-text>Please fill in all fields</v-card-text>
                    <v-card-actions>
                        <v-btn color="primary" @click="dialog = false">OK</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <!-- <div v-if="auth.signUp"> -->
            <v-form @submit.prevent="signUp">
                <v-row>
                    <v-col cols="" lg="6" sm="6">
                        <v-label class="font-weight-bold text-white">First Name</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.fName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="6">
                        <v-label class="font-weight-bold text-white">Other Names / Last Name</v-label>
                        <v-text-field class="text-field modify" v-model="signupForm.lName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">User Name</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.uName" type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Gh Card No.</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.ghCardNo"
                            type="name"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Mobile Number</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.mobileNo"
                            type="number"></v-text-field>
                    </v-col>

                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Email</v-label>
                        <v-text-field class="text-field modify" v-model="signupForm.email" type="email"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Password</v-label>
                        <v-text-field class="text-field modify " v-model="signupForm.pwd1"
                            type="password"></v-text-field>
                    </v-col>
                    <v-col cols="" lg="6" sm="12">
                        <v-label class="font-weight-bold text-white">Confirm Password</v-label>
                        <v-text-field class="text-field  modify" v-model="signupForm.pwd2"
                            type="password"></v-text-field>
                    </v-col>
                </v-row>
                <br> <br>

                <v-row>
                    <v-col cols="" lg="6" sm="12" class="d-flex justify-center">
                        <v-btn type="submit">Sign Up</v-btn>
                    </v-col>
                    <v-col cols="" lg="6" sm="12" class="d-flex justify-center">
                        <v-btn @click="clearForm">Clear</v-btn>
                    </v-col>
                    <v-divider>Or Sign up with social media</v-divider>
                </v-row>

                <v-row>
                    <v-col>
                        <v-btn icon>
                            <v-icon>mdi-google</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col>
                        <v-btn  icon="mdi-facebook"></v-btn>
                    </v-col>
                    <v-col>
                        <v-btn  icon=" mdi-apple"></v-btn>
                    </v-col>
                </v-row>
            </v-form>


        </v-container>
        <br>
        <v-divider class="social-divider">Or Sign up with social media</v-divider>

        <br>
    </div>
</template>

<script setup>



const { auth } = useSupabaseClient()
const client = useSupabaseClient()
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
    pwd2: '',
    // id:''
});

// const confirmSignUpForm = ref({
//     email: '',
//     code: ''
// });

const signupForm = signUpForm.value;
// const confirmForm = confirmSignUpForm.value;





const signUp = async () => {



    // Check if any required field is empty
    for (const key in signupForm) {
        if (signupForm[key].trim() === '') {
            alert('Please  Complete ALL fields !!!')
            return;
        }
    }

    if (signupForm.pwd1 !== signupForm.pwd2) {
        alert('Password Does Not Match!')
        signupForm.pwd1 = '';
        signupForm.pwd2 = '';
        setTimeout(() => {
            pwdErr;
        }, 3000);
        return;
    }

    try {
        const { data, error } = await auth.signUp({
            email: signupForm.email,
            password: signupForm.pwd1,

        });
        const { data0, error0 } = await client.from('profile').insert([
            {
                first_name: signupForm.fName,
                last_name: signupForm.lName,
                Username: signupForm.uName,
                gh_card_no: signupForm.ghCardNo,
                Mobile_Number: signupForm.mobileNo,
            }
        ]).select()
        return navigateTo('/confirm')
        // const confirmMail = signupForm.email;
        // const step = bySteps.confirm;
    } catch (error) {
        console.log(error)
    }
};

// const confirmSignUp = async () => {
//     try {
//         const { data, error } = await auth.verifyOtp({ email: confirmForm.email, token: confirmForm.code, type: 'email' });
//         return navigateTo('/')
//     } catch (error) {
//         console.log(error);
//     }
// };

// watchEffect(() => {
//     if (!user.value) {
//         return navigateTo('/signup');
//     }
// });

const clearForm = () => {
    for (const key in signupForm) {
        signupForm[key] = '';
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