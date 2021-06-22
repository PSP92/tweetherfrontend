<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item1 tag="router-link" :to="{ path: '/' }">
               <img
                    src="https://i.ibb.co/DrBtXCr/Tweet-HER1.png"
                    alt="tweetHer pride flag logo"
                >
            </b-navbar-item1>
        </template>
          <template #start>
        
            <b-navbar-item class="foo" href="#">
             <router-link clas="foo" :to="{ path: '/userpage' }">Profile</router-link>
                
            </b-navbar-item>
            <b-navbar-dropdown class="foo" label="Info">
                <b-navbar-item href="#">
                   <router-link to="/about">About</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="/contact">Contact</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                       <router-link to="/signup">Sign Up</router-link> 
                    </a>
                    <a class="button is-light">
                      <router-link to="/login" v-bind:URL="URL" v-if="!loggedIn">Login</router-link> 
                    </a>

                     <button class="button is-link" v-if="loggedIn" @click="logout"> Logout</button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>





<script> 
export default {
    name:'Header',
    props:['URL','loggedIn'],
    methods:{
        logout: function(){
            this.$emit('logout')
        }
    }
}
</script>


<style scoped>
b-navbar-item1{
    justify-content: center;
    position: fixed;
}
img {
border-radius:30% ;
width: 55px;
height: 55px;
padding: 5px;
}
a.button.is-primary {
    background:#d0d1ff;
    color:black;
    }
a.button.is-light{
    background:#c8e7ff;
    color:black;
    }
.button.is-link{
      background:#caffbf;
    color:black;
}
</style>

