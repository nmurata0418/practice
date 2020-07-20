<template>
    <div>
        <slot name="title">デフォルトのタイトル</slot>
        <hr>
        <p>いいねの数</p>
        <slot name="favorite"></slot>
    </div>
</template>

<script>
export default {
    props: ["headerText"]
}
</script>

<style scoped>
div {
    border: 1px solid blue;
}
h1 {
    color: red;
}
</style>