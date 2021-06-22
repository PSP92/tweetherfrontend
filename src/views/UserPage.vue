<template>
   <div class="userprofile">
             <li v-for="tweet of tweets" v-bind:key="tweet.id">
        <hr />
        <div class="box">
          <div class="columns">
            <div class="column is-one-fifth is-narrow-mobile">
              <figure class="image">
                <img :src="tweet.img" alt="Image" />
              </figure>
            </div>
            <div class="column is-two-fifths is-narrow-mobile">
              <h2>
                {{ tweet.body }}
              </h2>
              <p style="text-align: left">
                {{ tweet.likes }} 
              </p>
                <b-field label="Img">
                  <b-input v-model="img" type="text"></b-input>
                </b-field>
                  <b-field label="likes">
                  <b-input v-model="likes" type="integer"> </b-input>
                </b-field>
                <b-field label="Body">
                  <b-input
                    v-model="body"
                    maxlength="300"
                    type="textarea"
                  ></b-input>
                </b-field>
                <b-button class="button is-rounded" v-on:click="editItem" type=""> Submit </b-button>

                <button class="button is-rounded" v-on:click="deleteItem()" v-bind:id="tweet.id"> Delete </button>

                <button class="button is-rounded" v-on:click="create()"> Add </button>
             <button  class="button is-rounded" v-on:click="editSelect(tweet)" v-bind:id="tweet.id"> Edit </button>

              </div>
            </div>
            <!-- <div class="column is-two-fifths is-narrow-mobile"> -->
               <!-- <button  class="button is-rounded" v-on:click="editSelect(tweet)" v-bind:id="tweet.id"> Edit </button> -->
            <!-- </div> -->
          </div>
      </li>
    </div>
  
</template>

<script>



export default {
  name: 'UserPage',
  components: {
    
  },
  data:function(){
      return {
          body:"",
          img:"",
          likes: 0,
          tags: [],
          tweets:[],
          id:"",

      }
  },
  methods:{
      before: function() {
    console.log('start')
    fetch('https://tweethertm.herokuapp.com/tweets/',{
      method: 'get',
      headers: {

      }
    })
    .then(response => response.json())
    .then(data => {
      this.tweets = data
    })
},
    create: function() {
        console.log("check", this.body, this.img, this.likes)
      fetch("https://tweethertm.herokuapp.com/tweets/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          'Accept' : 'application/json',

        },
        body: JSON.stringify({
          body: this.body,
          img: this.img,
          likes: this.likes
        //   tags: this.tags,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.body = "";
          this.img = "";
          this.likes = 0;
          
      });
    },
     editItem: async function() {
      //  const id = event.target.id
      console.log(this.id);
      let upc = fetch(
        "https://tweethertm.herokuapp.com/tweets/" + this.id + "/",
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
          body: this.body,
          img: this.img,
          likes: this.likes,
          tags: this.tags,
          }),
        }
      );
      console.log(upc);
      this.body = "";
      this.img = "";
      this.likes = 0;
      this.before();
    },
    deleteItem: function() {
      const id = event.target.id;
      console.log("delete", id);
      fetch("https://tweethertm.herokuapp.com/tweets/" + id + "/", {
        method: "delete",
        headers: {
        },
      }).then(() => {
          this.body = "";
          this.img = "";
          this.likes = 0;
          this.before();
      });
    },
     editSelect: function(item) {
     console.log("sart", item)
      this.body = item.body;
      this.img = item.img;
      this.likes = item.likes;
      this.tags= item.tags;
      this.id = item.id;
    },
  },

  beforeMount(){
  this.before()
  },
}
</script>


<style scoped>
button.is-rounded {
    background: #fdffb6;
}
li{
    list-style: none;
}
</style>