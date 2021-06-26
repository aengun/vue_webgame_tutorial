<template>
  <div>
    <h1>{{ result }}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" maxlength="4" v-model="value" />
      <button type="submit">입력</button>
    </form>
    <div>시도 : {{ tries.length }}</div>
    <ul>
      <li v-for="t in tries" v-bind:key="t.try">
        <div>{{ t.try }}</div>
        <div>{{ t.result }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
const getNumber = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const arr = [];
  for (let i = 0; i < 4; i++) {
    const chosen = candidates.splice(
      Math.floor(Math.random() * (9 - i)),
      1,
    )[0];
    arr.push(chosen);
  }
  return arr;
};
export default {
  data() {
    return {
      answer: getNumber(), //ex [1,5,3,4]
      value: '', //시도 수
      result: '', //입력
      tries: [], //결과
    };
  },
  methods: {
    onSubmitForm() {
      if (this.value === this.answer.join('')) {
        // 정답인 경우
        this.tries.push({
          try: this.value,
          result: '홈런',
        });
        this.result = '홈런';
        alert('게임을 다시 실행합니다.');
        this.value = '';
        this.tries = [];
        this.$refs.answer.focus();
      } else {
        if (this.tries.length >= 9) {
          this.result = `10번 넘게 틀려서 실패! 정답은 ${this.answer.join(
            ',',
          )}였습니다!`;
          alert('게임을 다시 시작합니다.');
          this.value = '';
          this.answer = getNumber();
          this.tries = [];
          this.$refs.answer.focus();
        }
        let strike = 0;
        let ball = 0;
        const answerArr = this.value.split('').map(v => parseInt(v));
        for (let i = 0; i < answerArr.length; i++) {
          if (answerArr[i] === this.answer[i]) {
            //자리, 숫자 모두 정답
            strike++;
          } else if (this.answer.includes(answerArr[i])) {
            //숫자만정답
            ball++;
          }
        }
        this.tries.push({
          try: this.value,
          result: `${strike} 스트라이크, ${ball} 볼 입니다.`,
        });
        this.value = '';
        this.$refs.answer.focus();
      }
    },
  },
};
</script>

<style></style>
