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
        
        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                       <router-link to="/signup">Sign Up</router-link> 
                    </a>
                    <a class="button is-light">
                      <router-link to="/login">Login</router-link> 
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>





<script> 
export default {
    name:'Header',
     props: {
    msg: String
  }
}
</script>
<style scoped>
b-navbar-item1{
    justify-content: center;
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
</style>

