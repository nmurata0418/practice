<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    <nav>
      <router-link
        to="/"
        active-class="link--active"
        exact
        class="link"
      >Home</router-link>
      <router-link
        to="/users"
        active-class="link--active"
        class="link"
      >Users</router-link>
    </nav>
    <router-view></router-view>
    <!--<Home></Home>-->
  </div>
</template>

<style scoped>
  .link {
    margin-right: 10px;
  }

  .link--active {
    font-size: 20px;
    }
</style>
<script>
// import Home from "./views/Home.vue";
// export default {
//   components: {
//     Home
//   },
// }
</script>
