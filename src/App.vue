<template>
<b-app>
  <div id="app">
   <Header v-bind:URL="URL" v-bind:loggedIn="loggedIn" @logout="logout"/>
    <router-view @loggedIn="login($event)"/>
  
  </div>
<Footer/>
  </b-app>
  
</template>




<script>
import Header from'./components/Header.vue';
import Footer from'./components/Footer.vue';




export default {
name:'App',
components: {
Footer,
Header,
},
data: function(){
  return{
    loggedIn: false,
    tokens:{},
    URL:'https://tweethertm.herokuapp.com'
  }
},
methods:{
  login: function() {
    console.log('event heard')
    this.loggedIn = true,
  
    this.$router.push({ path: 'Main'})
  },
  logout:function(){
    this.loggedIn = false;
    this.tokens = {};
  }
}
};
</script>








<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased; */
  /* -moz-osx-font-smoothing: grayscale; */
  /* text-align: center; */
  /* color: #2c3e50; */
  /* background-color: #ffd6a5; */
}

#nav {
  padding: 30px;
  
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
