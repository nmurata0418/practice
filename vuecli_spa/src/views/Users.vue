<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページに行く</button>
        <br>
        <router-link to="/users/posts">ユーザー1</router-link>
        <router-link to="/users/2">ユーザー2</router-link>
        <hr>
        <h1>User No. {{ id }}</h1>
    </div>
</template>

<script>
export default {
    props: ["id"],
    // watch: {
    //     $route(to, from) {
    //         console.log(to);
    //         console.log(from);
    //     }
    // },
    methods: {
        toHome() {
            this.$router.push('/');
        }
    }
};
</script>