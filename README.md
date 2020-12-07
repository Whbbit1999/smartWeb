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