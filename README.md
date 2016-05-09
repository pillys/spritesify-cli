# spritesify

  png 图标自动合并工具

## 安装

```
npm install spritesify-cli -g
```

## 基本的目录结构

```
[运行目录]
  ├── spritesify/
  │     ├── 40~icons40/
  │     │   ├── 1.png
  │     │   ├── 2.png
  │     │   └── 3.png
  │     └── ~normal/
  │         ├── 4.png
  │         ├── 5.png
  │         ├── 6.png
  │         └── 7.png
  └── common.css
```

* 创建一个名为 ``spritesify`` 的目录
* 在目录 ``spritesify`` 中, 子目录以 ``(size)~(class)`` 的形式命名

左侧 ``size`` 表示 png 图片的尺寸，右侧是生成的 css 中对应的 class 名称

如果你有一组相同尺寸的图标，推荐设置 ``size``，这样可以使你的图片结构更加清晰，例如：

``16~icona`` 表示生成的图片是 16 像素序列的 ``icona.png``，对应的 class 为 ``.icona-*** {}``

如果你的图片尺寸不固定，那么 ``size`` 可以省略（或设置为 0），只设置 ``class`` 即可，如：

``~pica`` 或 ``0~picb``

因此：

* 40*40 的 png 图标放入 ``40~somename`` 目录中
* 其它不同尺寸的图标放入 ``~othername`` 目录中

当使用 ``spritesify`` 编译时，将会生成 icona.png / pica.png.

## 用法

```
spritesify <pngSourcePath> -o <cssPath> -u <httpUrl>
```

* pngSourcePath：运行目录（指 ``spritesify/`` 所在的父级目录）
* cssPath：索要生成或合并的 css 文件路径，如果不需要写入 css，该项请传入 ``''``
* httpUrl：需要设置的 ``http`` 全路径，如果不需要全路径，该项传入 ``''``

## HTML 用法
```html
<span class="normal normal-4"></span>
<span class="icons40 icons40-1"></span>
```

## 示例

### 合并小图标，并写入 ./common.css

命令:

```js
spritesify ./ -o ./common.css
```

结果: 

```html
[run]
  ├── spritesify
  │     ├── 40~icons40
  │     │   ├── 1.png
  │     │   ├── 2.png
  │     │   └── 3.png
  │     └── ~normal
  │         ├── 4.png
  │         ├── 5.png
  │         ├── 6.png
  │         └── 7.png
  ├── common.css
  ├── icons40.png
  └── normal.png
```

打开 ./common.css, 可以看到生成的图标css已经插入到文件中：

```css
/*====spritesify:normal====*/
.normal {
  display: inline-block;
  background-image: url("./normal.png");
  background-repeat: no-repeat;
  background-size: 370px 300px;
  vertical-align: middle;
  overflow: hidden;
}
.normal-4 {
  width: 200px;
  height: 300px;
  background-position: 0px 0px;
}
.normal-6 {
  width: 20px;
  height: 200px;
  background-position: -200px 0px;
}
.normal-5 {
  width: 150px;
  height: 80px;
  background-position: -220px 0px;
}
/*====/spritesify:normal====*/
/*====spritesify:icons40====*/
.icons40 {
  display: inline-block;
  background-image: url("./icons40.png");
  background-repeat: no-repeat;
  background-size: 120px 40px;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  overflow: hidden;
}
.icons40-1 {
  background-position: 0px 0px;
}
.icons40-2 {
  background-position: -40px 0px;
}
.icons40-3 {
  background-position: -80px 0px;
}
/*====/spritesify:icons40====*/
```

在 HTML 中，我们可以这样使用:

```html
<span class="normal normal-4"></span>
<span class="icons40 icons40-1"></span>
```

### 合并，并设置图片的 url 地址为 http://www.site.com

命令:

```js
spritesify ./ -o ./common.css -u http://www.site.com
```

结果：

```css
...
  background-image: url("http://www.site.com/normal.png");
...
```


## License

  [MIT](LICENSE)