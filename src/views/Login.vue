<template>
<div class="login">
    
    <section>
        <b-field label="Username"
            :label-position="labelPosition"
            type="is-success"
            message="This unsername is available">
            <input class="input is-rounded" v-model="username"/>
        </b-field>

        <b-field label="Password" :label-position="labelPosition">
            <input class="input is-rounded" v-model="password" type="password" password-reveal/>
            <template #message>
            </template>
        </b-field>
          <button class="button is-link is-rounded" @click="handleLogin"> 🌈 Login</button>
    </section>
    </div>
</template>




<script>
export default {
  name: 'Login',
  data:function() {
        return {
            labelPosition: 'on-border',
            username: "",
            password:"",
        };
    },
    methods: {
      handleLogin: function(){
        fetch('https://tweethertm.herokuapp.com/api/token/',{
            method:'post',
            headers:{
                "Content-type": "application/json"
            },
            body:JSON.stringify({
                username: this.username,
                password:this.password,
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.$emit('loggedIn', data)
        })
        }
    }
}
</script>

<style scoped>
.login{
    width:80%;
    margin: 8px auto;
    background: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
}
</style>