<template>
  <div class="home">
    <post_compo  :postsList="postsList"> </post_compo>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
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
};
</script>
