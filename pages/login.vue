<template>
    <div>
        <h1 class="text-center">Welcome</h1>
        <h2 class="text-center">Glad to having you</h2>
        <!-- <v-img :src="gvet" height=""></v-img> -->
        <v-form @submit.prevent="signIn">
            <v-text-field class="text-field" type="name" v-model="loginForm.userName"
                placeholder="User Name"></v-text-field>
            <v-spacer></v-spacer>
            <v-text-field class="text-field" type="password" v-model="loginForm.password" placeholder="Password"></v-text-field>

            <v-btn type="submit">Submit</v-btn>
        </v-form>
    </div>
</template>
<script setup>
definePageMeta({
    layout: 'custom'
});

const logInForm = ref({
    userName: '',
    password: ''
});
const loginForm = logInForm.value;
</script>
<style>
.text-field {
    background-color: rgb(255, 255, 255);
    height: 3.5em;
}
</style>