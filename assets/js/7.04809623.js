(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{437:function(t,s,e){},448:function(t,s,e){"use strict";e(437)},461:function(t,s,e){"use strict";e.r(s);var i=e(8),a=e.n(i);const n=function(t,s=200){let e=null;return function(){let i=this,a=arguments;e&&clearTimeout(e),e=setTimeout(()=>{t.apply(i,a)},s)}};var r={components:{DropdownTransition:e(43).a},data(){return{open:!1,scrollbar:!1,time:0,loading:!0,isPC:!0,userInfo:{avatarUrl:"",nikename:"",level:0},vipInfo:{musicPackage:{isSign:!1},associator:{isSign:!1},redplus:{isSign:!1}},isVip:!1,isLogin:!1,qrcodeImgUrl:"",search:{searchStr:"",isRuning:!1,placeholder:"搜索",resultList:[]},focused:!1,playHistory:!1,isPlaying:!1,playType:this.defaultPlayType,musicList:[],tracks:[],currentMusic:{playListId:"144719593",musicId:"",currentTime:0,maxTime:0,duration:0,volume:.3,name:"",artist:"",url:"",cover:"https://p2.music.126.net/3MaeDnsU61e96WlH5-hoaQ==/109951163195183343.jpg?param=50y50",timestemp:0,lineNo:0,lrc:"",lrcList:[],sort:0,brList:[]},lineNo:1,isArrow:!0,linksWrapOffsetWidth:null,linksWrapMaxWidth:null,fixedHeight:0,pageYOffset:44,isFixed:!1,isVisible:!1,isListRefresh:!1,searchFlag:!1,pageInfo:{totalPage:1,pageNum:1,size:20}}},computed:{loginUrl(){return this.$themeConfig.back.musicUrl+"/qrlogin.html"||!1},playlistId(){return this.$themeConfig.NavPlayer.playlistId||""},catgList(){return this.$themeConfig.NavPlayer.catgList||[]},autoPlay(){return this.$themeConfig.NavPlayer.autoPlay||!1},volumeStep(){return this.$themeConfig.NavPlayer.volumeStep||.1},defaultVolume(){return this.$themeConfig.NavPlayer.defaultVolume||.3},defaultPlayType(){return this.$themeConfig.NavPlayer.playType||"playloop"},songsList(){return this.searchFlag?this.search.resultList:this.musicList}},watch:{},mounted(){this.getLoginStatus(localStorage.getItem("cookie")),this.keyDown(),/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)?this.isPC=!1:(this.playType=this.defaultPlayType,this.isPC=!0,this.getMusicList("first",this.playlistId)),this.handleLinksWrapWidth(),window.addEventListener("resize",this.handleLinksWrapWidth,!1),window.addEventListener("scroll",this.throttle(this.handleScroll,500)),this.$nextTick(()=>{this.$refs.audio.volume=this.defaultVolume,this.currentMusic.volume=this.$refs.audio.volume})},beforeDestroy(){window.removeEventListener("scroll",this.throttle(this.handleScroll,1e3))},methods:{async login(){let t=this;t.logout();let s=null;const e=(await a()({baseURL:t.$themeConfig.back.musicUrl,url:"/login/qr/key?timerstamp="+Date.now()})).data.data.unikey,i=await a()({baseURL:t.$themeConfig.back.musicUrl,url:`/login/qr/create?key=${e}&qrimg=true&timerstamp=${Date.now()}`});t.isLogin=!0,t.qrcodeImgUrl=i.data.data.qrimg,s=setInterval(async()=>{const i=await this.checkStatus(e);800===i.code&&clearInterval(s),803===i.code&&(clearInterval(s),t.isLogin=!1,await this.getLoginStatus(i.cookie),localStorage.setItem("cookie",i.cookie))},3e3)},async checkStatus(t){return(await a()({baseURL:this.$themeConfig.back.musicUrl,url:`/login/qr/check?key=${t}&timerstamp=${Date.now()}`})).data},async getLoginStatus(t=null){let s=this;null!=t&&await a()({baseURL:s.$themeConfig.back.musicUrl,url:"/login/status?timestamp="+Date.now(),method:"post",data:{cookie:t}}).then((function(e){200===e.status&&0===e.data.data.account.status?(s.userInfo=e.data.data.profile,s.getVipInfo(t)):e.data.data.account.status}),(function(t){console.log(t)}))},async getVipInfo(t=null){let s=this;await a()({baseURL:s.$themeConfig.back.musicUrl,url:"/vip/info?timestamp="+Date.now(),method:"post",data:{cookie:t},withCredentials:!0}).then((function(t){200===t.status&&(s.vipInfo=t.data.data,s.isVip=!0)}),(function(t){console.log(t)}))},logout(){let t=this;a()({baseURL:t.$themeConfig.back.musicUrl,url:"/logout"}).then((function(s){localStorage.removeItem("cookie"),t.userInfo={avatarUrl:"",nikename:"",level:0},t.vipInfo={musicPackage:{isSign:!1},associator:{isSign:!1},redplus:{isSign:!1}}}))},keyDown(){let t=this;document.onkeydown=function(s){var e=s||window.event,i=e.keyCode||e.which;if(t.open)switch(e.returnValue=!0,i){case 32:t.focused||(t.onPlay(),e&&e.preventDefault&&e.preventDefault());break;case 27:t.immerse(),e&&e.preventDefault&&e.preventDefault();break;case 37:e.altKey&&t.prev(),e&&e.preventDefault&&e.preventDefault();break;case 39:e.altKey&&t.next(),e&&e.preventDefault&&e.preventDefault();break;case 38:e.altKey&&t.onVolume("jia"),e&&e.preventDefault&&e.preventDefault();break;case 40:e.altKey&&t.onVolume("jian"),e&&e.preventDefault&&e.preventDefault()}}},handleLinksWrapWidth(){let t=this,s=document.querySelector(".nav-sub")&&document.querySelector(".nav-sub").offsetWidth||1872;document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapOffsetWidth=document.querySelector(".links").offsetWidth||726,(null==t.linksWrapOffsetWidth||t.linksWrapOffsetWidth>s)&&setTimeout(()=>{this.handleLinksWrapWidth()},2e3)},handleScroll(){this.isFixed=window.pageYOffset>this.fixedHeight,this.throttle(this.handleVisible(),1e3)},handleVisible(){this.isVisible=window.pageYOffset<this.pageYOffset&&window.pageYOffset>0,this.pageYOffset=window.pageYOffset},throttle(t,s=200){let e=null,i=Date.now();return function(){const a=Date.now(),n=s-(a-i),r=arguments,c=this;clearTimeout(e),n<=0?(t.apply(c,r),i=Date.now()):e=setTimeout(t,n)}},playTypeHandle(){switch(this.playType){case"playsingle":this.playType="playloop";break;case"playloop":this.playType="playorder";break;case"playorder":this.playType="playrandom";break;default:this.playType="playsingle"}},async getMusicList(t="first",s="144719593"){let e=this;e.searchFlag=!1,e.search.query="",e.loading=!0,e.isListRefresh=!0,"refresh"==t&&(s=e.currentMusic.playListId),e.pageInfo.pageNum=1,e.musicList=[],a()({baseURL:e.$themeConfig.back.musicUrl,url:"/playlist/detail?id="+s,withCredentials:!0}).then((async function(i){if(200===i.status&&200===i.data.code){let a=i.data.playlist.trackIds.filter(t=>t.id);e.tracks=a,e.pageInfo.totalPage=Math.ceil(a.length/e.pageInfo.size);let n=a.filter((t,s)=>s<e.pageInfo.size).map(t=>t.id).join(",");await e.getMusicListDetail(t,n,s)}}),(function(t){e.loading=!1,e.isListRefresh=!1,e.currentMusic.artist="歌单获取失败",e.currentMusic.currentTime=0,console.log(t)}))},musicListPageDown:n((async function(){let t=this;t.pageInfo.pageNum++;let s=t.tracks.filter((s,e)=>e>=(t.pageInfo.pageNum-1)*t.pageInfo.size&&e<t.pageInfo.pageNum*t.pageInfo.size).map(t=>t.id).join(",");await t.getMusicListDetail("pageDown",s,t.currentMusic.playListId)}),3e3),getMusicListDetail(t="first",s="",e=""){let i=this,n=0;i.loading=!0,i.isListRefresh=!0,s&&a()({baseURL:i.$themeConfig.back.musicUrl,url:"/song/detail?ids="+s,withCredentials:!0}).then((function(s){if(200===s.status&&200===s.data.code){let a=s.data.songs.map(t=>{let e=s.data.privileges.filter(s=>s.id==t.id).map(t=>t.chargeInfoList.map(t=>t.rate))[0];return{musicId:t.id,name:t.name||"",artist:t.ar.map(t=>t.name).join("，")||"",cover:t.al.picUrl?t.al.picUrl+"?param=200y200":"",brList:e,sort:n++,pop:t.pop,fee:t.fee,originCoverType:t.originCoverType}});i.musicList=i.musicList.concat(a),setTimeout(()=>{i.loading=!1,i.isListRefresh=!1},2e3),"first"==t&&i.getCurrentMusic(t),i.currentMusic.playListId=e}}),(function(t){i.loading=!1,i.isListRefresh=!1,i.currentMusic.artist=t.response.data.message,i.currentMusic.currentTime=0,console.log(t)}))},getCurrentMusic:n((function(t="first",s={}){if(s&&s.musicId==this.currentMusic.musicId)return;let e="prev"==t?--this.currentMusic.sort:++this.currentMusic.sort;if(!("playorder"==this.playType&&"autoNext"==t&&e>this.songsList.length-1)){if(setTimeout(()=>{this.scrollToCurrentMusic("music_",this.currentMusic.musicId)},1e3),this.$refs.audio.pause(),this.currentMusic.lrc="",this.currentMusic.lrcList=[],"playrandom"==this.playType&&"change"!==t){let t=this.songsList.filter(t=>t.musicId!=this.currentMusic.musicId);this.currentMusic=Object.assign({},this.currentMusic,t[Math.floor(Math.random()*t.length)])}else"first"===t?this.currentMusic=Object.assign({},this.currentMusic,this.songsList[0]):"change"===t?this.currentMusic=Object.assign({},this.currentMusic,s):("prev"===t&&e<0?e=this.songsList.length-1:e>this.songsList.length-1&&(e=0),this.currentMusic.sort=e,this.currentMusic=Object.assign({},this.currentMusic,this.songsList[e]));this.getMusic(this.currentMusic.musicId,this.currentMusic.brList[this.currentMusic.brList.length-1],t)}}),500),async getMusic(t="1868943615",s=128e3,e){let i=this;if(""===t)return;i.loading=!0;const n=localStorage.getItem("cookie");let r=null!=n?"post":"get",c=null!=n?{cookie:n}:{};a()({baseURL:i.$themeConfig.back.musicUrl,url:`/check/music?id=${t}&br=${s}&timestamp=${Date.now()}`,method:r,data:c,withCredentials:!0}).then((function(n){200===n.status&&n.data.success&&(i.getMusicLrc(t),a()({baseURL:i.$themeConfig.back.musicUrl,url:`/song/url?id=${t}&br=${s}&timestamp=${Date.now()}`,method:r,data:c,withCredentials:!0}).then((function(t){200===t.status&&(i.loading=!1,i.currentMusic.url=t.data.data[0].url.match("^http://")?t.data.data[0].url.replace("http://","https://"):t.data.data[0].url,("first"!=e||"first"==e&&i.autoPlay)&&setTimeout(()=>{i.$refs.audio.play()},2e3))}),(function(t){i.loading=!1,console.log(t)})))}),(function(t){i.loading=!1,i.currentMusic.artist=t.response.data.message,i.currentMusic.url="",i.currentMusic.name="",i.currentMusic.currentTime=0,console.log(t)}))},async getMusicLrc(t="1868943615"){let s=this;t&&a()({baseURL:s.$themeConfig.back.musicUrl,url:"/lyric?id="+t,withCredentials:!0}).then((function(t){if(200===t.status){let e=t.data.lrc.lyric,i=1;s.currentMusic.lrcList=e.split("\n").map(t=>{let s=t.substring(t.indexOf("[")+1,t.indexOf("]")+0).split(":");return{timestemp:parseInt(Math.floor(60*s[0])+Math.floor(s[1])),str:t.substring(t.indexOf("]")+1),lineNo:t.substring(t.indexOf("]")+1)&&i++}}).filter(t=>t.str),s.isArrow=!0,s.currentMusic.lrcList.length>0&&!s.currentMusic.lrcList[1].timestemp&&0!=s.currentMusic.lrcList[1].timestemp&&(s.isArrow=!1)}}),(function(t){console.log(t)}))},transformLrc:function(t,s=200){let e=Date.now();return function(){const i=Date.now(),a=s-(i-e),n=arguments,r=this;clearTimeout(null),a<=0&&(t.apply(r,n),e=Date.now())}}((function(t){let s=this;if(!s.isArrow)return;let e=s.currentMusic&&s.currentMusic.lrcList.filter(s=>s.timestemp<=t),i=e.filter(s=>s.timestemp==parseInt(t)).map(t=>t.str).join(",");i&&s.currentMusic.lrc!=i&&(s.currentMusic.lrc=i);let a=Math.max.apply(null,e.map(t=>t.lineNo));s.currentMusic.lineNo=a;let n=parseInt(s.$refs.lrcLine&&0!=s.$refs.lrcLine.length&&s.$refs.lrcLine[0].offsetHeight)||45;a&&isFinite(a)&&(s.$refs.lyric.scrollTop=n*(a-1))}),500),onPlay:n((function(){return this.isPlaying?this.$refs.audio.pause():this.$refs.audio.play()}),500),play(){this.playHistory=!0,this.isPlaying=!0},pause(){this.playHistory=!1,this.isPlaying=!1},next(t){this.getCurrentMusic("next")},prev(t){this.getCurrentMusic("prev")},transTime(t){var s=parseInt(t),e=parseInt(s/60),i=s%60+"";return 0===e?e="00":e<10&&(e="0"+e),1===i.length&&(i="0"+i),e+":"+i},onTimeupdate(t){this.currentMusic.currentTime=this.transTime(this.currentMusic.duration-t.target.currentTime),this.currentMusic.timestemp=parseInt(Math.floor(100*t.target.currentTime)/100),this.transformLrc(this.currentMusic.timestemp)},onLoadedmetadata(t){this.currentMusic.duration=t.target.duration,this.currentMusic.maxTime=this.transTime(t.target.duration),this.currentMusic.currentTime=this.currentMusic.maxTime},onEnded(t){this.getCurrentMusic("autoNext")},onVolume:n((function(t){let s=parseInt(10*this.$refs.audio.volume),e=10*this.volumeStep;"string"==typeof t&&(this.$refs.audio.volume="jian"===t?s-e<=0?0:(parseInt(10*this.$refs.audio.volume)-e)/10:s+e>=10?1:(parseInt(10*this.$refs.audio.volume)+e)/10),this.currentMusic.volume=this.$refs.audio.volume}),200),immerse(t){this.open=!this.open,this.open&&this.$refs.musicList.addEventListener("scroll",this.scroll),this.open||this.$refs.musicList.removeEventListener("scroll",this.scroll),this.open&&setTimeout(()=>{this.scrollToCurrentMusic("music_",this.currentMusic.musicId,{behavior:"auto"})},1e3)},getScroll(t="music_"){this.scrollToCurrentMusic(t,this.currentMusic.musicId,{behavior:"auto"})},scroll(t){let s=this,e=t.target.clientHeight,i=t.target.scrollHeight,a=t.target.scrollTop;s.pageInfo.totalPage>s.pageInfo.pageNum&&i<=a+e+10&&(s.searchFlag?s.searchHandle(s.search.query):s.musicListPageDown())},scrollToCurrentMusic(t="music_",s="",e={behavior:"smooth",block:"center"}){s&&this.$nextTick(()=>{document.querySelector("#"+t+s)&&document.querySelector("#"+t+s).scrollIntoView({behavior:e.behavior||"auto",block:e.block||"center"})})},inputChange(t){this.search.query=t,this.searchHandle(t)},searchHandle:n((function(t){let s=this,e=0;s.search.searchStr!=t?(s.search.resultList=[],s.$refs.musicList.scrollTop=0,s.pageInfo.pageNum=1):s.pageInfo.pageNum++,t.trim()||(s.searchFlag=!1,s.search.isRuning=!1),t.trim()&&(s.search.isRuning=!0,a()({baseURL:s.$themeConfig.back.musicUrl,url:"/cloudsearch?keywords="+t.trim()+"&offset="+(s.pageInfo.pageNum-1)*s.pageInfo.size+"&limit="+s.pageInfo.size,withCredentials:!0}).then((function(i){if(200===i.status){if(s.search.searchStr=t,0===i.data.result.songCount)return s.pageInfo.pageNum--,void(s.search.isRuning=!1);s.pageInfo.totalPage=Math.ceil(i.data.result.songCount/s.pageInfo.size);let a=i.data.result.songs.map(t=>{let s=[];return s.push(t.privilege.maxbr),{musicId:t.id,name:t.name||"",artist:t.ar.map(t=>t.name).join("，")||"",cover:t.al.picUrl?t.al.picUrl+"?param=200y200":"",brList:s,sort:e++,pop:t.pop,fee:t.fee,originCoverType:t.originCoverType}});s.search.resultList=s.search.resultList.concat(a),s.searchFlag=!0,setTimeout(()=>{s.search.isRuning=!1},1e3)}}),(function(t){s.search.isRuning=!1,console.log(t)})))}),2e3)}},c=(e(448),e(1)),l=Object(c.a)(r,(function(){var t=this,s=t._self._c;return t.isPC&&null!=t.linksWrapOffsetWidth?s("div",{staticClass:"nav-music",class:{pagefull:(t.$frontmatter.layout||t.$themeConfig.fullscreen&&t.$frontmatter.isFull||t.$frontmatter.home)&&!t.isFixed,fixed:t.isFixed,visible:t.isVisible},style:[{right:t.linksWrapOffsetWidth?t.linksWrapOffsetWidth+"px":""}]},[s("div",{staticClass:"mini-container",staticStyle:{display:"flex"}},[s("div",{staticClass:"img-box"},[s("a",{staticClass:"point_box",on:{click:t.immerse}},[s("div",{staticClass:"point_1"}),t._v(" "),s("div",{staticClass:"point_2"})]),t._v(" "),s("img",{staticClass:"avatar",class:{playing:t.isPlaying},attrs:{src:t.currentMusic?t.currentMusic.cover:""}})]),t._v(" "),s("div",{staticClass:"actions"},[s("div",{staticClass:"title"},[0==t.currentMusic.currentTime||t.loading?t._e():s("div",{staticClass:"time"},[s("span",{staticStyle:{"margin-right":"0.1rem"}},[t._v("\n            "+t._s(0==t.currentMusic.currentTime?"":t.currentMusic.currentTime)+"\n          ")])]),t._v(" "),t.loading?s("div",{staticClass:"loading"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e(),t._v(" "),s("div",{staticClass:"title-name"},[t.loading?t._e():s("span",[t._v("\n            "+t._s(t.isPlaying&&t.currentMusic.lrc?t.currentMusic.lrc:(t.currentMusic.artist||"")+(t.currentMusic.name?" - ":"")+(t.currentMusic.name||""))+"  \n          ")]),t._v(" "),t.loading?s("span",[t._v("正在加载...")]):t._e()])]),t._v(" "),s("div",{staticClass:"action-bar"},[s("i",{staticClass:"iconfont rays-prev-face",on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():s("i",{staticClass:"iconfont rays-play",on:{click:t.onPlay}}),t._v(" "),t.isPlaying?s("i",{staticClass:"iconfont rays-pause",on:{click:t.onPlay}}):t._e(),t._v(" "),s("i",{staticClass:"iconfont rays-next-face",on:{click:t.next}}),t._v(" "),t.currentMusic.volume<=0?s("i",{staticClass:"iconfont rays-mute",staticStyle:{"margin-left":".5rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?s("i",{staticClass:"iconfont rays-volume-reduce",staticStyle:{"margin-left":"1rem"},on:{click:function(s){return t.onVolume("jian")}}}):t._e(),t._v(" "),s("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),s("i",{staticClass:"iconfont rays-volume-add",on:{click:function(s){return t.onVolume("jia")}}}),t._v(" "),s("i",{staticClass:"iconfont palylist",class:"rays-"+t.playType,staticStyle:{"font-size":"1.2rem"},on:{click:t.playTypeHandle}}),t._v(" "),s("div",{staticClass:"dropdown-wrapper"},[s("a",{staticClass:"dropdown-box"},[s("i",{staticClass:"iconfont rays-songlist palylist",on:{mouseenter:function(s){return t.scrollToCurrentMusic("dropdown_",t.currentMusic.musicId,{behavior:"auto",block:"center"})}}})]),t._v(" "),s("DropdownTransition",[s("ul",{staticClass:"music-dropdown"},t._l(t.songsList,(function(e,i){return s("li",{key:e.musicId||i,staticClass:"music-dropdown-item"},[s("div",{staticClass:"music-info",attrs:{id:"dropdown_"+e.musicId},on:{click:function(s){return t.getCurrentMusic("change",e)}}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("img",{staticClass:"avatar",attrs:{src:e?e.cover:""}}),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"title-name",class:{"current-music":e.musicId==t.currentMusic.musicId}},[s("span",[t._v("\n                          "+t._s(e.name||"")+"  \n                        ")])]),t._v(" "),s("div",{staticClass:"title-name-sub"},[1===e.fee||4===e.fee?s("i",{staticClass:"iconfont rays-VIP",staticStyle:{color:"#d58c09 !important"}}):t._e(),t._v(" "),s("span",[t._v("\n                          "+t._s(e.artist||"")+"\n                        ")])])])]),t._v(" "),t.isPlaying&&e.musicId==t.currentMusic.musicId?s("div",{staticClass:"heart-hot"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e()])])})),0)])],1)])])]),t._v(" "),s("div",{staticClass:"immerse-wapper",class:{"immerse-wapper-open":t.open}},[s("div",{staticClass:"immerse-action"},[s("span",{staticClass:"immerse-close",attrs:{title:"ESC"},on:{click:t.immerse}})]),t._v(" "),s("div",{staticClass:"immerse-main"},[s("div",{staticClass:"immerse-avtar"},[t.isLogin?t._e():s("img",{staticClass:"avatar",class:{playing:t.isPlaying},staticStyle:{width:"15rem",height:"15rem","border-radius":"500px"},attrs:{src:t.currentMusic?t.currentMusic.cover:""},on:{click:t.onPlay}}),t._v(" "),t.isLogin?s("img",{staticClass:"avatar",staticStyle:{width:"15rem",height:"15rem","border-radius":"0"},attrs:{src:t.qrcodeImgUrl||""}}):t._e()]),t._v(" "),s("div",{staticClass:"immerse-cover"},[s("div",{staticClass:"immerse-title"},[s("span",{staticStyle:{"font-weight":"600"}},[t._v("\n            "+t._s(t.currentMusic.name||t.currentMusic.artist||"")+"  \n          ")]),t._v(" "),s("span",{staticStyle:{"font-size":"1rem"}},[t._v("\n            "+t._s(t.currentMusic.artist||"")+"\n          ")])]),t._v(" "),s("ul",{ref:"lyric",staticClass:"immerse-lrc"},[s("div",{staticStyle:{"max-width":"60rem"},style:{margin:t.isArrow?"30% 0":"10% 0"}},t._l(t.currentMusic.lrcList,(function(e,i){return e.str?s("li",{key:i,ref:"lrcLine",refInFor:!0,staticClass:"lrc",class:{active:e.lineNo===t.currentMusic.lineNo,lrcFlag:0===i}},[t._v(t._s(e.str))]):t._e()})),0)])]),t._v(" "),s("div",{staticClass:"immerse-musicList",class:{scrollbarActive:t.scrollbar,scrollbarDisplay:!t.scrollbar},on:{mouseenter:function(s){t.scrollbar=!0},mouseleave:function(s){t.scrollbar=!1}}},[s("div",{staticStyle:{display:"flex",padding:"0.5rem 1rem"}},[s("div",{staticClass:"catgBtns"},t._l(t.catgList,(function(e,i){return s("div",{staticClass:"listBtn",class:{listBtn_1:0==i,listBtn_2:0!=i&&i==t.catgList.length-1,selected:!t.searchFlag&&e.id==t.currentMusic.playListId},on:{click:function(s){return t.getMusicList(e.index,e.id)}}},[s("span",[t._v("\n                "+t._s(e.name)+"\n              ")])])})),0),t._v(" "),s("div",{staticClass:"refreshBtn",class:t.isListRefresh?"refreshing":""},[s("i",{staticClass:"iconfont rays-shuaxin1",on:{click:function(s){return t.getMusicList("refresh",t.playlistId)}}})]),t._v(" "),s("div",{staticClass:"locationBtn",staticStyle:{"margin-left":"-.8rem"}},[s("i",{staticClass:"iconfont rays-dingwei",on:{click:function(s){return t.getScroll("music_")}}})]),t._v(" "),s("div",{staticClass:"searchBox"},[s("i",{staticClass:"iconfont",class:{"reco-search":!t.search.isRuning,"rays-shuaxin":t.search.isRuning,refreshing:t.search.isRuning}}),t._v(" "),s("input",{class:{focused:t.searchFlag},style:{width:t.search.query?"60%":"0"},attrs:{"aria-label":"Search",placeholder:"搜索",autocomplete:"off",spellcheck:"false"},domProps:{value:t.search.query},on:{input:function(s){return t.inputChange(s.target.value)},focus:function(s){t.focused=!0},blur:function(s){t.focused=!1}}})])]),t._v(" "),s("div",[s("ul",{ref:"musicList",staticClass:"immerse-musicList-wapper"},[t._l(t.songsList,(function(e,i){return s("li",{key:i,staticClass:"music-dropdown-item"},[s("div",{staticClass:"music-info",attrs:{id:"music_"+e.musicId},on:{click:function(s){return t.getCurrentMusic("change",e)}}},[s("div",{staticStyle:{display:"flex","align-items":"center"}},[s("img",{staticClass:"avatar",attrs:{src:e?e.cover:""}}),t._v(" "),s("div",{staticClass:"detail"},[s("div",{staticClass:"title-name",class:{"current-music":e.musicId==t.currentMusic.musicId}},[s("span",[t._v("\n                        "+t._s(e.name||"")+"  \n                      ")])]),t._v(" "),s("div",{staticClass:"title-name-sub"},[1===e.fee||4===e.fee?s("i",{staticClass:"iconfont rays-VIP",staticStyle:{color:"#d58c09 !important"}}):t._e(),t._v(" "),s("span",[t._v("\n                        "+t._s(e.artist||"")+"\n                      ")])])])]),t._v(" "),t.isPlaying&&e.musicId==t.currentMusic.musicId?s("div",{staticClass:"heart-hot"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span"),t._v(" "),s("span")]):t._e()])])})),t._v(" "),s("div",{staticClass:"searchTip"},[t.search.isRuning||t.isListRefresh?s("span",[t._v("正在加载...")]):t._e(),t._v(" "),!t.isListRefresh&&!t.search.isRuning&&t.pageInfo.totalPage>t.pageInfo.pageNum?s("span",[t._v("\n                还剩 "+t._s(t.pageInfo.totalPage-t.pageInfo.pageNum)+" 页喔~      "+t._s(t.pageInfo.pageNum)+" / "+t._s(t.pageInfo.totalPage)+"\n              ")]):t._e(),t._v(" "),t.isListRefresh||t.search.isRuning||t.pageInfo.totalPage!=t.pageInfo.pageNum||0==t.songsList.length?t._e():s("span",[t._v("\n                ~  我也是有底线的  "+t._s(t.pageInfo.pageNum)+" / "+t._s(t.pageInfo.totalPage)+"  ~\n              ")]),t._v(" "),t.isListRefresh||t.search.isRuning||0!==t.songsList.length?t._e():s("span",[t._v("\n                ~  没有数据喔，试试其他的吧  ~\n              ")])])],2)])])]),t._v(" "),s("div",{staticClass:"immerse-footer"},[s("div",{staticClass:"action-bar"},[s("div",{staticClass:"user-info"},[s("a",{staticClass:"avater-img",attrs:{href:"https://music.163.com/",target:"_blank"}},[s("img",{staticClass:"avater-img",attrs:{src:t.userInfo.avatarUrl||"http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg"}})]),t._v(" "),s("div",{staticClass:"user-detail"},[s("span",{directives:[{name:"show",rawName:"v-show",value:t.userInfo.nickname,expression:"userInfo.nickname"}],staticClass:"user-name"},[t._v("\n               "+t._s(t.userInfo.nickname||"")+"\n               "),s("span",{staticClass:"logout",staticStyle:{"margin-left":"1rem"},on:{click:t.logout}},[t._v("退出")])]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:!t.userInfo.nickname,expression:"!userInfo.nickname"}],staticClass:"user-name",staticStyle:{"font-size":".8rem"}},[s("div",{staticClass:"login",staticStyle:{"margin-right":".2rem"},attrs:{href:t.loginUrl},on:{click:t.login}},[t._v("登录")]),t._v("  \n              后才可以听\n              "),s("i",{staticClass:"iconfont rays-VIP",staticStyle:{color:"#d58c09 !important",margin:"0","text-shadow":"none"}}),t._v("\n              音乐\n            ")]),t._v(" "),s("div",{staticClass:"level"},[s("img",{directives:[{name:"show",rawName:"v-show",value:t.isVip&&t.vipInfo.musicPackage.isSign,expression:"isVip && vipInfo.musicPackage.isSign"}],staticClass:"vip-img",staticStyle:{width:"1.3rem"},attrs:{src:t.vipInfo.musicPackage.dynamicIconUrl||t.vipInfo.musicPackage.iconUrl||""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isVip&&t.vipInfo.associator.isSign,expression:"isVip && vipInfo.associator.isSign"}],staticClass:"vip-img",attrs:{src:t.vipInfo.associator.dynamicIconUrl||t.vipInfo.associator.iconUrl||""}}),t._v(" "),s("img",{directives:[{name:"show",rawName:"v-show",value:t.isVip&&t.vipInfo.redplus.isSign,expression:"isVip && vipInfo.redplus.isSign"}],staticClass:"vip-img",attrs:{src:t.vipInfo.redplus.dynamicIconUrl||t.vipInfo.redplus.iconUrl||""}})])])]),t._v(" "),s("i",{staticClass:"iconfont rays-prev-face",attrs:{title:"Alt + ←"},on:{click:t.prev}}),t._v(" "),t.isPlaying?t._e():s("i",{staticClass:"iconfont rays-play",staticStyle:{"font-size":"3rem"},attrs:{title:"Space"},on:{click:t.onPlay}}),t._v(" "),t.isPlaying?s("i",{staticClass:"iconfont rays-pause",staticStyle:{"font-size":"3rem"},attrs:{title:"Space"},on:{click:t.onPlay}}):t._e(),t._v(" "),s("i",{staticClass:"iconfont rays-next-face",attrs:{title:"Alt + →"},on:{click:t.next}}),t._v(" "),s("audio",{ref:"audio",attrs:{controls:"",loop:"playsingle"==t.playType,autoplay:!1,src:t.currentMusic.url,volume:.3},on:{volumechange:t.onVolume,play:t.play,pause:t.pause,loadedmetadata:t.onLoadedmetadata,timeupdate:t.onTimeupdate,ended:t.onEnded}}),t._v(" "),t.currentMusic.volume<=0?s("i",{staticClass:"iconfont rays-mute",staticStyle:{"margin-left":"1rem"}}):t._e(),t._v(" "),t.currentMusic.volume>0?s("i",{staticClass:"iconfont rays-volume-reduce",staticStyle:{"margin-left":"1rem"},attrs:{title:"Alt + ↓"},on:{click:function(s){return t.onVolume("jian")}}}):t._e(),t._v(" "),s("span",{staticClass:"volume"},[t._v(t._s(parseInt(10*t.currentMusic.volume)))]),t._v(" "),s("i",{staticClass:"iconfont rays-volume-add",attrs:{title:"Alt + ↑"},on:{click:function(s){return t.onVolume("jia")}}}),t._v(" "),s("i",{staticClass:"iconfont palylist",class:"rays-"+t.playType,on:{click:t.playTypeHandle}})])])])]):t._e()}),[],!1,null,"21f69615",null);s.default=l.exports}}]);