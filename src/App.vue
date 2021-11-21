
<template>
<body>
  <div id="app">
    <header-vue></header-vue>
    <router-view />
  </div>
  <footerVue></footerVue>
</body>
</template>

<script>
import footerVue from "@/components/footerVue.vue";
import headerVue from "@/components/headerVue.vue";
export default {
  components: {
    "footerVue": footerVue,
    "headerVue": headerVue,
  },
 data(){
 return{
 }},
 methods: {
ResetLikes: function() {
 this.$store.commit("ResetLikes")
 }}
};

</script>

<style lang="scss">

body {
    border: none !important;
    margin: 0px !important;
    padding: 0 !important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: rgb(64, 118, 197);
    }
  }
}
</style>
