<template>

    <div>

      

        <v-col cols="12" md="4" sm="6">
            <v-text-field label="Outlined" placeholder="Placeholder" variant="outlined"></v-text-field>
        </v-col>

        <v-row>
      <v-col cols="12" md="4" sm="6">
        <v-select
          :label="selectLabel"
          placeholder="Choose Your MoMo Service"
          :items="items"
          outlined
          class="thick-border"
          @focus="onFocus"
          @blur="onBlur"
        >
    
    </v-select>
      </v-col>
    </v-row>

    </div>
</template>

<script setup>


import { ref } from 'vue';




const selectLabel = ref('Outlined');

const onFocus = () => {
  selectLabel.value = '';
};

const onBlur = () => {
  selectLabel.value = 'Choose Your MoMo Service';
};


</script>

<style>
.thick-border .v-input__control {
  border-width: 2px !important; /* Adjust thickness here */
  border-style: solid !important;
  border-color: currentColor !important; /* Adjust color if needed */
  border-radius: 4px !important; /* Keep the same radius as the original */
}
</style>