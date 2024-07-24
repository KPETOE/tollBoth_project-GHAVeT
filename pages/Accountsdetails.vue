<template>
    <div class="">
        <v-parallax style="">
            <div class="">
                <br />

                <v-container>
                    <h1 class="mx-auto text-uppercase text-teal-darken-3 text-center" style="font-size: 1.8em">
                        WELCOME TO YOUR FINANCED PLATFORM ALL NECESSARY MEASURES ARE IN
                        PLACE
                    </h1>
                    <p class="text-center font-weight-bold text-teal-darken-3 " style="   font-size: 1.5rem;"> To
                        protect your
                        information.</p>
                    <br>
                </v-container>
                <div class="wrapper">
                    <div class="AccDetails text-center">
                        <v-container>
                            <h1 class="mx-auto text-uppercase text-black text-center" style="font-size: 1.5em">
                                ACCOUNT DETAILS
                            </h1>
                        </v-container>
                        <br />
                        <v-container>
                            <div class="row justify-content-center">
                                <div class="col-md-6" style="text-align: center; ">
                                    <label for="textBox2"
                                        class="form-label mx-auto text-uppercase text-black text-center"
                                        style="font-size: 1.5rem; font-weight: bold">BALANCE</label>
                                    <div class="bawa mx-auto d-flex justify-content-center align-items-center"
                                        style="margin-top: 20px; background-color: rgba(0, 0, 0, 0.1) !important; ">
                                        <h5>GHS 500.00</h5>
                                    </div>
                                </div>

                                <div class="col-md-6 text-center" style="">
                                    <label for="textBox2"
                                        class="form-label mx-auto text-uppercase text-black text-center"
                                        style="font-size: 1.5rem; font-weight: bold">DEDUCTIONS</label>
                                    <div class="bawa mx-auto d-flex justify-content-center align-items-center"
                                        style="margin-top: 20px; background-color: rgba(0, 0, 0, 0.1) !important;">
                                        <h5>GHS 500.00</h5>
                                    </div>
                                </div>
                            </div>
                        </v-container>


                        <br /><br />
                        <br /><br />
                        <br><br>


                        <v-container class="d-flex justify-content-center align-items-center">
                            <div class="col-md-6 text-center" style="">
                                <label for="textBox3" class="form-label mx-auto text-uppercase text-black text-center"
                                    style="font-size: 1.5rem; font-weight: bold">LAST DEPOSIT</label>
                                <div class="lastDep mx-auto d-flex justify-content-center align-items-center"
                                    style="margin-top: 10px; ">
                                    <div class="mb-3 d-flex"   style="padding: 2rem; margin-bottom: 2rem;  background-color: rgba(0, 0, 0, 0.1) !important;">
                                        <input type="text" readonly class="form-control table" id="textBox3"
                                            value="GHS 500.00" />

                                        &nbsp;
                                        <input type="text" readonly class="form-control table" id="textBox4"
                                            value="01/01/2024" />
                                    </div>
                                </div>
                            </div>
                        </v-container>
                    </div>
                </div>
                


                <v-col class=" wrapper  container-fluid full-height d-flex justify-content-center align-items-center"  style="width: 60;">  
                    <v-row class="form-below  wrapper "  style="margin-top: 10px;">  
                        <v-container  style="padding: 2rem;">
                            <v-row justify="space-between" style="text-align: center;">
                                <v-col cols="12" md="6">
                                    <v-btn to="/payment" class="btn btn-primary custom-width font-weight-bold">DEPOSIT
                                        FUNDS</v-btn>
                                </v-col>
                                <v-col cols="12" md="6">
                                    <v-btn class="btn btn-primary custom-width  font-weight-bold ">STATEMENT</v-btn>
                                </v-col>
                            </v-row>
                        </v-container>

                        <br><br>
                        <br />
                        <v-container>
                            <h3 class="mx-auto text-uppercase text-lime-darken-4 text-center block-text"
                                style="font-size: 1em">
                                ALL Funds Are Subject to <br />Financial Management And Money<br />
                                Laundering REGUALATIONS <br />
                                ACT 921 2016
                            </h3>
                        </v-container>
                    </v-row>
                </v-col>
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


.form-below {
    margin-bottom: 1rem;
    /* box-shadow: 0 0 10px rgba(19, 15, 15, 0.562); */

    background-color: rgba(213, 244, 200, 0.575);

  
}



.profile-photo {
    width: 80px;

    height: 80px;

    border-radius: 100%;

    cursor: pointer;
}

.form-label {
    display: block;
    margin-bottom: 5px;

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

.AccDetails {
    width: 80rem;
    border: none;
    /* box-shadow: 0 0 15px rgba(19, 15, 15, 0.562); */
    margin-bottom: 1px;
    text-align: center;
    margin-top: 1px;

   
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;

}

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;


    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

}
</style>
