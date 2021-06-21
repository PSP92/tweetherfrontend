<template>
    <section>
        <b-field label="Chosen Name" :label-position="labelPosition">
            <b-input value=""></b-input>
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
            <b-input value=""></b-input>
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
    </section>
</template>

<script>
export default {
  name: 'Signup',
    data() {
        return {
            labelPosition: 'on-border'
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