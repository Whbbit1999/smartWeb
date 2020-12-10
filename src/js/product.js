class Scroll {
  constructor() {
    // 初始化样式
    this.nav = $('nav')
    this.a = $('nav div a')
    this.span = $('nav div span')
    // 点击购买，挑选时的样式和逻辑
    this.colorBtn = $('.color-select button')
    this.capacitySelectBtn = $('.capacity-select button')
    this.serviceBth = $('.service .button')
    this.buyBtn = $('.buy-btn')
    this.addCartBtn = $('.add-cart')
    this.buySuccess = $('.buy-success')
    // 事件
    this.init()
    this.buy()
  }
  buy() {
    // 点击加入购物车
    this.addCartBtn.click(() => {
      this.buySuccess.css({ 'display': 'block' })
      setTimeout(() => {
        this.buySuccess.css({ 'display': 'none' })
      }, 2000)
      // 加入购物车事件
      this.addCart()
    })
    // 点击现在购买按钮
    this.buyBtn.click(() => {
      this.buySuccess.css({ 'display': 'block' })
      setTimeout(() => {
        this.buySuccess.css({ 'display': 'none' })

        // 跳转页面
        $(location).delay().attr('href', '../pages/cart.html');
      }, 2000)
      // 加入购物车事件  
    })



  }

  // 添加到购物车
  addCart() {
    // 获取商品信息
    const pId = this.addCartBtn.parent().parent().prev().last().children().last().children().last().attr('data-p-id')
    const pName = this.addCartBtn.parent().parent().prev().last().children().last().children().first().children().first().html()
    const pPrice = this.addCartBtn.parent().parent().prev().last().children().last().children().first().children().last().html()
    const pTips = this.addCartBtn.parent().parent().prev().last().children().last().children().last().html()
    console.log(pId, pName, pPrice, pTips)
    // 先获取localStroage中的数据
    const stroageStr = localStorage.getItem('wh-cart') ? localStorage.getItem('wh-cart') : localStorage.getItem('');
    const storageObj = cover(stroageStr)
    // 判断选中的商品是否存在于本地存储中,是的话加1，不是的话新建初始化为1
    if (pId in storageObj) {
      storageObj[pId].num++
    } else {
      storageObj[pId] = {
        "name": pName,
        "price": pPrice,
        "tips": pTips,
        "num": 1,
      }

    }
    localStorage.setItem('wh-cart', JSON.stringify(storageObj));
  }



  init() {
    jQuery(window).scroll(() => {
      let top = this.nav.offset().top
      if (top > 80) {
        this.nav.show(() => {
          this.nav.css('height', '75px')
          this.a.css('fontSize', '16px')
          this.span.css({ 'display': 'inline-block', "marginRight": "100px" })
        })
      } else {
        this.nav.show('slow', () => {
          this.nav.css('height', "40px")
          this.a.css('fontSize', '10px')
          this.span.css('display', 'none')
        })

      }
    })
    // 点击时变化样式
    this.colorBtn.click(() => {
      // $(this).siblings().removeClass('.active');
      // $(this).addClass('.active');

      // $.each(this.colorBtn, (item, items) => {
      //   // console.log($(this))
      //   // console.log(item)
      //   this.colorBtn.toggleClass('active')
      // })
    })

    this.capacitySelectBtn.click(() => {

    })
    this.serviceBth.click(() => {

    })
  }
}

function cover(str) {
  if (!str) {
    return {}
  }
  return JSON.parse(str)
}

new Scroll()