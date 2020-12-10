class Cart {
  constructor() {
    this.login = $('.login')
    this.index = $('.index')
    this.cart = $('.cart')
    this.cartTabel = $('.cart-tabel')
    this.btnClick()
    this.init()
  }
  // 按钮点击
  btnClick() {
    this.login.click(() => {
      location.href = '../pages/login.html'
    })
    this.index.click(() => {
      location.href = '../index.html'
    })
  }

  // 初始化
  init() {
    // 判断是否登录，显示不同的样式
    const login = true
    if (login) {
      const localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
      if (localStr.length === 0) {
        this.cart.css('display', 'block')
        this.cartTabel.css('display', 'none')
      } else {


        this.cart.css('display', 'none')
        this.cartTabel.css('display', 'block')
        // 如果登录的话，获取用户购物车中的信息，渲染页面
        const localStr = localStorage.getItem('wh-cart')
        const localObj = cover(localStr);
        for (let item in localObj) {
          let price = priceToNUm(localObj[item].price)
          let html = $('.cart-tabel').html()
          html += `
          <div class="cart-table d-flex jc-around ai-center" data-p-id="${item}">
          <div class="pMessage d-flex jc-start ai-center">
            <div class="img">
              <img src="../img/list/R2webp.webp" alt="">
            </div>
            <div class="message">
              <h2>${localObj[item].name}</h2>
              <div class="tips">${localObj[item].tips}</div>
              </div>
            </div>
          <div class="price">${'￥' + price + '.00'}</div>
          <div class="num d-flex jc-around ai-center">
            <span class="less"></span>
            <span class="num">${localObj[item].num}</span>
            <span class="add"></span>
          </div>
          <div class="count">${'￥' + (price * localObj[item].num) + '.00'}</div >
          <div class="operating"></div>
        </div >
        `
          this.cartTabel.html(html)

          this.add()
          this.less()
          this.colseEle()

        }
      }


    } else {
      this.cart.css('display', 'block')
      this.cartTabel.css('display', 'none')
    }
  }
  add() {
    // 获取按钮
    let addBtn = $('.add')
    addBtn.click(() => {
      let id = addBtn.parent().parent().attr('data-p-id')
      let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
      let localObj = cover(localStr)
      localObj[id].num++
      localStorage.setItem('wh-cart', JSON.stringify(localObj))
      // 修改页面中的数据
      let pNum = addBtn.prev().html()
      pNum = localObj[id].num
      window.location.reload()

    })
  }
  less() {
    // 获取按钮
    let lessBtn = $('.less')
    lessBtn.click(() => {
      let id = lessBtn.parent().parent().attr('data-p-id')
      let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
      let localObj = cover(localStr)
      if (localObj[id].num === 1) {
        localObj[id].num = 1
      } else {
        localObj[id].num--
      }
      localStorage.setItem('wh-cart', JSON.stringify(localObj))
      // 修改页面中的数据
      let pNum = lessBtn.next().html()
      pNum = localObj[id].num
      window.location.reload()

    })
  }
  colseEle() {
    let operatingBtn = $('.operating')
    operatingBtn.click(() => {
      let id = operatingBtn.parent().parent().attr('data-p-id')
      let localStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : ''
      let localObj = cover(localStr)
      localStorage.removeItem('wh-cart')
      // 修改页面中的数据
      operatingBtn.parent().remove()

      window.location.reload()


    })
  }
}


new Cart()

function cover(str) {
  if (!str) {
    return {}
  }
  return JSON.parse(str)
}

function priceToNUm(str) {
  let arr = str.slice(1, str.length)
  let arr1 = parseFloat(arr.split(',').join(''), 2)
  return arr1
}