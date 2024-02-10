<template>
    <div>
        <v-form @submit.prevent="singUp">
            <v-row>
                <v-col>
                    <v-label>First Name</v-label>
                    <v-text-field type="name"></v-text-field>
                </v-col>
                <v-col>
                    <v-label>Other Names / Last Name</v-label>
                    <v-text-field type="name"></v-text-field>
                </v-col>
                <v-col>
                    <v-label>User Name</v-label>
                    <v-text-field type=""></v-text-field>
                </v-col>
                <v-col>
                    <v-label>Gh Card No.</v-label>
                    <v-text-field type=""></v-text-field>
                </v-col>
                <v-col>
                    <v-label>Mobile Number</v-label>
                    <v-text-field type="number"></v-text-field>
                </v-col>
                <v-col>
                    <v-label>Email</v-label>
                    <v-text-field type="email"></v-text-field>
                </v-col>
                <v-col>
                    <v-label>Password</v-label>
                    <v-text-field type="password"></v-text-field>
                </v-col>
                <v-col>
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
    </div>
</template>
<script setup>
definePageMeta({
    layout:'custom'
});
</script>