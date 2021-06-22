<template>
<div class="box">
  <article class="media">
    <ul>
     <li v-for="tweet of tweets" v-bind:key="tweet.id">
    <div>
      <div>
      {{tweet.body}}

        <figure class="image is-64x64">
        <img :src="tweet.img" alt="Image">
      </figure>
         <button class="button is-rounded"> ❤️  {{tweet.likes}}</button>
         
      </div>
    </div>
     </li>
    </ul>
  </article>
</div>
</template>

<script>

export default {
  name: 'Main',
  data: function() {
    return{
      tweets:[]
    }
  },
  methods : {
create: function() {
    console.log('start')
    fetch('https://tweethertm.herokuapp.com/tweets/',{
      method: 'get',
      headers: {
      }
    })
    .then(response => response.json())
    .then(data => {
      this.tweets = data
      console.log(this.tweets)
    })
},
},
  
beforeMount(){
  this.create()
}
}

</script>

<style scoped>

li{
  list-style: none;
  padding-top: 4em;
}
.button.is-rounded{
  background-color: #caffbf;
}
img{
  padding: 15px;
}
</style>