<template>
    <section>
        <b-field label="Chosen Name" :label-position="labelPosition">
            <b-input value="" type="chosenname"></b-input>
        </b-field>

        <b-field label="Email"
            :label-position="labelPosition"
            type=""
            message="">
            <b-input type="email"
                value=""
                >
            </b-input>
        </b-field>

        <b-field label="Username"
            :label-position="labelPosition"
            type=""
            message="">
            <b-input value="" type="username"></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="">
            <b-input value="" type="password" ></b-input>
            <template #message>
                <div></div>
                <div></div>
            </template>
        </b-field>
        <b-field label="Birthday" :label-position="labelPosition">
            <b-datepicker
                placeholder="Click to select..."
                icon="calendar-today"
                trap-focus>
            </b-datepicker>
        </b-field>
         <button>Sign Up</button>
    </section>
</template>

<script>
export default {
  name: 'Signup',
    data: function() {
        return {
            labelPosition: 'on-border',
            // chosenname: "",
            // email:"",
            // username:"",
            // password:"",
            // birthday:""
        }
    }
}
</script>
<style>
.label {
margin-top:20px;
}
.input{
  margin-top: 20px; 
  }
</style>