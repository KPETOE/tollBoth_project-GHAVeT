<template>
    <div class="AccountsDetails">
        <v-parallax style="">
            <div class="accountimg">
                <br />
               
                <v-container>
                    <h1 class="mx-auto text-uppercase text-teal-darken-3 text-center" style="font-size: 1.8em">
                        WELCOME TO YOUR FINANCED PLATFORM ALL NECESSARY MEASURES ARE IN
                        PLACE
                    </h1>
                    <p class="text-center font-weight-bold text-teal-darken-3 " style="   font-size: 1.5rem;"> To protect your
                        information.</p>
                    <br>
                </v-container>
                <v-container>
                    <h1 class="mx-auto text-uppercase text-black text-center" style="font-size: 1.5em">
                        ACCOUNT DETAILS
                    </h1>
                </v-container>
                <br />
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6" style="text-align: center;">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                                style="font-size: 1.5rem; font-weight: bold">BALANCE</label>
                            <div class="bawa mx-auto d-flex justify-content-center align-items-center"
                                style="margin-top: 20px;">
                                <input type="text" class="form-control square-box" id="textBox1"
                                    placeholder="GHS 500.00" />
                            </div>
                        </div>

                        <div class="col-md-6 text-center" style="">
                            <label for="textBox2" class="form-label mx-auto text-uppercase text-black text-center"
                                style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                            <div class="bawa mx-auto d-flex justify-content-center align-items-center"
                                style="margin-top: 20px;">
                                <input type="text" class="form-control square-box" id="textBox1"
                                    placeholder="GHS 500.00" />
                            </div>
                        </div>
                    </div>
                </div>
                <br /><br />
                <br /><br />
                <br><br>
                

                <div class="container d-flex justify-content-center align-items-center">
                    <div class="col-md-6 text-center" style="">
                        <label for="textBox3" class="form-label mx-auto text-uppercase text-black text-center"
                            style="font-size: 1.5rem; font-weight: bold">LAST DEPOSIT</label>
                        <div class="lastDep mx-auto d-flex justify-content-center align-items-center"
                            style="margin-top: 10px;">
                            <div class="mb-3 d-flex">
                                <input type="text" readonly class="form-control table" id="textBox3" value="GHS 500.00" />

                                &nbsp;
                                <input type="text" readonly class="form-control table" id="textBox4"  value="01/01/2024" />
                            </div>
                        </div>
                    </div>
                </div>

                <br><br>
              
                <br><br>

                <div class="container">
                    <v-row justify="space-between" style="text-align: center;">
                        <v-col cols="12" md="6">
                            <button class="btn btn-primary custom-width font-weight-bold">DEPOSIT FUNDS</button>
                        </v-col>
                        <v-col cols="12" md="6">
                            <button class="btn btn-primary custom-width  font-weight-bold ">STATEMENT</button>
                        </v-col>
                    </v-row>
                </div>

                <br><br>
                <br /><br />
                <v-container>
                    <h3 class="mx-auto text-uppercase text-lime-darken-4 text-center block-text" style="font-size: 1em">
                        ALL Funds Are Subject to <br />Financial Management And Money<br />
                        Laundering REGUALATIONS <br />
                        ACT 921 2016
                    </h3>
                </v-container>
            </div>
        </v-parallax>
    </div>
</template>


<script setup>


const showSubscriberDetails = () => {
    // Emit the 'profilePhotoClick' event to be handled internally
    emit("profilePhotoClick");
    // Add logic to show subscriber details here
    console.log("Show subscriber details");
};


</script>

<style>


.square-box {
    height: 80px;
    width: 50%;
    margin: 0 auto;

    border-top-left-radius: 15px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 15px;
}

.accountimg {
   /* background: rgba(255, 255, 255, 0.8) !important;  Adjust the alpha value as needed */
    background-color: rgb(127, 203, 203);
}

body {
    background: #b4bfc1;
}

.profile-photo {
    width: 80px;

    height: 80px;

    border-radius: 100%;

    cursor: pointer;
}

.form-label {
    display: block;
    /* Make the label a block element to position it above the button */
    margin-bottom: 5px;
    /* Add some margin between the label and the button */
}

.custom-width {
    width: 150px;
    transition: background-color 0.3s ease;
  
   
    background: linear-gradient(to right, rgba(75, 156, 162, 0.331), rgba(135, 207, 235, 0.486), #31759a48, #1534459b) !important;
    color: #fff;
    border: 1px solid #040a11;
}



.block-text {
    display: block;
}





</style>
