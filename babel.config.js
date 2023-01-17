module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        // useBuiltIns: false
        corejs: 3,
        // useBuiltIns: "usage"
        useBuiltIns: "entry" // 防止有第三方包中用了别的不兼容的api,并需要在主入口引入corejs, regenerator-runtime/runtime
      },
    ],
  ],
};
