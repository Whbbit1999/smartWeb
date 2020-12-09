class Registered {
  constructor() {
    this.phoneNum = $('#phoneNum');
    this.pwd = $('#pwd');
    this.confirmPwd = $('#confirmPwd');
    this.registered = $('#registered');
    this.wrong_phoneNum = $('.username span')
    this.wrong_pwd = $('.passwoed span')
    this.wrong_confirmPwd = $('.repwd span')
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
        this.wrong_phoneNum.css('display', 'none')
        this.arr[0] = true;
      } else {
        // 提示手机号输入错误
        this.wrong_phoneNum.css('display', 'block')
        this.arr[0] = false;
      }
    });

    this.pwd.blur(() => {
      const pwdReg = /^\w{6}$/;
      if (pwdReg.test(this.pwd.val())) {
        this.arr[1] = true;
        this.wrong_pwd.css('display', 'none')
      } else {
        this.wrong_pwd.css('display', 'block')
        this.arr[1] = false;
      }
    })

    this.confirmPwd.blur(() => {
      if (this.confirmPwd.val() === this.pwd.val()) {
        this.wrong_confirmPwd.css('display', 'none')
        this.arr[2] = true;
      } else {
        this.wrong_confirmPwd.css('display', 'block')

        this.arr[2] = false;
      }
    })
    // 点击按钮进行注册和验证
    this.registered.click(() => {
      if (this.arr.indexOf(false) === -1) {
        this.registered.css('background', "#5c89f2")
        const username = this.phoneNum.val();
        const pwd = this.pwd.val();
        const rePwd = this.confirmPwd.val();
        // 获取cookie
        let cookieStr = $.cookie('register');
        // 将cookie字符串转换成对象
        let cookieObj = coverStrToObj(cookieStr);
        // 查找cookie中是否有手机号，有的话提示该手机号已被注册
        if (username in cookieObj) {
          this.wrong_user.html('该手机已被注册')
          this.wrong_phoneNum.css('display', 'block')
        } else {
          this.wrong_phoneNum.css('display', 'none')
          cookieObj[username] = pwd;
          $.cookie('register', JSON.stringify(cookieObj), { expries: 7, path: '/' })
          this.username = this.pwd = this.rePwd = '';
          location.href = '../pages/login.html'
        }
      } else {
        this.wrong_phoneNum.css('display', 'block');
        this.wrong_phoneNum.html('请输入手机号')
        this.wrong_pwd.css('display', 'block')
        this.wrong_pwd.html('请输入密码')
        this.wrong_confirmPwd.css('display', 'block')
        this.wrong_confirmPwd.html('请确认密码')
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