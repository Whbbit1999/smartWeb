class Login {
  constructor() {
    this.phoneNum = $('#phoneNum');
    this.pwd = $('#pwd');
    this.loginBtn = $('#loginBtn')

    this.init();
  }
  init() {
    this.loginBtn.click(() => {

      // 获取cookie
      const cookieStr = $.cookie('register');
      // 将cookie转换成对象
      const cookieObj = coverStrToObj(cookieStr);
      console.log(cookieObj)
      const username = this.phoneNum.val()
      const pwd = this.pwd.val()
      if (username in cookieObj) {
        if (pwd == cookieObj[username]) {
          console.log('登录成功')
          location.href = '../index.html'
        } else {
          console.log('密码错误')
        }
      } else {
        console.log('用户名不存在')
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