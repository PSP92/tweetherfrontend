<template>
    <b-navbar>
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/main' }" >
            
               <img style=" position:fixed;border-radius:30%; height:auto "

                    src="https://i.ibb.co/DrBtXCr/Tweet-HER1.png"
                    alt="tweetHer pride flag logo"
                >
            </b-navbar-item>
        </template>
          <template #start>
        
            <b-navbar-item class="headcheck" href="#">
             <router-link class="headcheck" :to="{ path: '/userpage' }"> 🧐 Profile</router-link>
                
            </b-navbar-item>
            <b-navbar-dropdown class="headcheck" label="Info">
                <b-navbar-item href="#">
                   <router-link to="/search">🔎 Search</router-link>
                </b-navbar-item>
                <b-navbar-item href="#">
                    <router-link to="/userpage">🐚 Mytweets</router-link>
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                       <router-link to="/signup">✨Sign Up</router-link> 
                    </a>
                    <a class="button is-light">
                      <router-link to="/login" v-bind:URL="URL" v-if="!loggedIn">🔥Login</router-link> 
                    </a>

                     <button class="button is-link" v-if="loggedIn" @click="logout">🥺Logout</button>
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

