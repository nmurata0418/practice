<template>
    <!--<p>いいね({{ number }})</p> ※Template内は一つのTagだけOK(div内に複数まとめればOK以下参照)-->
    <div>
        <p>いいね({{ number / 2 }})</p>
        <button @click="increment">+1</button>
    </div>
</template>

<script>
    export default {
    props: {
        totalNumber: {
            type: Number,
            default: 10
        }
    },
    computed: {
        halfNumber() {
            return this.totalNumber /2;
        }
    },
    methods: {
        increment() {
            this.number += 1;
        }
    }
};
</script>

<style scoped>
div {
    border: 1px solid red;
}
</style>
