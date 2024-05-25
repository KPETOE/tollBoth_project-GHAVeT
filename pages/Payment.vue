<template>
<div class="text-center mt-5">
    <h1 class="fw-bold text-teal-darken-3">Ghana Vehicle Electronic Tolling System</h1>
  </div>
<div class="text-center  fs-3">
    <v-label class="fw-bold">
        PAYMENT MADE SIMPLE AND SECURE
    </v-label>
</div>


 <!-- Form Container -->
 <div class="container mt-2">
    <div class="card mx-auto" style="max-width: 45rem;">
      <div class="card-body">
        <v-form @submit.prevent="" class="mt-10 mb-10">
          <v-label class="fw-bold">Full Name</v-label>
          <v-text-field variant="outlined" placeholder="Nathan Fletcher" style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">Address</v-label>
          <v-text-field variant="outlined" placeholder="Current location" style="width: 100%;"></v-text-field>

          <v-label class="fw-bold mt-3">GHANA CARD #</v-label>
          <v-text-field placeholder="GHA-********-**" variant="outlined" style="width: 100%;"></v-text-field>

          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

,
<script setup>



</script>


<style scoped>
  h1 {
    margin-bottom: 20px;
  }
  .card {
    border: none;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.219);
    margin-bottom: 1rem;
  }
  .card-body {
    padding: 2rem;
  }
  .btn-primary {
 background-color: white;
 border-color: black;
   border-width: 1.5px;
  }
  .btn-primary:hover {
   color: rgb(23, 77, 63);
   border-color: black;
   background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(169, 215, 233, 0.486), #4ca4d348, #1534459b) !important;
  }
</style>