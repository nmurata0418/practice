<!--親コンポーネント-->
<template>
    <div>
        <LikeHeader v-slot="slotProps">
            <h2>{{ slotProps}}</h2>
            <h2>みなさん</h2>
            <h3>こんばんは</h3>
            <h3>初めまして</h3>
            <p>よろしくお願いします。</p>
        </LikeHeader>
    </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
    data() {
        return {
            number: 14
        };
    },
    components: {
        LikeHeader
    },
};
</script>