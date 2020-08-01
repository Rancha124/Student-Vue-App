<template>
    <div class="card">
        <h3 class="card-header text-center">Hello there mate, go ahead and enter your details</h3>
        <div class="card-body">
            <form @submit="submitForm"> 
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>First Name</label>
                        <input type="text" class="form-control" placeholder="First Name"
                        v-model.trim="$v.firstName.$model" :class="{
                        'is-invalid' :$v.firstName.$error, 'is-valid':!$v.firstName.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.firstName.required">First Name is required</span>
                            <span v-if="!$v.firstName.minLength">First Name must have at least 
                                {{$v.firstName.$params.minLength.min}} Characters</span>
                           <span v-if="!$v.firstName.maxLength">First Name must not have 
                             more than {{$v.firstName.$params.maxLength.max}} Characters</span>
                        </div>
                    </div>

                 <div class="form-group col-md-6">
                        <label>Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name"
                        v-model.trim="$v.lastName.$model" :class="{
                        'is-invalid' :$v.lastName.$error, 'is-valid':!$v.lastName.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastName.required">last Name is required</span>
                            <span v-if="!$v.lastName.minLength">Last Name must have at least 
                                {{$v.lastName.$params.minLength.min}} Characters</span>
                           <span v-if="!$v.lastName.maxLength">Last Name must not have 
                             more than {{$v.lastName.$params.maxLength.max}} Characters</span>
                        </div>
                 </div>
                 <div class="form-group col-md-12">
                        <label>Address</label>
                        <input type="text" class="form-control" placeholder="Address"
                        v-model.trim="$v.address.$model" :class="{
                        'is-invalid' :$v.address.$error, 'is-valid':!$v.address.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.address.required">Address is required</span>
                            <span v-if="!$v.address.minLength">Address must have at least 
                                {{$v.address.$params.minLength.min}} Characters</span>
                           <span v-if="!$v.address.maxLength">Address must not have 
                             more than {{$v.address.$params.maxLength.max}} Characters</span>
                        </div>
                 </div>
                       <div class="form-group col-md-6">
                        <label>Mobile Number</label>
                        <input type="number" class="form-control" placeholder="Mobile Number"
                        v-model.number.lazy="$v.mobileNumber.$model" :class="{
                        'is-invalid' :$v.mobileNumber.$error, 'is-valid':!$v.mobileNumber.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.mobileNumber.required">Mobile Number is required</span>
                            <span v-if="!$v.mobileNumber.numeric">Only Number Please</span>
                        </div>
                       </div>
                        <div class="form-group col-md-6">
                        <label>Gpa</label>
                        <input type="number" class="form-control" placeholder="Gpa"
                        v-model.number.lazy="$v.gpa.$model" :class="{
                        'is-invalid' :$v.gpa.$error, 'is-valid':!$v.gpa.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.gpa.required">Gpa is required</span>
                            <span v-if="!$v.gpa.between">Enter between 0 and 10</span>
                        </div>
                 </div>
                    <div class="form-group col-md-6">
                        <label>City Name</label>
                        <input type="text" class="form-control" placeholder="City Name"
                        v-model.trim="$v.cityName.$model" :class="{
                        'is-invalid' :$v.cityName.$error, 'is-valid':!$v.cityName.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.cityName.required">City Name is required</span>
                            <span v-if="!$v.cityName.minLength">City Name must have at least 
                                {{$v.cityName.$params.minLength.min}} Characters</span>
                           <span v-if="!$v.cityName.maxLength">City Name must not have 
                             more than {{$v.cityName.$params.maxLength.max}} Characters</span>
                        </div>
                 </div>
                  <div class="form-group col-md-6">
                        <label>State Name</label>
                        <input type="text" class="form-control" placeholder="State Name"
                        v-model.trim="$v.stateName.$model" :class="{
                        'is-invalid' :$v.stateName.$error, 'is-valid':!$v.stateName.$invalid}">
                        <div class="invalid-feedback">
                            <span v-if="!$v.stateName.required">State Name is required</span>
                            <span v-if="!$v.stateName.minLength">State Name must have at least 
                                {{$v.stateName.$params.minLength.min}} Characters</span>
                           <span v-if="!$v.stateName.maxLength">State Name must not have 
                             more than {{$v.stateName.$params.maxLength.max}} Characters</span>
                        </div>
                 </div>
                 
                </div>
                <button type="submit" class="btn btn-success">Submit {{submitStatus}}</button>
            </form>
        </div>
    </div>
</template>
<script>
import {required, minLength, maxLength, numeric, between} from 'vuelidate/lib/validators'
import axios from 'axios'

export default {
    name: "AddStudent",
    data(){
        return {
            firstName: '',
            lastName: '',
            address: '',
            mobileNumber: '',
            cityName: '',
            stateName: '',
            gpa: null,
            submitStatus: null
        }
    },
    validations : {
        firstName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(100)
        },
        lastName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(100)
        },
        address: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(100)
        },
        cityName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(100)
        },
        stateName: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(100)
        },
        mobileNumber: {
            required,
            numeric,
            minLength: minLength(8),
            maxLength: maxLength(10)
        },
         gpa: {
            required,
            numeric,
            between : between(1, 10)
        }
    },
    methods : {
        submitForm(e) {
            e.preventDefault()
            console.log("I am here")
            this.$v.$touch()
            if(this.$v.$invalid){
                this.submitStatus = "Fail"
            }
            else{
             this.submitStatus = "Success"
             axios.post(`http://localhost:3000/students`,
            { firstName: this.firstName,
            lastName: this.lastName,
            address: this.address,
            cityName: this.cityName,
            stateName: this.stateName,
            mobileNumber: this.mobileNumber,
            gpa: this.gpa
            }
            )
             console.log(this.firstName);
             this.$router.push("/show-data").catch(()=>{});
            }
        },
        
    }
}
</script>
<style scoped>

</style>