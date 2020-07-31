<template>
    <div>
        <h3>Users</h3>
        <button @click="toHome">Homeのページに行く</button>
        <hr>
        <h1>User No. {{ $route.params.id }}</h1>
    </div>
</template>

<script>
export default {
    methods: {
        toHome() {
            this.$router.push('/');
        }
    }
}
</script>