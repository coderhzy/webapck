## babel-loader和babel使用
```shell
# 转化块级作用域
npm i @babel/plugin-transform-block-scoping
npx babel ./src --out-dir ./dist --plugins=@babel/plugin-transform-block-scoping


# 转化箭头函数
npm i plugin-transform-arrow-functions
npx babel ./src --out-dir ./dist --plugins=@babel/plugin-transform-block-scoping,plugin-transform-arrow-functions

# babel预设
npm i @babel/preset-env
npx babel ./src --out-dir ./dist --plugins=@babel/preset-env
```


## babel底层原理
![](https://imgsbed-1301560453.cos.ap-shanghai.myqcloud.com/blog/20230117153206.png)