# smartWeb
仿写锤子商城


## 编写首页的头部
粘性定位 position: sticky;

## 首页的底部

:nth-of-child的使用


## 登录页和注册页
盒阴影
```
内阴影： box-shadow: inset
```

单选框 

> 登录页和注册页需要手机号注册和登录，稍加改造，使其变为本地注册和登录。简化流程（手机号登录和注册不会写，发送验证码？），以后可以进行重构和优化。


## 首页
### 网格布局
```
父级设置网格布局
display: grid;
grid-template-columns: 4; //水平分几列
grid-template-rows : 2; //垂直分几行、
grid-template-areas : "a a b " "c d e" //划分网格区域

子设置grid-area
grid-area : a ;//设置项目属性

```

### 首页jquery插件的使用
#### 轮播图

#### 导航条下拉菜单


## 用户登录和注册
登录和注册信息放置于cookie中，在注册时查看数据中是否具有一样的电话号，如果有，提示用户该手机号已被注册。
### 登录
先获取cookie中的数据，判断数据中的是否有用户名，如果没有提示用户用户名不存在。如果有，判断密码思否正确。

## 1208任务
登录注册细节：将错误信息定位到输入框后，进行提示


## 首页导航条下拉显示详情
使用jquery和css3进行搭建

## css实现溢出隐藏
```css
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```