<template>
    <div>
        <v-app>
            <theHeader />
            <!-- <loader /> -->
            <slot />
            <theFooter />
            <VuePreloader style="height: 100vh;" background-color="#FFFFFF" color="#000000" transition-type="fade-right" :loading-speed="25"
                :transition-speed="1400" @loading-is-over="loadingIsOver" @transition-is-over="transitionIsOver">
            </VuePreloader>
        </v-app>
    </div>
</template>
<script setup>
import { VuePreloader } from 'vue-preloader';
</script>