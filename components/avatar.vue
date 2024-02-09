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
                        <h3>Hawa Thompson</h3>
                        <p class="text-caption mt-1">
                            ht@gmail.com
                        </p>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">
                            Edit Account
                        </v-btn>
                        <v-divider class="my-3"></v-divider>
                        <v-btn rounded variant="text">
                            Disconnect
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-menu>
    </div>
</template>