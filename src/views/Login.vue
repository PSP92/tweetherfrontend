<template>
    <section>
        <b-field label="Username"
            :label-position="labelPosition"
            type=""
            message="">
            <b-input value="" ></b-input>
        </b-field>

        <b-field label="Password"
            :label-position="labelPosition"
            type="i">
            <b-input value="" type="password" ></b-input>
            <template #message>
            </template>
        </b-field>
    </section>
</template>




<script>
export default {
  name: 'Login',
  data() {
        return {
            labelPosition: 'on-border'
        }
    }
}
</script>
