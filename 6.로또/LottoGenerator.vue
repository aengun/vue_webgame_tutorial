<template>
  <div>
    <div>당첨 숫자</div>
    <div id="결과창">
      <lotto-ball v-for="ball in winBalls" :key="ball" v-bind:number="ball"></lotto-ball>
    </div>
    <div>보너스</div>
    <lotto-ball v-if="bonus" :number="bonus"></lotto-ball>
    <button v-if="redo" @click="onClickRedo">한번 더!</button>
  </div>
</template>

<script>
import LottoBall from './LottoBall';

function getWinNumbers() {
  console.log('getWinNumbers');
  const candidate = Array(45)
    .fill()
    .map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
  }

  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber];
}

const timeouts = []; // 타임아웃을 clear해주기 위한 변수,, 메모리 누수 방지 => beforeDestroy에서 설정

export default {
  components: {
    // 'lotto-ball': LottoBall,
    LottoBall, //이렇게만 써도됨(카멜케이스와 호환되는 경우 )
  },
  data() {
    return {
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false,
    };
  },
  computed: {},
  methods: {
    onClickRedo() {
      this.winNumbers = getWinNumbers();
      this.winBalls = [];
      this.bonus = null;
      this.redo = false;
      // this.showBalls(); // ==> watch로 이동
    },
    showBalls() {
      for (let i = 0; i < this.winNumbers.length - 1; i++) {
        timeouts[i] = setTimeout(() => {
          this.winBalls.push(this.winNumbers[i]);
        }, (i + 1) * 500);
      }
      timeouts[6] = setTimeout(() => {
        this.bonus = this.winNumbers[6];
        this.redo = true;
      }, 3500);
    },
  },
  mounted() {
    this.showBalls();
  },
  beforeDestroye() {
    timeouts.forEach(t => {
      clearTimeout(t);
    });
  },
  watch: {
    // watch는 웬만하면 쓰지 마라. 실행흐름 헷갈림
    // 감시하고싶은 데이터명으로 함수를 만든다.
    // winBalls(val, oldVal) {
    //   console.log(val, oldVal);
    //   if (val.length === 0) {
    //     this.showBalls();
    //   }
    // },
    bonus(val, oldVal) {
      console.log(val, oldVal);
      if (this.bonus === null) {
        this.showBalls();
      }
    },
  },
};
</script>

<style scoped></style>
