class Login {
  constructor() {
    this.phoneNum = $('#phoneNum');
    this.pwd = $('#pwd');
    this.loginBtn = $('#loginBtn')
    this.wrong_user = $('.user span')
    this.wrong_pwd = $('.password span')
    this.arr = [false, false]
    this.init();
  }
  init() {

    // 判断输入的格式是否正确
    this.phoneNum.blur(() => {
      const userReg = /^(13[0-9]|15[0123456789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
      if (userReg.test(this.phoneNum.val())) {
        // 提示手机号输入正确，并存入localStorage中
        this.wrong_user.css('display', 'none')

        this.arr[0] = true;
      } else {
        // 提示手机号输入错误
        this.wrong_user.css('display', 'block')
        this.arr[0] = false;
      }
    })
    this.pwd.blur(() => {
      const pwdReg = /^\w{6}$/;
      if (pwdReg.test(this.pwd.val())) {
        this.wrong_pwd.css('display', 'none')

        this.arr[1] = true;
      } else {
        this.wrong_pwd.css('display', 'block')
        this.arr[1] = false;
      }
    })
    this.loginBtn.click(() => {
      if (this.arr.indexOf(false) === -1) {
        this.loginBtn.css('background', "#5c89f2")
        // 获取cookie
        const cookieStr = $.cookie('register');
        // 将cookie转换成对象
        const cookieObj = coverStrToObj(cookieStr);
        const username = this.phoneNum.val()
        const pwd = this.pwd.val()
        if (username in cookieObj) {
          if (pwd == cookieObj[username]) {
            location.href = '../index.html'
          } else {
            this.wrong_pwd.css('display', 'block')
          }
        } else {
          this.wrong_user.css('display', 'block');
          this.wrong_user.html('该手机号未注册')
        }
      } else {
        this.wrong_user.css('display', 'block');
        this.wrong_user.html('请输入手机号')
        this.wrong_pwd.css('display', 'block')
        this.wrong_pwd.html('请输入密码')

      }
    })
  }
}

new Login();

function coverStrToObj(str) {
  if (!str) {
    return {}
  }
  return JSON.parse(str)
}