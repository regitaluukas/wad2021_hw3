<template>
  <div id="app">
    <div id="nav">
       <router-link :to="{ name: 'posts'}"> Home </router-link>|
       <router-link :to="{ name: 'contactus'}"> Contact us </router-link>|
       <router-link :to="{ name: 'login'}"> Log out </router-link>
    </div>
  </div>
</template>

// <script>
// export default {
//  name: "footerVue",
//     data() {
//         return {
//             Log: 'home title'
//         }
//       },
// }
// </script>