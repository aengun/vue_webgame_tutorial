// import Vue from 'vue';

// import ResponseCheck from './ResponseCheck';

// new Vue(ResponseCheck).$mount('#root'); //$mount : el의 역할

import Vue from 'vue';
import RockScissorsPaper from './RockScissorsPaper';

new Vue({
  render: (createElement) => createElement(RockScissorsPaper),
}).$mount('#root');
