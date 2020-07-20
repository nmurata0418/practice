<!--親コンポーネント-->
<template>
  <div>
    <!-- <LikeHeader headerText="トータルのいいね"></LikeHeader>
    <h2>{{ number / 2 }}</h2> -->
    <LikeHeader>
      <template v-slot:title><!--名前付きスロット-->
        <h1>トータルの良いね数</h1>
      </template>
      <template v-slot:favorite>
        <h2>{{number}}</h2>
      </template>
    </LikeHeader>
    <LikeNumber :total-number="number" @my-click="incrimentNumber"></LikeNumber>
    <LikeNumber :total-number="number"></LikeNumber>
    <!-- <LikeNumber :total-number="number" test-props="test"></LikeNumber> -->
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader";

export default {
  data() {
    return {
      number: 14
    };
  },
  components: {
    LikeHeader
  },
  methods: {
    increment() {
      incrementNumber(value) {
        this.number = value
      }
    }
  }
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