// 在没用用到需要具体定义的内容的时候，可以只声明一下'*.vue'就可以
// src/main.d.ts
declare module '*.vue' {

  // TODO: 点击引用能跳转到源文件而不是.d.ts文件
  import { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;

}