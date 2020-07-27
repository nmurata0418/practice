<template>
    <div>
        <slot :user="user" :text="text" >デフォルトのタイトル</slot>
        <slot :pass="pass"></slot>
        <hr>
        <p>いいねの数</p>
        <slot></slot>
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
            },
            pass: {
                pass: "password"
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