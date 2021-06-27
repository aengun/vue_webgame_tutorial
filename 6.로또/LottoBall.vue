<template>
  <div class="ball" :style="styleObject">{{ number }}</div>
</template>

<script>
export default {
  name: 'LottoBall',
  // props: ['number'], //아래와 같음
  props: {
    number: Number,
  },
  // data() {
  //   let background;
  //   if (this.number <= 10) {
  //     background = 'red';
  //   } else if (this.number <= 20) {
  //     background = 'orange';
  //   } else if (this.number <= 30) {
  //     background = 'yellow';
  //   } else if (this.number <= 40) {
  //     background = 'green';
  //   } else {
  //     background = 'blue';
  //   }
  //   return {
  //     background,
  //   };
  // },
  computed: {
    //기존 값으로 계산해주는것이므로 computed로 하는 것이 낫다
    styleObject() {
      let background;
      if (this.number <= 10) {
        background = 'red';
      } else if (this.number <= 20) {
        background = 'orange';
      } else if (this.number <= 30) {
        background = 'yellow';
      } else if (this.number <= 40) {
        background = 'green';
      } else {
        background = 'blue';
      }
      return {
        background,
      };
    },
  },
};
</script>

<style scoped>
.ball {
  display: inline-block;
  border: 1px solid black;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
  text-align: center;
  margin-right: 20px;
}
</style>
