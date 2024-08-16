// 搜索元素
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const suggestionsEl = document.getElementById('suggestions');
const listOfPlatforms = document.getElementById('listOfPlatforms');
const pageHeader = document.querySelector('#pageHeader .container');
const statusEls = document.querySelectorAll('.status');
const menu = document.getElementById('menu');
const toggleMenu = document.querySelector('.navItems.toggle');
let typeNow = 0;

toggleMenu.addEventListener('click',()=>{
    menu.classList.toggle('open')
});

const statusHTable = {
    "1":'已验证',
    "2":'停业',
    "3":'待验证'
}

const suggestions = [
    {
      name: "信钰证券",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/xyzq.png',
      id: 1,
      desc: "信钰证券,港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
      time: "2018-10-09",
      star: 5,
      remark: "实盘交易 开户送19888",
      area:'深圳信钰证券有限公司',
      url: "https://22005.vip/",
      status: 1, //1 正常 2 停业 3: 待验证
    },
    {
      name: "广源优配",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/gyyp.png',
      id: 12,
      desc: "广源优配券商，多种交易选择美股，港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
      time: "2019-10-09",
      star: 4,
      remark: "实盘交易 开户送18888",
      area:'深圳广源优配有限公司公司版',
      url: "https://www.25618.vip/",
      status: 1, //1 正常 2 停业 3: 待验证
    },
    {
      name: "万丰资本",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/wfzb.png',
      id: 13,
      desc: "万丰资本，多种交易选择美股，港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
      time: "2019-10-09",
      star: 4,
      remark: "实盘交易 开户送15888",
      area:'深圳万丰资本有限公司公司版',
      url: "https://www.20676.vip/",
      status: 1, //1 正常 2 停业 3: 待验证
    },
  {
      name: "长富资本",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/cf.jpg',
      id: 14,
      desc: "万丰资本，多种交易选择美股，港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
      time: "2019-10-09",
      star: 5,
      remark: "实盘交易，注册送16888元",
      area:'深圳长富资本有限公司公司版',
      url: "https://0725cf-q3q0u1.h5bg-n15l.com:10725",
      status: 1, //1 正常 2 停业 3: 待验证
    },
  {
      name: "垒富资本",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/lf.jpg',
      id: 15,
      desc: "垒富资本，多种交易选择美股，港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
      time: "2019-10-09",
      star: 5,
      remark: "实盘交易，注册送16888元",
      area:'深圳垒富资本有限公司公司版',
      url: "https://0725lf-dr8zw4.wzim-e5oh.com:10725",
      status: 1, //1 正常 2 停业 3: 待验证
    },
    	    {
      name: "中资优配",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/zzyp.png',
      id: 16,
      desc: "",
      time: "2022-10-09",
      star: 4,
      remark: "实盘交易",
      area:'浙江省/杭州市',
      url: "https://xjs2t8h.6zkz20j.lfea0pv.25909.vip:3975/zhongzi/#/pagesD/navPage/index",
      status: 1,
    },
    {
      name: "阳美网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/ymw.png',
      id: 2,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:'浙江省/杭州市',
      url: "https://22005.vip/",
      status: 1,
    },
    {
      name: "嘉旺网",
      icon:'http://nginx.xin.korean-stock-market.com/public/assets/images/jww.png',
      id: 3,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:'广东省/佛山市',
      url: "https://22005.vip/",
      status: 1,
    },
    {
      name: "长宏网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/chw.png',
      id: 4,
      desc: "",
      time: "2023-10-09",
      star: 4,
      remark: "实盘交易",
      url: "https://22005.vip/",
      area:'广东省/云浮市',
      url: "https://22005.vip/",
      status: 1,
    },
    {
      name: "兴盛网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/xsw.png',
      id: 5,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area: '福建省/漳州市',
      url: "https://22005.vip/",
      status: 2,
    },
    {
      name: "启泰网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/qtw.png',
      id: 6,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:' 江苏省/宿迁市',
      url: "https://22005.vip/",
      status: 3,
    },
    {
      name: "恒正网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/hzw.png',
      id: 7,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:'浙江省/舟山市',
      url: "https://22005.vip/",
      status: 2,
    },
    {
      name: "诺亚创融",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/nycf.jpg',
      id: 8,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:'上海市/虹口区',
      url: "https://22005.vip/",
      status: 2,
    },
    {
      name: "鼎宝融",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/dbr.jpg',
      id: 9,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:' 北京市/东城区市',
      url: "https://22005.vip/",
      status: 2,
    },
    {
      name: "七点财富",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/qdcf.jpg',
      id: 10,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:'浙江省/舟山市',
      url: "https://22005.vip/",
      status: 2,
    },
    {
      name: "佳成网",
      icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/jcw.png',
      id: 11,
      desc: "",
      time: "2023-10-09",
      star: 2,
      remark: "实盘交易",
      area:' 浙江省/杭州市',
      url: "https://22005.vip/",
      status: 2,
    },
]
const getStars = (num)=>{
    let starsNow = ''
    for (let i = 0; i < 6; i++) {
        if(i < num){
            starsNow += `<svg xmlns="http://www.w3.org/2000/svg" class="star filled" viewBox="0 0 1024 1024"><path d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"></path></svg>`
        }else{
            starsNow += `<svg xmlns="http://www.w3.org/2000/svg" class="star" viewBox="0 0 1024 1024"><path d="M283.84 867.84 512 747.776l228.16 119.936a6.4 6.4 0 0 0 9.28-6.72l-43.52-254.08 184.512-179.904a6.4 6.4 0 0 0-3.52-10.88l-255.104-37.12L517.76 147.904a6.4 6.4 0 0 0-11.52 0L392.192 379.072l-255.104 37.12a6.4 6.4 0 0 0-3.52 10.88L318.08 606.976l-43.584 254.08a6.4 6.4 0 0 0 9.28 6.72z"></path></svg>`
        }
    }
    return starsNow
}
// 主页pageHeader的内容
const pageContent = [
    {
        title:'收录平台',
        num:1933
    },
    {
        title:'用户评论',
        num:8321
    },
    {
        title:'曝光平台',
        num:362
    }
]



const getListItems = (listItems = [], typeOfPlatform = 0)=>{
    let newList = []
    if(typeOfPlatform == 0){
        newList = listItems
    }else{
        newList = listItems.filter(item => item.status == typeOfPlatform);
    }
    listOfPlatforms.innerHTML = '';
    newList.forEach(item=>listOfPlatforms.innerHTML += 
        `<a href='/company.html?id=${item.id}' target='__blank'><div class="platformItem" data-id='${item.id}'>
            <div class="platformIcon">
                <img src="${item.icon}" alt="${item.name}" width="100px">
            </div>
            <div class="platformDetails">
                <div class="detail start">
                    <span class="bold">${item.name} <span class="tag tag-${item.status}">${statusHTable[item.status]}</span></span>
                    <span class="rate">
                        <span>综合评分：</span><span class="stars">
                            ${getStars(item.star)}
                        </span>
                    </span>
                </div>
                <div class="detail">
                    <span>${item.remark}</span>
                    <span class="break"><span>上线时间：</span><span>${item.time}</span></span>
                </div>
            </div>
        </div></a>`
    )
}

statusEls.forEach(statusEl => statusEl.addEventListener('click', (e)=>{
    typeNow = e.target.dataset.id;
    e.target.classList.add('active');
    getListItems(suggestions, Number(typeNow))
    statusEls.forEach(statusEl => statusEl.dataset.id !== typeNow && statusEl.classList.remove('active'));
}));
window.addEventListener('load', ()=>getListItems(suggestions));
pageContent.forEach(item=>pageHeader.innerHTML += 
    `<div class="headerCard">
        <span class="title">${item.title}</span>
        <span class="num">${item.num}</span>
    </div>`
)
let slideShow = [...suggestions.filter((item, index)=> index <= 6), ...suggestions.filter((item, index)=> index <= 6)]
slideShow.forEach(item=>suggestionsEl.innerHTML += 
    `<div class="swiper-slide">
        <a href="/company.html?id=${item.id}" target="_blank" class="suggestLink">
            <img src="${item.icon}" alt="${item.name}" width="100px">
        </a>
    </div>`
)

// 搜索提交事件
const handleSearchSubmit = (e)=>{
    e.preventDefault();
    console.log(searchInput.value);
}

// 绑定搜索提交事件
searchForm.addEventListener('submit', handleSearchSubmit)

// Swiper 推荐轮播设置
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 6,
    spaceBetween: 50,
    breakpoints: {
        250: {
            slidesPerView: 2,
            spaceBetween: 0,
        },
        300: {
            slidesPerView: 3,
            spaceBetween: 0,
        },
        600: {
            slidesPerView: 4,
            spaceBetween: 5,
        },
        1200: {
            slidesPerView: 6,
            spaceBetween: 50,
        },
    },
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });