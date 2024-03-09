<template>
    <div class="body">
        <h1 class="text-center">Welcome</h1>
        <h2 class="text-center">Glad to having you</h2>


        <v-row class="text-center" align="center" justify="center">
            <v-col cols="12" sm="6">
                <v-avatar size="400">
                    <v-img src="/img/LoginLogo.png" contain fill-height></v-img>
                </v-avatar>
            </v-col>
        </v-row>


        <v-container fluid style="height: ">
            <v-form @submit.prevent="signIn" style="text-align: center;">
                <v-row align="center" justify="center">

                    <v-col cols="12" sm="6" class="label-left">
                        <v-label class="text-white " style="font-size: 1.2em; font-weight: bold;"> Username /
                            Email</v-label>
                        <v-text-field class="text-field text-center" type="name" v-model="loginForm.userName"
                            placeholder="User Name/Email" variant="flat"></v-text-field>
                    </v-col>
                </v-row>
                <br>
                <v-row align="center" justify="center">


                    <v-col cols="12" sm="6" class="label-left">
                        <v-label class="text-white  " style="font-size: 1.2em; font-weight: bold; ">
                            Password</v-label>
                        <v-text-field class="text-field text-center" v-model="loginForm.password"
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="showPassword ? 'text' : 'password'" @click:append="showPassword = !showPassword"
                            variant="flat" placeholder="Password">
                        </v-text-field>
                    </v-col>

                </v-row>

                <br>
                <p class="text-center">Don't have an account? <nuxt-link style="text-decoration: none;" class="text-white"
                        to="/signup">Signup here</nuxt-link></p><br>
                <p class="text-center">Forgot Password? <nuxt-link style="text-decoration: none;" class="text-white"
                        to="/forgot">Click here</nuxt-link></p>
                <v-row align="center" justify="center">
                    <v-col cols="12" sm="6">
                        <v-btn type="submit">Submit</v-btn>
                    </v-col>
                </v-row>
            </v-form>
            <br> <br>
        </v-container>
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
const profile = client.from('profile').select('*');
console.log(profile)
const signIn = async () => {
    try {
        const { data, error } = await auth.signInWithPassword({
            email: loginForm.userName,
            password: loginForm.password
        });

        // watchEffect(() => {
        if (user.value.last_sign_in_at == !  null) {
            router.push('/')
        } else {
            router.push('/confirmDets')
        } 

        if (user.value.id == client.from('profile').select('id', user.value.id)) {
            router.push('/')
        }
        // })

        //     if (!user.value) {
        //     return navigateTo('/login')
        // } else if(user.value){
        //     return navigateTo('/')
        // }

        // if (user.value) {
        //     navigateTo('/')
        // }
        if (!user.value) {
            alert('Wrong  username or password');
            navigateTo('/login')
        }
        

    } catch (error) {
        console.log(error)
    }
};



const showPassword = ref(false);

</script>



<style>
.text-field {
    width: 35em;
    height: 3.5em;

    background: linear-gradient(to right, rgba(252, 252, 252, 0.331), rgba(122, 200, 230, 0.486), #31759ab4, #4f819c73) !important;


    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}


.body {
    background: linear-gradient(to right, #182831, rgba(72, 113, 129, 0.813), #18252c) !important;
}

.label-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
</style>