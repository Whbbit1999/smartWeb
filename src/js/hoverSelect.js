class HoverSelect {
  constructor() {
    // 获取元素
    this.dowload_app = $('header .top-bar-nav .dowload-app')
    this.eq = $('.eq')
    this.nav_menu = $('.nav-menu')
    this.lis = $('.nav-menu li')
    this.product_menu = $('li .product-menu')
    this.init()
    this.hover()
  }
  init() {
    this.product_menu.css('opacity', '0')
    this.eq.css('opacity', '0')

  }
  hover() {
    this.nav_menu.hover(() => {
      // 鼠标划入
      this.product_menu.slideDown()
      this.product_menu.css('opacity', '1')
    }, () => {
      // 鼠标移出
      this.product_menu.slideUp("slow", () => {
        this.product_menu.css({ 'opacity': "0", })
      })


    })

    this.dowload_app.hover(() => {
      this.eq.slideDown()

      this.eq.css('opacity', '1')

    }, () => {
      this.eq.slideUp("slow", () => {
        this.eq.css({ 'opacity': "0", })
      })

    })
  }
}

// height270px width 100% 1220px

new HoverSelect();