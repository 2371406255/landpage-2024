// 搜索元素
const searchInput = document.getElementById('searchInput');
const searchForm = document.getElementById('searchForm');
const suggestionsEl = document.getElementById('suggestions');
const menu = document.getElementById('menu');
const allComments = document.getElementById('allComments');
const currentContentEl = document.getElementById('currentContent');
const toggleMenu = document.querySelector('.navItems.toggle');

toggleMenu.addEventListener('click',()=>{
    menu.classList.toggle('open')
});
const pageHeader = document.querySelector('#pageHeader .container');
const comments = `
抄底翻盘好平台呀  要不然就没机会翻盘了
做t 好工具   这行情就需要这样的工具
领取体验金，白嫖了5k利润  嘎嘎香  
送了我2w免息  送的体验也能赚到
很使用的炒股app软件 ，看行情资讯，方便多了 
平台开户 速度很快
我加了2倍杠杆  没敢多家
开户很快，费率低， 开户还送体验金  先体验再说
一款软件主要取决于投资者的需求和经验。新手可能更喜欢界面简洁、易于操作的软件，而经验丰富的交易者可能更倾向于选择提供强大分析工具的软件。
堪称炒股神器，抄底好工具
老哥 带带我  我刚接触股市
 一万加10倍  看好一直股 做波段
这个靠谱吗 
没杠杆普通人 根本就翻不起来 
总算找到不是黑平台的台子了
非常靠谱 刚开始小资金测试  
平台帮助监测 监督 验证  非常感谢！
杠杆加到12倍 终于把亏损的搞回来了
这波结束  改天在操作
安全可靠的十倍杠杆配资服务，解决了我很大问题
10倍杠杆，穿仓免责。他出去，我炒股，收益全归我! 哈哈
功能也很强大，操作起来也很容易上手。 这句话强调了软件的设计和功能的强大，以及操作的便捷性。
注册做任务 免手续费  推荐还有的赚
着重表扬一下里面分笔成交的功能，用起来真的是太爽了。以前要不停的追加保证金，资金也得不到充分用，现在就可以分笔买入，有了这个功能，我再也没有碰到过保证金的那个按钮。
有这些平台帮助监测 监督 验证  非常感谢！
正规平台让客户放心炒股为客户承担额外风险
选股原则 短线选股的思路，应该是这个顺序，热点、题材、市场情绪，股价涨幅，成交量比，最后才是业绩。
股票短线推荐 
我自己的亲身体验是真的挺不错的，app操作流畅
整体操作流畅，出入金快捷，平台收费合理。
交易流程基本跟券商账户的一样，上手挺快的，先选股再交证金，这样蛮符合我习惯，用了一段时间了确实挺不错的，而且这个软件的复盘功能反而时最符合我们的操作直觉的，推荐大家都用用
确实没有辜负我的选择，APP很好操盘，资金也安全，收费很合理
实盘交易，出入金速度快，几分钟到账，值得信赖。
玩了两个星期了，基本没问题，就是偶尔网络有点慢。
一共下载了五款软件，这个算是最好用的了，充值方便，体现快，特别棒！
短线交易的核心就是热门强势股里找机会,与强势股为伍才有短期快速盈利的机会
服务周到，客服沟通愉快，果断选择了这个平台，资金安全。
有朋友玩过吗？可以提现不
平台用充值保证金+配资的方式炒股体验操作过合约模式发现挂单、撤单和股市证券市场的真实数据同步，正常结束合约，充值的保证金当天快速提现，目前初步判定配资平台的股票配资子账户是实盘。
软件很顺畅，抓板很及时，客服态度也很NICE，推介给希望抄底的朋友！
晚上很晚添加了客服微信，一直咨询到半夜，客服很有耐心，早上还没有到上班时间，客服一直回答我的疑问，开盘前果断充值配资，这样敬业的精神，相信你们一定是专业的，资金有保障，收费也很合理的，已经推荐给我身边好几个朋友在使用了，他们都一致好评
平台体验好，收入信息一目了然，提现快。值得推荐的一个好平台。
目测实盘正常   刚开始该不敢用  注册了体验下 真的
抢大礼包  哈哈   新注册平台免费领取操盘金，推荐用户有奖励，节假日红包抵扣券，累计交易奖励券，平台手续费抵扣券  免费的线上行情分析课程
`;

const suggestions = [
  {
    name: "信钰证券",
    icon: 'http://nginx.xin.korean-stock-market.com/public/assets/images/xyzq.png',
    id: 1,
    desc: "信钰证券,港股，A股，国内国际期货，股指期货和国际外汇零门槛开户，资金三方监管，安全快捷，以领先技术与极致服务，变革投资体验。全球交易，牛策略与你相伴！",
    time: "2018-10-09",
    star: 4,
    remark: "实盘交易",
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
    remark: "实盘交易",
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
    remark: "实盘交易",
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

const getComments = (text)=>{
  return text.split('\n').filter(item=> item !== '')
}

const area = [
  "北京市-北京市",
  "上海市-上海市",
  "天津市-天津市",
  "重庆市-重庆市",
  "河北省-石家庄市",
  "河南省-郑州市",
  "辽宁省-沈阳市",
  "吉林省-长春市",
  "黑龙江省-哈尔滨市",
  "江苏省-南京市",
  "浙江省-杭州市",
  "安徽省-合肥市",
  "福建省-福州市",
  "江西省-南昌市",
  "山东省-济南市",
  "湖北省-武汉市",
  "湖南省-长沙市",
  "广东省-广州市",
  "四川省-成都市",
  "贵州省-贵阳市",
  "云南省-昆明市",
  "陕西省-西安市",
  "甘肃省-兰州市",
  "青海省-西宁市",
  "广西壮族自治区-南宁市",
  "内蒙古自治区-呼和浩特市",
  "宁夏回族自治区-银川市",
  "新疆维吾尔自治区-乌鲁木齐市",
  "海南省-海口市",
  "西藏自治区-拉萨市",
];

const getAvatar = () => {
  let id = generateRandomString(randomAccess(5, 10))
  return multiavatar(id)
}


function generateRandomString(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

const getRandomCount = (m, n) => {
  return Math.ceil(Math.random() * (n - m+1) + m - 1);
};

function generateRandomDate() {
  const start = moment(moment().add(-3, "months")).valueOf();
  const end = moment().valueOf();
  const randomDate = new Date(start + Math.random() * (end - start));
  return randomDate.toISOString().split("T")[0];
}

// 获取指定范围内的随机数
function randomAccess(min, max) {
  return Math.floor(Math.random() * (min - max) + max);
}

// 解码
function decodeUnicode(str) {
  //Unicode显示方式是\u4e00
  str = "\\u" + str;
  str = str.replace(/\\/g, "%");
  //转换中文
  str = unescape(str);
  //将其他受影响的转换回原来
  str = str.replace(/%/g, "\\");
  return str;
}

function getRandomName(len) {
  let name = "";
  for (let i = 0; i < len; i++) {
    let unicodeNum = "";
    unicodeNum = randomAccess(0x4e00, 0x9fa5).toString(16);
    name += decodeUnicode(unicodeNum);
  }
  return name;
}


// const getComment = async () => {
const getComment = () => {
  let data = [];
  // let count = (new Date().getTime() % 100) + 30;
  // let comments = await gettxt();
  let allcommentsnow = getComments(comments);
  for (let i = 0; i < allcommentsnow.length; i++) {
    let commentNow = allcommentsnow[getRandomCount(0, allcommentsnow.length-1)];
    data[i] = {
      comment: commentNow,
      area: area[getRandomCount(1, area.length)],
      date: generateRandomDate(),
      name: getRandomName(getRandomCount(3, 7)),
    };
  }
  return data;
};

let platformComments = getComment();

console.log(platformComments);


let params = new URLSearchParams(window.location.search);
// console.log(params.get('id'));
console.log(getAvatar());

platformComments.forEach(item=>allComments.innerHTML += 
  `<div class="commentItem">
      <div class="avatar">
          ${getAvatar()}
      </div>
      <div class="commentDetail">
          <div class="nameNarea">
              <span class="name">${item.name}</span>
              <span class="area">${item.area}</span>
          </div>
          <p class="commentText">${item.comment}</p>
          <p class="commentDate">${item.date}</p>
      </div>
  </div>`
)
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

const statusHTable = {
  "1":'已验证',
  "2":'停业',
  "3":'待验证'
}
// pageContent.forEach(item=>pageHeader.innerHTML += 
//     `<div class="headerCard">
//         <span class="title">${item.title}</span>
//         <span class="num">${item.num}</span>
//     </div>`
// )
let fullSize = 295.31
let percentage = 0.96
let currentContent = suggestions.filter(item=>item.id == Number(params.get('id')))
currentContent.forEach(item=>currentContentEl.innerHTML += 
    `<div class="contentDetails">
        <div class="details">
            <div class="detailIcon">
                <img src="${item.icon}" alt="${item.name}" width="100px">
            </div>
            <div class="detailContent">
                <div class="contentName">
                    <span>${item.name}</span><span class="tag tag-${item.status}">${statusHTable[item.status]}</span>
                </div>
                <div class="onlineDataArea">
                    <span>上线时间：</span><span>${item.time}</span>
                    <span>地区：${item.area}</span>
                </div>
                <div class="websiteWithBtn">
                    <span>官方网址：<a href="${item.url}" target="_blank">${item.url}</a></span> <a class="contentDetailsA" href="${item.url}" target="_blank">打开网站</a>
                </div>
            </div>
        </div>
        <div class="ratingItems">
            <div class="item">
                <span class="content"><span class="bold">9.68</span>/10</span>
            </div>
            <div class="item">
                <span class="title">服务项目</span>
                <span class="content">股票</span>
            </div>
            <div class="item">
                <span class="title">服务模式</span>
                <span class="content">3-10倍</span>
            </div>
        </div>
    </div>
    <div class="contentRatings">
        <div class="ratingCircle">
            <div class="percentage">
                <span class="title">综合得分</span>
                <span class="score">96</span>
            </div>
            <svg viewBox="0 0 100 100"><path class="el-progress-circle__track" d="
                M 50 50
                m 0 -47
                a 47 47 0 1 1 0 94
                a 47 47 0 1 1 0 -94
                " stroke="var(--el-fill-color-light, #e5e9f2)" stroke-linecap="round" stroke-width="6" fill="none" style="stroke-dasharray: 295.31px, 295.31px; stroke-dashoffset: 0px;"></path><path class="el-progress-circle__path" d="
                M 50 50
                m 0 -47
                a 47 47 0 1 1 0 94
                a 47 47 0 1 1 0 -94
                " stroke="#5b37b4" fill="none" opacity="1" stroke-linecap="round" stroke-width="4.8" style="stroke-dasharray: 285.497, 295.31px; stroke-dashoffset: 0px; transition: stroke-dasharray 0.6s ease 0s, stroke 0.6s ease 0s, opacity 0.6s ease 0s;"></path></svg>
        </div>
        <div class="ratingScores">
            <div class="scoreItem">平台指数 9.68</div>
            <div class="scoreItem">风控指数 9.68</div>
            <div class="scoreItem">软件指数 9.68</div>
            <div class="scoreItem">倍数指数 9.68</div>
        </div>
        <div class="right-box"><div class="right-box-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="item-img"><path fill="currentColor" d="m174.72 855.68 135.296-45.12 23.68 11.84C388.096 849.536 448.576 864 512 864c211.84 0 384-166.784 384-352S723.84 160 512 160 128 326.784 128 512c0 69.12 24.96 139.264 70.848 199.232l22.08 28.8-46.272 115.584zm-45.248 82.56A32 32 0 0 1 89.6 896l58.368-145.92C94.72 680.32 64 596.864 64 512 64 299.904 256 96 512 96s448 203.904 448 416-192 416-448 416a461.056 461.056 0 0 1-206.912-48.384l-175.616 58.56z"></path><path fill="currentColor" d="M352 576h320q32 0 32 32t-32 32H352q-32 0-32-32t32-32m32-192h256q32 0 32 32t-32 32H384q-32 0-32-32t32-32"></path></svg>投诉与建议 </div><div class="right-box-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="item-img"><path fill="currentColor" d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896m0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4"></path></svg>纠错 </div><div class="right-box-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" class="item-img"><path fill="currentColor" d="M480 512h64v320h-64z"></path><path fill="currentColor" d="M192 896h640a64 64 0 0 0-64-64H256a64 64 0 0 0-64 64m64-128h512a128 128 0 0 1 128 128v64H128v-64a128 128 0 0 1 128-128m256-256a192 192 0 1 0 0-384 192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512"></path></svg>关注 </div></div>
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