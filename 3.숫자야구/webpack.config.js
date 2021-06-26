// 웹팩 쓰는 이유 : 스크립트가 너무 많아서 하나로 합치기 위함
// 많은 스크립트 파일 중 가장 대표가 되는 것 : entry
// module : 웹팩의 핵심 >> rules:어떻게 합칠지, 처리할 지 정함

const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    //main.js : 가장 중요한 파일, 이름은 맘대로
    //app : 하나로 합쳐질 파일, 모든 스크립트 파일은 app.js로 통합됨
    // app: './main.js', >> path모듈로 수정
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
    ],
  },
  plugins: [new VueLoaderPlugin()],
  output: {
    filename: '[name].js', //'app.js'라고 해도 됨
    // path: './dist', // 절대경로 아니면 오류남 >> path 모듈로 해결
    path: path.join(__dirname, 'dist'),
  },
};
