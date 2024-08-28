


<template>
    <v-container>
        <!-- Header -->
        <v-row>
            <v-col cols="12">
                <h2 class="text-center mb-10">Contact Us </h2>
            </v-col>
        </v-row>

        <!-- Content -->
        <v-row>
            <!-- Left column with form -->
            <v-col cols="12" md="6"> <h1>Fill In The Details</h1>
                <v-form @submit.prevent="sendMessage" class="mt-10 mb-10">
                   
                    <v-label>Full Name</v-label>
                    <v-text-field v-model="fullName" variant="outlined" placeholder="Nathan Fletcher"></v-text-field>
                    <v-label>Subject</v-label>
                    <v-text-field v-model="Complain" variant="outlined" placeholder="Complain"></v-text-field>

                    <v-label>Email</v-label>
                    <v-text-field placeholder="RichEstalla@gmail.com" v-model="email" variant="outlined"></v-text-field>
                    <v-label>Message</v-label>
                    <v-textarea variant="outlined" placeholder="Message" v-model="message"></v-textarea>

                    <v-btn type="submit" width="500" variant="outlined" color="black" class="your-custom-class">
                        <span class="bold-text">{{ isLoading ? 'Loading...' : 'Send' }}</span>
                        <v-icon>mdi-arrow-right</v-icon>
                    </v-btn>

                </v-form>
            </v-col>


            <!-- Vertical line -->
            <v-col cols="12" md="1">
                <v-divider vertical class="vertical-line"></v-divider>
            </v-col>


            <v-col cols="12" md="5">
                <v-row>

                    <v-col cols="12">
                                            <h1>Reach Us On</h1>
                       
                        <br>
                        <br>
                        <p><v-icon>mdi-whatsapp</v-icon> +233 547878001</p>
                    </v-col>
                    <v-col cols="12">
                        <p><v-icon>mdi-phone</v-icon> +233 546484315</p>
                    </v-col>
                    <v-col cols="12">
                        <p><v-icon>mdi-email</v-icon> ghaVET@gov.gh</p>
                    </v-col>
                    <v-col cols="12">
                        <p><v-icon>mdi-map-marker</v-icon> Address<br>

                            OSU American Embassy<br>

                            P. O. Box 521 Accra, <br>

                            GhanaGA-145-7445,<br>

                            Accra</p>
                    </v-col>
                    <v-col cols="12">
                        <p><v-icon>mdi-clock</v-icon> Mon -Sat 0800hrs to

                            1700hrs<br>

                            Sundays On 1300hrs

                            to 1700hrs</p>
                    </v-col>


                </v-row>


            </v-col>
        </v-row>
    </v-container>
</template>



<script setup>
const client = useSupabaseClient();
const user = useSupabaseUser();

const profile = await client.from('messages').select('Username, first_name, last_name, gh_card_no').eq('id', user.value.id).single()
let Alert = ref(false);
let type = ref('success');

const contactForm = ref({
    fullName: '',
    subject: '',
    email: '',
    message: ''
});


const isLoading = ref(false);

const sendMessage = async () => {
    isLoading.value = true;

    try {
        const { data, error } = await client.from('messages').insert([
            {
                full_name: contactForm.value.fullName,
                subject: contactForm.value.subject,
                email: contactForm.value.email,
                message: contactForm.value.message
            }
        ]);

        if (error) throw error;

        alert('Message sent successfully!');
        contactForm.value = {
            fullName: '',
            subject: '',
            email: '',
            message: ''
        };
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Failed to send message. Please try again later.');
    } finally {
        isLoading.value = false;
    }
};
</script>



<style scoped>
.your-custom-class {
    background: linear-gradient(to right, rgba(36, 71, 37, 0.331), rgba(135, 235, 173, 0), #31759ab4, #153445b4) !important;


    color: rgb(7, 4, 4);
}

.bold-text {
    font-weight: bold;
}


.vertical-line {
    border-left: 5px solid rgb(31, 28, 28);

    height: 90%;
    margin: 0 10px;

}

.contact-info {
    padding-right: 10px;
    /* Adjust the padding for spacing */
}
</style>
