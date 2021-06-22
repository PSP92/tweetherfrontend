<template>
<div class="box">
  <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <li v-for="tweet of tweets" v-bind:key="tweet.id">{{tweet.img}} {{tweet.body}}</li>
      </div>
    </div>
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
        // authorization: `Bearer ${tokens.access}`
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
/* .box{
  background-color: #ffd6a5;
} */
/* .icon.is-small{
  background-color: #ffadad;
} */
</style>