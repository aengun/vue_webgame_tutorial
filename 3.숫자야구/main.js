import Vue from 'vue';

import NumberBaseball from './NumberBaseball';

//vue 인스턴스 만들기
//컴포넌트는 numberbaseball.vue에서 만듦
new Vue(NumberBaseball).$mount('#root'); //$mount : el의 역할
