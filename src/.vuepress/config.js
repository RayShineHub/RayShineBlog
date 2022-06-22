const nav = require("./config/nav")
const siderbarConf = require("./config/sidebar")
const pluginsConf = require('./plugins/index')
const baseImgUrl = "http://cdn.rayshine.site/blog"
debugger

module.exports = {
  base: "/",
  title: "一ξひβθ光 i",
  description: '乾坤未定 你我皆是黑马',
	dest: 'dist',
  head: [
		["meta", {name: "viewport",content: "width=device-width,initial-scale=1,user-scalable=no"}],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    ["script", {"language": "javascript","type": "text/javascript","src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/mouseClick.js"}],
    ["script", {"language": "javascript","type": "text/javascript","src": "/js/bg.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/noConsole.js"}],
		["script", {"language": "javascript","type": "text/javascript","src": "/js/fairyDustCursor.js"}],
		["script", { src: "https://cdn.bootcdn.net/ajax/libs/typed.js/2.0.12/typed.min.js" }],
		// ["script", { src: "https://cdn.jsdelivr.net/npm/aplayer@1/dist/APlayer.min.js" }],
		//友盟+统计
		// ["script", { src: "https://s9.cnzz.com/z_stat.php?id=1280664116&web_id=1280664116" }],
		['script', {}, `
			document.write(
				unescape(
					"%3Cspan id='cnzz_stat_icon_1280664116' style='position: fixed;bottom: 0px;' %3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php?id=1280664116&show=pic' type='text/javascript'%3E%3C/script%3E"
				)
			);
		`] 
  ],
  theme: "reco",
  markdown: {
    lineNumbers: true
  },
  mode:"auto",
	locales: {
	  "/": {
	    "lang": 'zh-CN'
	  }
	},
  themeConfig: {
    //首页样式
    back:{
      isRandom: true,
      bgImage: baseImgUrl + '/home/1.jpg',
      bgUrls: [
        baseImgUrl + '/home/1.jpg',
        baseImgUrl + '/home/2.jpg',
        baseImgUrl + '/home/3.jpg',
        baseImgUrl + '/home/4.jpg',
        baseImgUrl + '/home/5.jpg',
        baseImgUrl + '/home/6.jpg',
        baseImgUrl + '/home/7.jpg',
				baseImgUrl + '/imgs/city/1.jpg',
				baseImgUrl + '/imgs/city/2.jpg',
				baseImgUrl + '/imgs/city/3.jpg',
				baseImgUrl + '/imgs/city/4.jpg',
				baseImgUrl + '/imgs/city/5.jpg',
				baseImgUrl + '/imgs/city/6.jpg',
				baseImgUrl + '/imgs/city/7.jpg',
				baseImgUrl + '/imgs/city/8.jpg',
				baseImgUrl + '/imgs/city/9.jpg',
				baseImgUrl + '/imgs/others/1.jpg',
				baseImgUrl + '/imgs/others/2.png',
				baseImgUrl + '/imgs/others/3.png',
				baseImgUrl + '/imgs/others/4.jpg',
				baseImgUrl + '/imgs/others/5.jpg',
				baseImgUrl + '/imgs/others/6.jpg',
				baseImgUrl + '/imgs/others/7.jpg',
				baseImgUrl + '/imgs/others/8.png',
				baseImgUrl + '/imgs/others/9.png',
				baseImgUrl + '/imgs/others/10.jpg',
				baseImgUrl + '/imgs/others/11.jpg',
				baseImgUrl + '/imgs/others/12.jpg',
				baseImgUrl + '/imgs/others/13.png',
				baseImgUrl + '/imgs/others/14.jpg',
				baseImgUrl + '/imgs/others/15.jpg',
				baseImgUrl + '/imgs/others/16.jpg',
				baseImgUrl + '/imgs/others/17.jpg',
				baseImgUrl + '/imgs/others/18.jpg',
				baseImgUrl + '/imgs/others/19.jpg',
				baseImgUrl + '/imgs/others/20.png'
      ]
    },
		noFoundPageByTencent: false,
    indexTitle:"看走眼的东西，要及时扔掉。抓不住的东西，伸手都是多余。",
    indexDes:"Throw away the wrong things in time, what you can't grasp is superfluous.",
    //是否全屏样式 true，false
    fullscreen: true,
    //全屏模式下才应用 分类图片 不填或者默认为随机
    categoryPic: null,
    tagPic: null,
    timePic: null,
    modePicker: true,
    type: "blog",
    // 博客设置
    blogConfig: {
      category: {
        location: 2, // 在导航栏菜单中所占的位置，默认2
        text: "博客" // 默认 “分类”Category
      },
      tag: {
        location: 3, // 在导航栏菜单中所占的位置，默认3
        text: "标签" // 默认 “标签”Tag
      },
    },
    valineConfig: {
			appId: 'C1QftJERODGumPjT0jYf4lU1-gzGzoHsz',// your appId
			appKey: 'ArQ4h9IPpKU31g1XkDRgmX0n', // your appKey
			placeholder: '请务必填写联系方式，方便及时回复！',
			pageSize: 20,
			enableQQ: true,
			recordIP:true,
			visitor:true
    },
    nav,
		
		// sidebar: sidebar.setSidebarAuto(['/blog/前端/每日一题/']),
		sidebar: siderbarConf,
		
    logo: 'https://zyj_yida.gitee.io/source/img/ico/logo.png',
    authorAvatar: baseImgUrl + "/avatar/avatar.jpg",
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: "auto",
    // 最后更新时间
    lastUpdated: "Last Updated",
    // 作者
    author: "Ray Shine",
    // 备案号
    record: '辽ICP备2021012735',
		// 备案连接地址
		recordLink: '#',
    // 项目开始时间
    startYear: "2020",
		"socials":{
		  "github" : "https://github.com/GodLikeZeal", //github
		  "gitlub" : false, //gitlub
		  "gitee" : "https://gitee.com/GodLikeZeal", //gitee
		  "jianshu" : "https://www.jianshu.com/u/e2d051b6d2e9", //简书
		  "zhihu" : "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
		  "toutiao" : false, //知乎
		  "juejin": "https://juejin.im/user/2796746683716990", //掘金
		  "segmentfault" : "https://segmentfault.com/u/zeal_5eecb699bdb08", //思否
		  "csdn" : false, //CSDN
		  "wechat" : "你的微信", //微信
		  "qq" : "你的QQ" //QQ
		},
    friendLink: [
      {
        title: "午后南杂",
        desc: "Enjoy when you can, and endure when you must.",
        email: "1156743527@qq.com",
        link: "https://www.recoluan.com",
      },
      {
        title: "vuepress-theme-reco",
        desc: "A simple and beautiful vuepress Blog & Doc theme.",
        avatar:
          "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
        link: "https://vuepress-theme-reco.recoluan.com",
      }
    ],
    //首页格言
    mottos: [{
      "zh": "看走眼的东西，要及时扔掉。抓不住的东西，伸手都是多余。",
      "en": "Throw away the wrong things in time, what you can't grasp is superfluous."
      },
      {
        "zh": "有结果的付出叫投资，没结果的付出叫代价。",
        "en": "Pay with results is called pay, pay without results is called price."
      },
      {
        "zh": "梦想不会逃跑，会逃跑的永远都是自己。",
        "en": "Dream will not run away, will always be their own escape."
      },
      {
        "zh": "涉江而过，芙蓉千朵。诗也简单，心也简单。",
        "en": "Crossing the river, there are thousands of Hibiscus. Poetry is simple, heart is simple."
      },
      {
        "zh": "熬得住才出众，熬不住会出局",
        "en": "It's outstanding to endure. If you can't endure, you'll be out."
      }, {
        "zh": "未成定局的事就不要弄的人尽皆知。",
        "en": "Don't do anything that's not settled but everyone knows it."
      },
      {
        "zh": "你的人品，就是最好的运气。你的状态，就是最好的风水。",
        "en": "Your character is your best luck, Your state is the best Feng Shui."
      }
    ],
  },
  plugins: pluginsConf
 };
