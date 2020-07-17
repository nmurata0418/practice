<template>
  <div>
    <LikeHeader></LikeHeader>
    <h2>{{ number / 2 }}</h2>
    <LikeNumber></LikeNumber>
    <LikeNumber :number="totalNumber"></LikeNumber>
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
  }
};
</script>

<style scoped>
div {
    border: 1px solid blue;
}
</style>