<template>
 <div id= "main">
<div id="posts_container" v-for="post in postsList" :key="post.id">
 <div class="post">
        <div class="post_header">
          <div class="icon">
            <img v-bind:src="post.author.iconurl" alt="profile picture" />
          </div>
          <div class="name">
            <p>{{post.author.name}}</p>
          </div>
          <div class="dateTime">
            <p>{{post.datetime}}</p>
          </div>
        </div>
        <div class="picture">
          <img v-bind:src="post.photo.url" alt="post picture" />
        </div>
        <div class="post_text">
          <p>{{post.text}}</p>
        </div>
        <div class="post_bottom">
          <button v-on:click="IncreaseLikes(post) ">
            <img v-bind:src="post.Button.url" alt="like_button" />
            <span class="likes">{{post.Button.likes}}</span>
          </button>
        </div>
 </div>
</div>
</div>
</template>

<script>
export default {
 name: "post_compo",
data: function() {
return {
}},
computed: {
postsList(){
return this.$store.state.postsList
}},
methods: {
IncreaseLikes: function(post) {
 this.$store.commit("IncreaseLikes", post);
 }}}
</script>
<style scoped>
* {
  font-family: "Lato", sans-serif;
}

#main {
  margin: 0;
  padding: 0;
  background-color: rgb(64, 118, 197);
  font-family: "Lato", sans-serif;
  text-align: left;
  font-size: 18px;
  
}

.likes{
 font-weight: bold;
 color: rgb(64, 118, 197);
 margin: 5px;
 font-size: 20px
 
}

#posts_container {
  background-color: white;
  margin: auto;
  width: 62%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post {
  width: 70%;
  border-radius: 1px;
  margin: 10px;
  box-shadow: 5px 5px 20px 3px rgb(151, 151, 151);
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}

.post .post_header {
  display: flex;
  justify-content: space-between;
}

.post .post_header .dateTime {
  flex-grow: 4;
}

.post .post_header .icon img {
  width: 35px;
  height: 35px;
  object-fit: cover;
  border-radius: 50%;
  padding: 10px;
}

.post .post_header .dateTime p {
  text-align: right;
  color: rgb(126, 126, 126);
  padding-right: 10px;
}

.post .picture img {
  width: 100%;
}

.post .post_text p {
  padding: 10px;
}


.post .post_bottom {
  padding: 10px;
}

.post .post_bottom button img {
  width: 20px;
}

.post_header + .post_text {
  font-size: 25px;
}

</style>