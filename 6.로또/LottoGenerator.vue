<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" number="5"><lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus"></lotto-ball>
    <button v-if="redo">한번 더!</button>
  </div>
</template>

<script>
import LottoBall from './LottoBall.vue';
export default {
  components: { LottoBall },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {},
  beforeDestroye() {},
  watch: {},
};
</script>

<style scoped></style>
