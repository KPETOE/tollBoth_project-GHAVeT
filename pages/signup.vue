<template>
  <div class="body">
    <br />

    <v-container>
      <p class="text-white" style="text-align: center;">
        Join the fast lane to convenience! Sign up now for effortless
        <br />
        electronic toll collection on your journeys.
      </p>
    </v-container>




    <br />


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
          <v-col cols="" lg="6" sm="12">
            <v-label class="font-weight-bold text-white">Email</v-label>
            <v-text-field variant="solo" class="text-field modify" v-model="signupForm.email"
              type="email"></v-text-field>
          </v-col>
          <v-col cols="" lg="6" sm="12">
            <v-label class="font-weight-bold text-white">Password</v-label>
            <v-text-field variant="solo" class="text-field modify" v-model="signupForm.pwd1"
              type="password"></v-text-field>
          </v-col>
          <v-col cols="" lg="6" sm="12">
            <v-label class="font-weight-bold text-white">Confirm Password</v-label>
            <v-text-field variant="solo" class="text-field modify" v-model="signupForm.pwd2"
              type="password"></v-text-field>
          </v-col>

          <!-- <v-col cols="" lg="6" sm="12">
            <v-label class="font-weight-bold text-white"
              >Driver Licence ID</v-label
            >
            <v-text-field
              class="text-field modify"
              v-model="signupForm.pwd2"
              type="Number"
            ></v-text-field>
          </v-col> -->
        </v-row>
        <br />
        <br />
        <br /><br />
        <v-row>
          <v-col cols="" lg="6" sm="12" class="d-flex justify-center">
            <v-btn type="submit">Sign Up</v-btn>
          </v-col>
          <v-col cols="" lg="6" sm="12" class="d-flex justify-center">
            <v-btn @click="clearForm">Clear</v-btn>
          </v-col>
        </v-row>
      </v-form>

      <!-- <br />
      <br />
      <br />
      <br />
      <v-col>
        <v-row style="align-items: center">
          <v-divider style="flex: 1; border-color: white; border-width: 2px"></v-divider>
          <p style="margin: 0 8px; font-weight: bold; color: white">
            Or Sign up with social media
          </p>
          <v-divider style="flex: 1; border-color: white; border-width: 2px"></v-divider>
        </v-row>
        <br /><br /><br />

        <v-row>
          <v-col align="center">
            <div style="display: flex; justify-content: space-between; width: 100%">
              <v-btn icon>
                <v-icon>mdi-google</v-icon>
              </v-btn>
              <v-btn icon="mdi-facebook"></v-btn>
              <v-btn icon="mdi-apple"></v-btn>
            </div>
          </v-col>
        </v-row>
      </v-col> -->
    </v-container>
    <br />

    <br />
  </div>
</template>

<script setup>
const { auth } = useSupabaseClient();
const client = useSupabaseClient();
const user = useSupabaseUser();
const router = useRouter();

definePageMeta({
  layout: "custom",
});

const signUpForm = ref({
  email: "",
  pwd1: "",
  pwd2: "",
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
    if (signupForm[key].trim() === "") {
      alert("Please  Complete ALL fields !!!");
      return;
    }
  }

  if (signupForm.pwd1 !== signupForm.pwd2) {
    alert("Password Does Not Match!");
    signupForm.pwd1 = "";
    signupForm.pwd2 = "";
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
    return navigateTo("/confirm");

  } catch (error) {
    console.log(error);
  }
};


const clearForm = () => {
  for (const key in signupForm) {
    signupForm[key] = "";
  }
};
</script>

<style scoped>
.body {
  background-color: #2e424d !important;
  height: 100vh
}

.modify {
  background: linear-gradient(to right,
      rgba(252, 252, 252, 0.331),
      rgba(135, 207, 235, 0.486),
      #31759ab4,
      #153445b4) !important;

  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

.social-divider {
  color: rgb(243, 242, 242);
}
</style>
