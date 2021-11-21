<template>
  <div class="home">
    <div id="posts_container">
      <div class="post">
    <button class="reset-button" v-on:click="ResetLikes">RESET LIKES</button>
      </div>
    </div>
    <post_compo  :postsList="postsList"> </post_compo>
  </div>
</template>

<script>

import post_compo from "@/components/post_compo.vue";


export default {
  name: "posts",
  components: {
    post_compo,
  },
  props: ["postsList"],
 data(){
 return{
 }},
 methods: {
ResetLikes: function() {
 this.$store.commit("ResetLikes")
 }}
};

</script>

<style scoped>
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

.reset-button{
  font-size: 20px;
}

.reset-button:hover{
  background-color: rgba(64, 117, 197, 0.226);
}
</style>
