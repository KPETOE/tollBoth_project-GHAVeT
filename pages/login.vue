<template>
    <div class="body">
        <div style="width: auto;" class="py-10" justify="center">
            <h3 class="text-center">Welcome</h3>
            <h5 class="text-center">Glad to having you</h5>

            <v-img src="/img/LoginLogo.png" height="400"></v-img>


            <v-container style="height: " class="">
                <v-form @submit.prevent="signIn" style="text-align: center;">
                    <v-row align="center" justify="center">

                        <v-col cols="" sm="12" lg="6">
                            <v-label class="text-white " style="font-size: 1.2em; font-weight: bold;"> Username /
                                Email</v-label>
                            <v-text-field class="" type="name" v-model="loginForm.userName"
                                placeholder="User Name/Email" variant="solo" color="white"></v-text-field>
                        </v-col>
                    </v-row>
                    <br>
                    <v-row align="center" justify="center">
                        <v-col cols="" sm="12" lg="6">
                            <v-label class="text-white" style="font-size: 1.2em; font-weight: bold; ">
                                Password</v-label>
                            <v-text-field v-model="loginForm.password"
                                :append-inner-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                                variant="solo" placeholder="Password">
                            </v-text-field>
                        </v-col>

                    </v-row>

                    <br>
                    <p class="text-center">Don't have an account? <v-btn class="text-white" variant="text"
                            @click="signUp">Signup here
                        </v-btn>
                    </p><br>
                    <p class="text-center">Forgot Password? <v-btn class="text-white" variant="text"
                            @click="forGet">Click
                            here</v-btn>
                    </p>
                    <v-row align="center" justify="center">
                        <v-col cols="auto" sm="6">
                            <v-btn type="submit">Submit</v-btn>
                        </v-col>
                    </v-row>
                </v-form>
                <br> <br>
            </v-container>

        </div>
    </div>
</template>


<script setup>

definePageMeta({
    layout: 'custom'
});
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

const logInForm = ref({
    userName: '',
    password: ''
});
const loginForm = logInForm.value;

const signIn = async () => {
    try {
        const { data, error } = await auth.signInWithPassword({
            email: loginForm.userName,
            password: loginForm.password
        });
        const person = await client.from('profile').select('id').eq('id', user.value.id).single();
        // console.log(person)
        if (person.data == null) {
            router.push('/confirmDets')
        } else {
            router.push('/')
        }
        if (!user.value) {
            alert('Wrong username or password');
            router.push('/login');
        }
    } catch (error) {
        console.log(error)
    }

};

const forGet = () => {
    console.log('routing to forget')
    router.push('/forgot')
};
const signUp = () => {
    console.log('routing to signup')
    router.push('/signup')
};



const showPassword = ref(false);

</script>



<style>
.text-field {
    /* width: 25em; */
    height: 3.5em;

    background: linear-gradient(to right, rgba(252, 252, 252, 0.331), rgba(122, 200, 230, 0.486), #31759ab4, #4f819c73) !important;


    /* border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; */
}


.body {
    background: linear-gradient(to right, #182831, rgba(72, 113, 129, 0.813), #18252c) !important;
}

.label-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}


.CARD {
    padding: 20px;
    /* box-shadow: 0 0 35px rgba(81, 151, 151, 0.562); */
    border-radius: 10px;
    /* max-width: 800px; */
    margin: auto;
    height: 100vh;


}

.custom-offset {
    margin-left: 70px;
}
</style>