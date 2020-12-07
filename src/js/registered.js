class Registered {
  constructor() {
    this.phoneNum = $('#phoneNum');
    this.pwd = $('#pwd');
    this.confirmPwd = $('#confirmPwd');
    this.registered = $('#registered');
    this.arr = [false, false, false];
    // this.toLogin();
    this.init();
  }
  // 注册账号
  init() {

    this.phoneNum.blur(() => {
      const userReg = /^(13[0-9]|15[0123456789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
      if (userReg.test(this.phoneNum.val())) {
        // 提示手机号输入正确，并存入localStorage中
        this.arr[0] = true;
      } else {
        // 提示手机号输入错误
        console.log('手机号输入错误');
        this.arr[0] = false;
      }
    });

    this.pwd.blur(() => {
      const pwdReg = /^\w{6}$/;
      if (pwdReg.test(this.pwd.val())) {
        this.arr[1] = true;
      } else {
        console.log('密码输入错误');
        this.arr[1] = false;
      }
    })

    this.confirmPwd.blur(() => {
      if (this.confirmPwd.val() === this.pwd.val()) {
        this.arr[2] = true;
      } else {
        console.log('两次密码不一致');
        this.arr[2] = false;
      }
    })
    // 点击按钮进行注册和验证
    this.registered.click(() => {
      if (this.arr.indexOf(false) === -1) {
        const username = this.phoneNum.val();
        const pwd = this.pwd.val();
        const rePwd = this.confirmPwd.val();

        // 获取cookie
        let cookieStr = $.cookie('register');
        // 将cookie字符串转换成对象
        let cookieObj = coverStrToObj(cookieStr);
        // 查找cookie中是否有手机号，有的话提示该手机号已被注册
        if (username in cookieObj) {
          console.log('该手机号已被注册');
        } else {
          cookieObj[username] = pwd;
          $.cookie('register', JSON.stringify(cookieObj), { expries: 7, path: '/' })
          this.username = this.pwd = this.rePwd = '';
          location.href = '../pages/login.html'
        }
      }
    })

  }
}

new Registered();


function coverStrToObj(str) {
  if (!str) {
    return {};
  }
  return JSON.parse(str)
}