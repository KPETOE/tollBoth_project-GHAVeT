<template>
    <div
        style="height: 40em; background-color: rgb(255, 255, 255); display: flex; justify-content: center; align-items: center;">
        <v-container>
            <v-row>
                <v-col class="d-flex justify-center">
                    <img src="../public/img/email.png" alt="Email Image" class="small-image">
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <h1 class="text-center text-capitalize">thanks for Signing up</h1>

                    <h4 class="text-center"> Please check your email for confirmation Link<br>
                        and follow the instructions on the email</h4>

                        <h6 class="text-center text-green">Before clicking to Login Confirm First.</h6>
                </v-col>
            </v-row>

            <v-row>

                <v-col class="text-center">
                    <v-btn class="plain-bold-button"  @click="navigateToLogin"> Click To Login</v-btn>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>


<script setup>


definePageMeta({
    layout: 'custom'
});

import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
    // Programmatically navigate to the login page
    router.push('/login'); // Change '/login' to the actual path of your login page
};

</script>

<style>
.small-image {
    width: 300px;
    /* Adjust the width as needed */
    height: auto;
    /* Maintain aspect ratio */
}


.plain-bold-button {
    border: 2px solid rgba(0, 0, 0, 0.301);
    border-radius: 10;

    width: 25em;
}
</style>