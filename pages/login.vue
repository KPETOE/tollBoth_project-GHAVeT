<template>
    <div class="body">
        <div  style="width: 40%;"  class=" CARD" justify="center">
            <h3 class="text-center">Welcome</h3>
            <h5 class="text-center">Glad to having you</h5>


            <v-col class="text-center custom-offset" align="center" justify="center">
                <v-row cols="12" sm="6" >
                    <v-avatar size="400" >
                        <v-img src="/img/LoginLogo.png" contain fill-height></v-img>
                    </v-avatar>
                </v-row>
            </v-col>


            <v-container fluid style="height: " class="">
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
                    <p class="text-center">Don't have an account? <nuxt-link style="text-decoration: none;"
                            class="text-white" to="/signup">Signup here</nuxt-link></p><br>
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
// const profile = client.from('profile').select('*').then((res) => profile.value = res.data);
const { profile } = await client.from('profile').select('id, Username, first_name, last_name').eq('');

//profId.then((res) => (profile.value = res.data));
// if (profile) {
//     id.value = profile.id
//     Username.value = profile.Username
//     first_Name.value = profile.first_Name
//     last_Name.value = profile.last_Name
// }

const signIn = async () => {
    try {
        const { data, error } = await auth.signInWithPassword({
            email: loginForm.userName,
            password: loginForm.password
        });
        const person = await client.from('profile').select('id').eq('id', user.value.id).single()
        console.log(person)
        // watchEffect(() => {
        if (person.data == null) {
            router.push('/confirmDets')
        } else {
            router.push('/')
        }

        // if (user.value.id == profile.value.id) {
        //     router.push('/')
        // }
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
    width: 25em;
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


.CARD {
  padding: 20px;
  box-shadow: 0 0 35px rgba(81, 151, 151, 0.562);
  border-radius: 10px;
  max-width: 800px;
  margin: auto;
  height: 60%;

 
}

.custom-offset {
    margin-left: 70px; }
</style>