<!--コードが増えてきたため分割(見直し用)-->

<!--親コンポーネント-->
<template>
  <div>
    <!-- <LikeHeader headerText="トータルのいいね"></LikeHeader>
    <h2>{{ number / 2 }}</h2>
    <LikeHeader>
      <template v-slot:title>
        <h1>トータルの良いね数</h1>
      </template>
      <template v-slot:favorite>
        <h2>{{ number }}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrementNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <LikeNumber :total-number="number" test-props="test"></LikeNumber> -->
    <LikeHeader>
      <h2>みなさん</h2>

      <template v-slot:title="slotProps">
        <h3>こんばんは</h3>
        <h2>{{ slotProps.user.firstName }}</h2>
        <h2>{{ slotProps.text.text }}</h2>
      </template>

      <h3>初めまして</h3>

      <template v-slot:favorite>
        <p>よろしくお願いします。</p>
      </template>
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

<!--
<style scoped>
div {
    border: 1px solid blue;
}
h1 {
  color: red;
}
</style>
-->