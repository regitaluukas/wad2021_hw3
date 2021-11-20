<template>
  <div class="home">
    <div id="posts_container">
      <div class="post">
    <button v-on:click="ResetLikes">Reset likes</button>
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
