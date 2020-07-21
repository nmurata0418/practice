<template>
    <div>
        <slot name="title" :user="user" :text="text" text2="テキスト" :aiueo="test">デフォルトのタイトル</slot>
        <slot></slot>
        <slot name="favorite"></slot>
        <hr>
        <p>いいねの数</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                firstName: "Jack",
                lastName: "Donald"
            },
            text: {
                text: "あいうえお"
            }
        };
    }
};
</script>

<style scoped>
div {
    border: 1px solid blue;
}
h1 {
    color: red;
}
</style>