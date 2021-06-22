<template>
<footer class="navbar footer">
  <div class="content has-text-centered">
    <p>  
    <router-link to="/main">Home<i class="fas fa-rainbow"></i></router-link>
    </p>
    <p>
    <router-link to="/search">Search<i class="fas fa-rainbow"></i></router-link>
    </p>
    <p>
    <router-link to="/notifications">Notifications<i class="fas fa-rainbow"></i></router-link>
    </p>
    <p>
    <router-link to="/profile">Profile<i class="fas fa-rainbow"></i></router-link>
    </p>
  </div>
</footer>
</template>


<style>
.content {
display: flex;
flex-grow: 1;
justify-content: space-between;
height: 0px;
}
.navbar.footer {
  background-color: #fffffc;
  padding-top: 0px;
  color: #a0c4ff;
  overflow: hidden;
  position: fixed;
  bottom: -50px;
  width: 100%;
  margin-top: 10px;
  position: fixed;
 
}

/* Style the links inside the navigation bar */
.navbar.footer a {
  float: left;
  display: block;
  color: #a0c4ff;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Change the color of links on hover */
.navbar.footer a:hover {
  background-color: #a0c4ff;
  color: black;
}

/* Add a color to the active/current link */
.navbar.footer a.active {
  background-color: #04AA6D;
  color: #a0c4ff;
}
</style>


<script> 
export default {
name: 'Footer'
}
</script>







<style>

</style>



