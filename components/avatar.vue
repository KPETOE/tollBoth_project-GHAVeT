<template>
    <div>
        <v-menu min-width="200px" rounded>
            <template v-slot:activator="{ props }">
                <v-btn icon v-bind="props" class=" icon ">
                    <v-avatar variant="outlined" image="/img/hawa.png">
                        <!-- <v-img src="/img/hawa.png"></v-img> -->
                    </v-avatar>
                </v-btn>
            </template>
            <v-card>
                <v-card-text>
                    <div class="mx-auto text-center">
                        <v-avatar image="/img/hawa.png">
                            <!-- <span class="text-h5"><v-img src="/img/hawa.png"></v-img></span> -->
                        </v-avatar>
                        <h5>{{ profile.data.first_name }}  {{ profile.data.last_name }}</h5>
                        <p class="text-muted">{{ profile.data.Username }}</p>
                        <v-divider></v-divider>
                        <p class="text-caption mt-1">
                            {{ user.email }}
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">
                            Edit Account
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn @click="logOut" rounded variant="text">
                            Logout
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>
<script setup>
const { auth } = useSupabaseClient();
const user = useSupabaseUser();
const client = useSupabaseClient();
const router = useRouter();

// const profile = ref([]);
const user_id = user.value.id;

const profile = await client.from('profile').select('Username, first_name, last_name').eq('id', user.value.id).single()


const logOut = async () => {
    const { error } = await auth.signOut();
    router.push('/')
};

// onMounted(getProfile);


</script>